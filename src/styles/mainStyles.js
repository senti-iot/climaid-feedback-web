import { makeStyles } from '@material-ui/styles';

const mainStyles = makeStyles(theme => ({
	background: {
		width: '100%',
		height: '100vh',
		background: 'linear-gradient(180deg, rgba(194, 227, 224, 1) 0%, rgba(255, 255, 255, 1) 50%)',
	},
	header: {
		backgroundColor: 'transparent !important',
		marginBottom: 20,
	},
	logo: {
		maxWidth: 200,
	},
	spacer: {
		flexGrow: 1,
	},
	roomName: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	feedbackButtonWrapper: {
		width: 100,
		cursor: 'pointer',
	},
	feedbackButton: {
		display: 'flex',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: '50%',
		border: 'solid 2px transparent',
		backgroundColor: '#EDF5F7',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	},
	feedbackButtonSelected: {
		backgroundColor: '#fff',
		border: 'solid 2px #c2c2c2',
	},
	feedbackButtonImage: {
		maxWidth: '53px',
	},
	feedbackButtonLabel: {
		textAlign: 'center',
		fontSize: '1.3rem',
		userSelect: 'none',
		paddingTop: '5px',
	},
	sendButton: {
		width: 150,
		height: 50,
		background: '#72C1B6',
	},
	sendButtonLabel: {
		fontSize: '1.6rem',
		fontWeight: 400,
	},
	submittedIconWrapper: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	submittedIconBg: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '300px',
		height: '300px',
		backgroundColor: '#fff',
		borderRadius: '50%',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	}
}));

export default mainStyles;