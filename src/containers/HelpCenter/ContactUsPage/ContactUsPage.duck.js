import config from '../../../config';

// ================ Action types ================ //

export const SEND_CONTACT_US_MESSAGE_REQUEST =
  'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE_REQUEST';
export const SEND_CONTACT_US_MESSAGE_SUCCESS =
  'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE_SUCCESS';
export const SEND_CONTACT_US_MESSAGE_ERROR =
  'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE_ERROR';

// ================ Reducers ================ //

const initialState = {
  message: {
    email: '',
    phoneNumber: '',
    message: '',
    subject: '',
  },
  sendingInProgress: false,
  sendingError: null,
  sendingSuccess: false,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SEND_CONTACT_US_MESSAGE_REQUEST:
      return {
        ...state,
        sendingInProgress: true,
      };
    case SEND_CONTACT_US_MESSAGE_SUCCESS:
      const newState = {
        ...state,
        sendingError: undefined,
        sendingInProgress: false,
        sendingSuccess: true,
      };
      return newState;
    case SEND_CONTACT_US_MESSAGE_ERROR:
      return {
        ...state,
        sendingError: payload,
        sendingSuccess: false,
      };
    default:
      return state;
  }
}

// ================ Action creators ================ //

export const sendContactUsMessageRequest = () => ({
  type: SEND_CONTACT_US_MESSAGE_REQUEST,
});

export const sendContactUsMessageSuccess = () => ({
  type: SEND_CONTACT_US_MESSAGE_SUCCESS,
});

export const sendContactUsMessageError = error => ({
  type: SEND_CONTACT_US_MESSAGE_ERROR,
  payload: error,
});

// ================ Thunks ================ //

/**
 * Send the email to founders@whichost.com using Mailgun
 */
export const sendContactUsMessage = params => (dispatch, getState, sdk) => {
  dispatch(sendContactUsMessageRequest());

  const data = {
    email: params.email,
    phoneNumber: params.phoneNumber,
    subject: params.subject,
    message: params.message,
    recaptchaToken: params.recaptchaToken,
  };

	console.log(config.serviceMessageUrl)
  return fetch(config.serviceMessageUrl, {
    method: 'post',
    body: JSON.stringify(data),
  })
    .then(answer => {
      if (!answer.ok) throw Error('Error while trying to contact the server');
      dispatch(sendContactUsMessageSuccess());
    })
    .catch(error => {
      dispatch(sendContactUsMessageError(error));
      console.error('Error while trying to contact the microservice', error);
    });
};
