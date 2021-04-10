import { HttpClient } from '../../infra/HttpClient';
import { CONTACT_BASE_URL } from '../../consts';

export const contactService = {
  async sendMessage({ name, email, emailMessage }, HttpClientModule = HttpClient) {
    const contactDTO = {
      name: name,
      email: email,
      message: emailMessage,
    };

    return HttpClientModule(`${CONTACT_BASE_URL}`, {
      method: 'POST',
      body: contactDTO,
    });
  },
};
