// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import RoadmapItem, { IProps } from "../roadmap-item/roadmap-item.component"
import { Button } from "../button/button.component"
import Image from "../image/image.component"

const RoadmapSection: React.FC = () => {
	const roadmapItems: IProps[] = [
		{
			title: "XYK Pools",
			status: "Completed it mate",
			icon: {
				src: "/assets/roadmap-section/basilisk.png",
				alt: "basilisk",
			},
			variant: "GREEN",
			process: "25%",
		},
		{
			title: "Liquidity Provisioning",
			status: "Completed it mate",
			icon: {
				src: "/assets/roadmap-section/money.png",
				alt: "money",
			},
			variant: "GREEN",
			process: "35%",
		},
		{
			title: "NFT Marketplace",
			status: "Completed it mate",
			icon: {
				src: "/assets/roadmap-section/pallete.png",
				alt: "pallete",
			},
			variant: "GREEN",
			process: "40%",
		},
		{
			title: "LBP",
			status: "SoonTM",
			icon: {
				src: "/assets/roadmap-section/bag.png",
				alt: "bag",
			},
			variant: "BLUE",
			process: "55%",
		},
		{
			title: "Moar Token Pairs",
			status: "SoonTM",
			icon: {
				src: "/assets/roadmap-section/pancake.png",
				alt: "pancake",
			},
			variant: "BLUE",
			process: "55%",
		},
		{
			title: "Liquidity Mining",
			status: "SoonTM",
			icon: {
				src: "/assets/roadmap-section/pickaxe.png",
				alt: "pickaxe",
			},
			variant: "BLUE",
			process: "55%",
		},
		{
			title: "Order Router",
			status: "SoonTM",
			icon: {
				src: "/assets/roadmap-section/semafor.png",
				alt: "semafor",
			},
			variant: "BLUE",
			process: "55%",
		},
		{
			title: "Stableswap",
			status: "SoonTM",
			icon: {
				src: "/assets/roadmap-section/coin.png",
				alt: "coin",
			},
			variant: "BLUE",
			process: "55%",
		},
		{
			title: "NFT Auctions",
			status: "3 Weeks",
			icon: {
				src: "/assets/roadmap-section/pen.png",
				alt: "pen",
			},
			variant: "YELLOW",
			process: "65%",
		},
		{
			title: "Smartboi Pants - Redeemable NFTs",
			status: "3 Weeks",
			icon: {
				src: "/assets/roadmap-section/shorts.png",
				alt: "shorts",
			},
			variant: "YELLOW",
			process: "65%",
		},
		{
			title: "TWAMM",
			status: "It’s been 84 years",
			icon: {
				src: "/assets/roadmap-section/hourglass.png",
				alt: "hourglass",
			},
			variant: "ORANGE",
			process: "90%",
		},
		{
			title: "Order Matching",
			status: "It’s been 84 years",
			icon: {
				src: "/assets/roadmap-section/emoji.png",
				alt: "money",
			},
			variant: "ORANGE",
			process: "90%",
		},
		{
			title: "Slip-based Fees",
			status: "It’s been 84 years",
			icon: {
				src: "/assets/roadmap-section/fish.png",
				alt: "money",
			},
			variant: "ORANGE",
			process: "90%",
		},
	]

	return (
		<Section>
			<SectionHeading variant="GREEN">The roadmap</SectionHeading>

			<Description>
				Basilisk is a decentralized protocol with a community-first approach.
				All decisions affecting the protocol are adopted in a democratic
				process.
			</Description>
			<Button
				variant="GREEN"
				icon={{
					src: "/assets/icons/roadmap-icon.svg",
					alt: "roadmap icon",
				}}
				rounded
				left="auto"
				right="auto"
			>
				Check live roadmap
			</Button>

			<RoadmapContainer>
				<Border />
				{/* <LineFigure>
					<Image
						src={"/assets/roadmap-section/line.svg"}
						alt={"line"}
						width={"100%"}
					/>
				</LineFigure> */}
				<IconFigure>
					<Image
						src={"/assets/icons/title-icon-green.svg"}
						alt={"green icon"}
						width={"100%"}
						height={"100%"}
					/>
				</IconFigure>

				<SnakeFigure>
					<Image
						src="/assets/roadmap-section/snake.svg"
						alt="snake"
						width={"100%"}
					/>
				</SnakeFigure>
				{roadmapItems.map((item, index) => (
					<RoadmapItem
						key={index}
						title={item.title}
						status={item.status}
						icon={item.icon}
						variant={item.variant}
						process={item.process}
					/>
				))}
			</RoadmapContainer>
		</Section>
	)
}

export default RoadmapSection

const Section = styled.section`
	position: relative;
	padding: 8rem 2rem;

	h2 {
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		h2 {
			margin-bottom: 0.6rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			h2 {
				margin-bottom: 1rem;
			}
		}
	}
`

const Description = styled.p`
	font-size: 1.6rem;
	line-height: 2.28rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 2.8rem;
	color: ${({ theme }) => theme.roadmapSection.color};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.68rem;
		max-width: 64.98rem;
		margin: 0 auto 2.4rem;
		line-height: 2.352rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 2.8rem;
			max-width: 108.3rem;
			margin: 0 auto 4rem;
			line-height: 3.92rem;
		}
	}
`

const RoadmapContainer = styled.div`
	position: relative;
	margin-top: 2rem;
	padding: 2rem 0;
	/* padding-top: 2rem; */
	/* border: 1px solid red; */
`

const IconFigure = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
		visibility: visible;
		position: absolute;
		top: 2rem;
		right: 0;
		width: 0.527rem;
		height: 0.534rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			top: 2.5rem;
			width: 0.877rem;
			height: 0.89rem;
		}
	}
`

const SnakeFigure = styled.figure`
	width: 49.5%;
	margin-bottom: 1rem;
`

const Border = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	content: "";
	border-left: 0.1rem dotted #fff;
	z-index: 1;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		border-left: 0.3rem dotted #fff;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			border-left: 0.5rem dotted #fff;
		}
	}
`