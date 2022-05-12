import { createTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createTheme({
		typography: {
			useNextVariants: true,
		},
		palette: {
			primary: {
				light: '#484848',
				main: '#212121',
				dark: '#000000',
				contrastText: '#fff',
			},
			secondary: {
				light: '#ffff6e',
				main: '#cddc39',
				dark: '#99aa00',
				contrastText: '#000',
			},
			openTitle: '#3f4771',
			protectedTitle: pink['400'],
			type: 'light'
		}
	})

	export default theme