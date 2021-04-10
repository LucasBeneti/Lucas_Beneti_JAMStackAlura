import { contactService } from './contactService';

const mockContactMessage = {
  data: {
    name: 'username',
    email: 'user@name.com',
    emailMessage: 'message',
  },
};

const HttpClientModuleMock = async () => {
  return {
    data: {
      name: 'username',
      email: 'user@name.com',
      emailMessage: 'message',
    },
  };
};

const HttpClientModuleMockError = async () => {
  return {
    message: 'bad request. no donut for you',
  };
};

describe('contactService', () => {
  describe('sendMessage()', () => {
    describe('when user tries to send an email', () => {
      it('and filled all fields correctly', async () => {
        const contactMessageResponse = await contactService.sendMessage(
          {
            name: 'username',
            email: 'user@name.com',
            emailMessage: 'message',
          },
          HttpClientModuleMock,
        );

        expect(contactMessageResponse).toEqual(mockContactMessage);
      });

      it('not all fields valid, throw error', async () => {
        const contactMessageResponse = await contactService.sendMessage(
          {
            name: 'username',
            email: 'user@name.com',
          },
          HttpClientModuleMockError,
        );
        // console.log(`contactMessageResponse`, contactMessageResponse);
        expect(contactMessageResponse).toEqual('bad request. no donut for you');
      });
    });
  });
});
