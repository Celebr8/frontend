import mailgun from 'mailgun.js';

const MAILGUN_API_KEY = '***REMOVED***';
const MAILGUN_BASE_DOMAIN = 'sandbox130fe99f5c0d4204b867b4f7536fa95e.mailgun.org'

console.log('MAILGUN_API_KEY', MAILGUN_API_KEY)

const mg = mailgun.client({username: 'api', key: MAILGUN_API_KEY});

// ================ Action types ================ //

export const SEND_CONTACT_US_MESSAGE_REQUEST = 'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE_REQUEST'
export const SEND_CONTACT_US_MESSAGE_SUCCESS = 'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE_SUCCESS';
export const SEND_CONTACT_US_MESSAGE_ERROR = 'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE_ERROR';

// ================ Reducers ================ //


const initialState = {
	message: { 
		email : '', 
		phoneNumber : '',
		message : '',
		subject : ''
	},
	sendingInProgress: false,
	sendingError: null
}

export default function reducer(state = initialState, action = {}) {

	const { type, payload } = action;

	switch (type) {

		case SEND_CONTACT_US_MESSAGE_REQUEST:
			return {
				...state,
				sendingInProgress: true,
			}
		case SEND_CONTACT_US_MESSAGE_SUCCESS:
			return initialState;
		case SEND_CONTACT_US_MESSAGE_ERROR:
			return {
				...state,
				sendingError: payload
			};
	}
}

// ================ Action creators ================ //

export const sendContactUsMessageRequest = () => ({
	type: SEND_CONTACT_US_MESSAGE_REQUEST,
});

export const sendContactUsMessageSuccess = () => ({
	type: SEND_CONTACT_US_MESSAGE_SUCCESS,
});


// ================ Thunks ================ //

/**
 * Send the email to founders@whichost.com using Mailgun
 */
export const sendContactUsMessage = params => (dispatch, getState, sdk) => {
	dispatch(sendContactUsMessageRequest())
	return mg.messages.create(MAILGUN_BASE_DOMAIN, {
		from: `Anonymous <${params.email}>`,
		to: ['loic@whichost.com'],
		subject: params.subject,
		text: params.message
	})
	.then(() => {

		dispatch(sendContactUsMessageSuccess())	
	
	})
}
