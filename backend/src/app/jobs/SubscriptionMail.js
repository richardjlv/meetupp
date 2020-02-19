import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { meetup, name } = data;

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Nova inscrição',
      template: 'subscription',
      context: {
        provider: meetup.user.name,
        meetup: meetup.name,
        date: format(
          parseISO(meetup.date),
          "'Dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
        user: name,
      },
    });
  }
}

export default new CancellationMail();
