import { endOfHour, startOfHour } from 'date-fns';
import { Op } from 'sequelize';

import File from '../models/File';
import Meetup from '../models/Meetup';
import User from '../models/User';

class SubscriberController {
  async index(req, res) {
    const { subscribers } = await User.findByPk(req.userId);

    const meetups = await Meetup.findAll({
      where: {
        id: subscribers,
      },
      order: [['date', 'asc']],
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
    });
    return res.json(meetups);
  }

  async store(req, res) {
    const { id, subscribers } = await User.findByPk(req.userId);

    const meetup = await Meetup.findByPk(req.body.meetup_id);

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not exists' });
    }

    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'You cannot subscriber a Meetup you have created' });
    }

    const alreadySubscriber = subscribers.find(sub => meetup === sub);

    if (alreadySubscriber) {
      return res
        .status(400)
        .json({ error: 'You have already subscribed this meetup' });
    }

    const meetups = await Meetup.findOne({
      where: {
        id: subscribers,
        date: {
          [Op.between]: [startOfHour(meetup.date), endOfHour(meetup.date)],
        },
      },
    });

    if (meetups) {
      return res
        .status(400)
        .json({ error: 'You have already subscribed in a meetup this date' });
    }

    subscribers.push(req.body.meetup_id);

    await User.update(
      { subscribers },
      {
        where: {
          id,
        },
      }
    );

    return res.json({ message: 'You subscribed this Meetup' });
  }
}

export default new SubscriberController();
