import { subHours, isBefore, parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import * as Yup from 'yup';

import File from '../models/File';
import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const { date, page = 1 } = req.query;

    const meetups = await Meetup.findAll({
      where: {
        date: {
          [Op.between]: [startOfDay(parseISO(date)), endOfDay(parseISO(date))],
        },
      },
      order: ['date'],
      attributes: ['id', 'name', 'description', 'date', 'location'],
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      banner_id: Yup.number(),
      date: Yup.date().required(),
      location: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, description, banner_id, date, location } = req.body;

    const hourStart = parseISO(date);

    if (isBefore(hourStart, new Date())) {
      return res.status(401).json({ error: "This date can't available" });
    }

    const { id } = await User.findByPk(req.userId);

    const meetup = await Meetup.create({
      name,
      description,
      banner_id,
      date,
      location,
      user_id: id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      date: Yup.date(),
      location: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const meetup = await Meetup.findByPk(req.params.meetup_id);

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not exists.' });
    }

    const { date } = req.body;

    const hourStart = subHours(meetup.date, 1);

    if (isBefore(hourStart, new Date())) {
      return res
        .status(401)
        .json({ error: 'You can only changes meetup 1 hours advances.' });
    }

    const newHourStart = subHours(parseISO(date), 1);

    if (isBefore(newHourStart, new Date())) {
      return res.status(401).json({ error: "This date can't available" });
    }

    const {
      id,
      name,
      description,
      location,
      banner_id,
      user_id,
    } = await meetup.update(req.body);

    return res.json({
      id,
      name,
      date,
      description,
      location,
      banner_id,
      user_id,
    });
  }

  async delete(req, res) {
    const meetup = await Meetup.findOne({
      where: { id: req.params.meetup_id },
    });

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: "You don't have permission to cancel this meetup" });
    }

    const date = subHours(meetup.date, 1);

    if (isBefore(date, new Date())) {
      return res
        .status(400)
        .json({ error: 'You can only delete meetup 1 hours advances.' });
    }

    await meetup.destroy();

    return res.json({ message: 'Meetup has delete' });
  }
}

export default new MeetupController();
