import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#72C1B6',
		},
		// secondary: {
		// 	main: '#979797',
		// },
	},
	typography: {
		h1: {
			fontSize: '2.3rem',
			fontWeight: 400,
		},
		h2: {
			fontSize: '1.8rem',
			fontWeight: 300,
		},
		h3: {
			fontSize: '1.4rem',
			fontWeight: 300,
		},
		h4: {
			fontSize: '1.2rem',
			fontWeight: 300,
		},
		body1: {
			fontSize: '1.1rem',
		},
	},
});

export default theme;