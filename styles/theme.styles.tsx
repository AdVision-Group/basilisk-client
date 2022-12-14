export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		primary: "#FFCE4F",
		secondary: "#4FFFB0",
	},
	button: {
		color: "#000",
		firstColor: "#4FFFB0",
		secondColor: "#B3FF8F",
		hoverFirstColor: "#88FFCA",
		hoverSecondColor: "#D2FFBC",
		activeFirstColor: "#B8FFD5",
		activeSecondColor: "#B8FFD5",
		hoverBoxShadow: "0px 10px 31px -11px rgba(141, 255, 200, 0.36)",
		activeBoxShadow: "0px 16px 31px -11px rgba(141, 255, 200, 0.36)",
		background: `linear-gradient(90deg, #4FFFB0 0%, #B3FF8F 100%)`,
		hoverBackground: `linear-gradient(90deg, #88FFCA 0%, #D2FFBC 100%)`,
		disabledBackground: "rgba(218, 255, 238, 0.06)",
		disabledColor:
			"linear-gradient(90deg, #4FFFB0 1.27%, #B3FF8F 48.96%, #FF984E 104.14%), linear-gradient(90deg, #4FFFB0 1.27%, #A2FF76 53.24%, #FF984E 104.14%), linear-gradient(90deg, #FFCE4F 1.27%, #4FFFB0 104.14%)",
		greenVariantBackground: "rgba(76, 243, 168, 0.12)",
		hoverGreenVariantBackground: "rgba(76, 243, 168, 0.3)",
		activeGreenVariantBackground: "rgba(76, 243, 168, 0.5)",
		greenVariantColor: "#4FFFB0",
		activeGreenVariantColor: "#B8FFDF",
		greenBlackVariantBackground: "rgba(0, 0, 0, 0.12)",
		greenBlackVariantColor: "#000",
	},
	header: {
		background: "rgba(22, 25, 28, 0.5)",
		navItemColor: "#FFFFFF",
		hoverNavItemColor: "#B8FFDF",
		dropdownMenu: {
			beforeBackground: "rgba(76, 243, 168, 0.12)",
			background: "rgba(22, 25, 28, 0.5)",
			hoverBackground: "rgba(218, 255, 238, 0.06)",
			borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
			boxShadow: "0px 40px 70px rgba(0, 0, 0, 0.8)",
			blur: "blur(20px)",
			color: "#DAFFEE",
			// hoverColor: "#fff",
		},
		mobileMenu: {
			background: "#121416",
			navItemBorder: "0.0461563rem solid rgba(76, 243, 168, 0.12)",
			dropdownMenu: {
				navItemColor: "#DAFFEE",
				hoverBackground: "rgba(218, 255, 238, 0.06)",
			},
		},
	},
	heroSection: {
		backgroundColor: "#121416",
		headingBackground:
			"linear-gradient(90deg, #4fffb0 0%, #b3ff8f 50%, #ff984e 100%)",
		descriptionColor: "#E5ECF1",
		ctaButtonBackground: "linear-gradient(90deg, #4FFFB0 0%, #B3FF8F 100%)",
	},
	onChainSection: {
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.2) -11.67%, rgba(0, 0, 0, 0) 32.64%), linear-gradient(90deg, #4FFFB0 1.27%, #B3FF8F 104.14%)",
		color: "#000",
		dividerColor: "#211F24",
	},
	sectionHeading: {
		default: "linear-gradient(90deg, #4FFFB0 0%, #B3FF8F 50%, #FF984E 100%)",
		blue: "linear-gradient(269.88deg, #0EA8FF 5.48%, #4555EA 82.61%, #0D1029 166.99%), linear-gradient(90deg, #4FFFB0 1.27%, #B3FF8F 104.14%)",
		orange: "linear-gradient(90deg, #FF9264 0%, #FFCD6D 100%)",
		green: "linear-gradient(90deg, #4FFFB0 0%, #B3FF8F 100%)",
	},
	sectionContainer: {
		titleColor: "#EBEBEB",
		descriptionColor: "#ACB2B5",
	},
	supportSection: {
		color: "#EBEBEB",
		mobileColor: "#ACB2B5",
		colBackground: "rgba(218, 255, 238, 0.04)",
		colBorder: "1px solid rgba(218, 255, 238, 0.06)",
	},
	roadmapSection: {
		color: "#ACB2B5",
		greenRow: "linear-gradient(90deg, #212328 31.29%, #4CF3A8 119.04%)",
		// greenRow:
		// 	"linear-gradient(90deg, rgba(68, 68, 74, 0) 0%, rgba(107, 210, 123, 1) 100%)",
		greenBorder:
			"linear-gradient(90deg, rgba(68, 68, 74, 0) 0%, rgba(107, 210, 123, 1) 100%)",
		blueBorder:
			"linear-gradient(90deg, rgba(68, 68, 74, 0) 0%, rgba(107, 142, 210, 1) 100%)",
		yellowBorder:
			"linear-gradient(90deg, rgba(68, 68, 74, 0) 0%, rgba(255, 244, 204, 1) 100%)",
		orangeBorder:
			"linear-gradient(90deg, rgba(68, 68, 74, 0) 0%, rgba(255, 174, 140, 1) 100%)",
		blueRow: "linear-gradient(90deg, #212328 31.29%, #4C71F3 119.04%)",
		yellowRow:
			"linear-gradient(270deg, #FFD363 16.3%, #CDA351 40.52%, #1F2125 85.7%), linear-gradient(0deg, #212328, #212328), linear-gradient(90deg, #FFA34F 0%, #B3FF8F 100%)",
		orangeRow:
			"linear-gradient(270deg, #FF9263 23.52%, rgba(255, 136, 165, 0.34) 49.56%, rgba(0, 0, 0, 0) 99.72%), linear-gradient(0deg, #212328, #212328), linear-gradient(90deg, #FFA34F 0%, #B3FF8F 100%)",

		titleColor: "FFFFFF",
		statusColor: "",
	},
	learnMoreSection: {
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.2) -11.67%, rgba(0, 0, 0, 0) 32.64%), linear-gradient(90deg, #4FFFB0 1.27%, #B3FF8F 104.14%)",
		color: "#121416",
	},
	footer: {
		background: "#121416",
		navTitleColor: "#fff",
		navItemColor: "#787E82",
		hoverNavItemColor: "#fff",
	},
	hamMenu: {
		color: "#FFFFFF",
		bottomColor: "#9EA9B1",
	},
	backgrounds: {},
	fonts: {
		primary: "#EBEBEB",
		secondary: "#ACB2B5",
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "1536px",
	},
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
