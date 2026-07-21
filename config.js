module.exports = {
	'colors' : {
		'blue'  : '#0070c0',
		'blue_1': '#0d2bff', 
		'blue_2': '#1451d0',
		'blue_3': '#1288f6',
		'blue_4': '#0ec9ff',
	},
	'primary': 'colors(blue_1)',

	'radius':'25px',

	'footer': {
		'background': 'transparent',
	},
	'btn':{
		'radius': '100px'
	},

	'input': {
		'background': 'colors(white)',
		'font-color': 'colors(greystronger)',
		'border-color': 'primary',
		'border-size': 'border-default-size',
		'placeholder-font-color': 'colors(grey)',
		'radius': true,
	},
	'input-focus': {
		// 'background': 'input(background)',
		// 'font-color': 'input(font-color)',
		'border-color': 'input(border-color)',
	},
	// 'input-valid': {
	// 	'background': 'input(background)',
	// 	'font-color': 'input(font-color)',
	// 	'border-color': 'input(border-color)',
	// },
	'input-invalid': {
		'background': 'input(background)',
		'font-color': 'input(font-color)',
		'border-color': 'error',
	},

	'griditem-minwidth': '25ch',
};