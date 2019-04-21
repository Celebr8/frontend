const SERVICE_MESSAGE_URL = 'https://whichost-service-message.herokuapp.com/message';
//const SERVICE_MESSAGE_URL = 'http://localhost:80/message';

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

	const data = {
		email: params.email,
		phoneNumber: params.phoneNumber,
		subject: params.subject,
		message: params.message
	}

	return fetch(SERVICE_MESSAGE_URL, {
		method: 'post',
		body: JSON.stringify(data)
	})	
	.then((answer) => {

		dispatch(sendContactUsMessageSuccess())	
	
	}).catch((error) => {

		console.log('error while trying to contact mailgun', error)	
	
	})
}
