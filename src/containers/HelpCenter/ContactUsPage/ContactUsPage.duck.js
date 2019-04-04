
// ================ Action types ================ //

export const SEND_CONTACT_US_MESSAGE = 'app/HelpCenter/ContactUsPage/SEND_CONTACT_US_MESSAGE';

// ================ Action creators ================ //

export const sendContactUsMessage = (values) => ({
	type: SEND_CONTACT_US_MESSAGE,
	values
})
