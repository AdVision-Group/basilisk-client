// Utils
import styled, { css } from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
// import FlexContainer from "../flex-container/flex-container.component"

// Types
interface IItemProps {
	variant?: "GREEN" | "BLUE" | "YELLOW" | "ORANGE"
	process: string
}

export interface IProps extends IItemProps {
	variants?: Variants
	title: string
	status: string
	icon: {
		src: string
		alt: string
	}
}

const RoadmapItem: React.FC<IProps> = ({
	variants,
	title,
	status,
	icon,
	variant = "GREEN",
	process,
}) => {
	return (
		<>
			<LineFigure>
				<Image
					src={"/assets/roadmap-section/single-line.svg"}
					alt={"line"}
					width={"100%"}
				/>
			</LineFigure>
			<Item
				variants={variants}
				process={process}
				variant={variant}
				initial={"hidden"}
				whileInView={"visible"}
				viewport={{ once: true }}
			>
				{/* <FlexContainer alignItems="center" wrap="nowrap"> */}
				<Content>
					<Title>{title}</Title>
					<Status
						dangerouslySetInnerHTML={{
							__html: status,
						}}
					/>
				</Content>
				<ItemIcon>
					<Image src={icon.src} alt={icon.alt} width={"100%"} height={"100%"} />
				</ItemIcon>
				{/* </FlexContainer> */}
			</Item>
			<MobileContent variants={variants}>
				<Title>{title}</Title>
				<Status
					dangerouslySetInnerHTML={{
						__html: status,
					}}
				></Status>
			</MobileContent>
		</>
	)
}

export default RoadmapItem

const greenStyles = css<IItemProps>`
	&:before {
		content: "";
		position: absolute;
		top: -0.1rem;
		left: -0.1rem;
		right: -0.1rem;
		bottom: -0.1rem;
		border-radius: 1rem;
		z-index: -100;
		background: ${({ theme }) => theme.roadmapSection.greenBorder};
	}

	&:after {
		content: "";
		position: absolute;
		top: 0rem;
		left: 0rem;
		right: 0rem;
		bottom: 0rem;
		border-radius: 1rem;
		z-index: -99;
		background: ${({ theme }) => theme.roadmapSection.greenRow};
	}
`
const blueStyles = css<IItemProps>`
	&:before {
		content: "";
		position: absolute;
		top: -0.1rem;
		left: -0.1rem;
		right: -0.1rem;
		bottom: -0.1rem;
		border-radius: 1rem;
		z-index: -100;
		background: ${({ theme }) => theme.roadmapSection.blueBorder};
	}

	&:after {
		content: "";
		position: absolute;
		top: 0rem;
		left: 0rem;
		right: 0rem;
		bottom: 0rem;
		border-radius: 1rem;
		z-index: -99;
		background: ${({ theme }) => theme.roadmapSection.blueRow};
	}
`
const yellowStyles = css<IItemProps>`
	&:before {
		content: "";
		position: absolute;
		top: -0.1rem;
		left: -0.1rem;
		right: -0.1rem;
		bottom: -0.1rem;
		border-radius: 1rem;
		z-index: -100;
		background: ${({ theme }) => theme.roadmapSection.yellowBorder};
	}

	&:after {
		content: "";
		position: absolute;
		top: 0rem;
		left: 0rem;
		right: 0rem;
		bottom: 0rem;
		border-radius: 1rem;
		z-index: -99;
		background: ${({ theme }) => theme.roadmapSection.yellowRow};
	}
`
const orangeStyles = css<IItemProps>`
	&:before {
		content: "";
		position: absolute;
		top: -0.1rem;
		left: -0.1rem;
		right: -0.1rem;
		bottom: -0.1rem;
		border-radius: 1rem;
		z-index: -100;
		background: ${({ theme }) => theme.roadmapSection.orangeBorder};
	}

	&:after {
		content: "";
		position: absolute;
		top: 0rem;
		left: 0rem;
		right: 0rem;
		bottom: 0rem;
		border-radius: 1rem;
		z-index: -99;
		background: ${({ theme }) => theme.roadmapSection.orangeRow};
	}
`

const LineFigure = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
		visibility: visible;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Item = styled(motion.div)<IItemProps>`
	position: relative;
	/* width: ${({ process }) => process}; */
	border-radius: 1rem;
	padding: 0.573rem 1rem;
	margin-bottom: 0.8rem;
	/* z-index: -1; */
	white-space: nowrap;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${({ variant }) => {
		switch (variant) {
			case "GREEN":
				return greenStyles
			case "BLUE":
				return blueStyles
			case "YELLOW":
				return yellowStyles
			case "ORANGE":
				return orangeStyles
			default:
				return greenStyles
		}
	}}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: 2.04rem;
		padding: 0.6rem 0.8rem 0.6rem 1.5rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 1rem 2.5rem;
			margin-bottom: 3.35rem;
		}
	}
`

const Content = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
		visibility: visible;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const MobileContent = styled(motion.div)`
	margin-bottom: 2.04rem;
	white-space: nowrap;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none !important;
		visibility: hidden;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Title = styled.h4`
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 120%;
	color: ${({ theme }) => theme.roadmapSection.titleColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.14rem;
		line-height: 120%;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 1.9rem;
			line-height: 2.28rem;
			margin-bottom: 0.4rem;
		}
	}
`
const Status = styled.p`
	font-size: 1.1rem;
	font-weight: 500;
	line-height: 120%;
	color: ${({ theme }) => theme.roadmapSection.statusColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.84rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 1.4rem;
		}
	}
`

const ItemIcon = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	/* height: 3.6rem; */
`
