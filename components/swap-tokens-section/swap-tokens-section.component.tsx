// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"
import Image from "../image/image.component"

const SwapTokensSection: React.FC = () => {
	return (
		<Section id="swap-tokens">
			<SectionIlu>
				<Image
					src="/assets/swap-tokens-section/top-left-ilu.svg"
					alt="top left ilu"
				/>
			</SectionIlu>

			<SectionHeading variant="DEFAULT">DEFI features</SectionHeading>

			<SectionContent
				title="Buy and sell tokens using Snek Swap."
				titleIcon={{
					src: "/assets/icons/title-icon-white.svg",
					alt: "white icon",
				}}
				description="Permissionless and without relying on centralized exchanges or other intermediaries."
				image={{
					src: "/assets/swap-tokens-section/first-ilu-v2.svg",
					alt: "swap tokens ilu",
				}}
				cta={{
					type: "link",
					href: "https://docs.bsx.fi/product_snek_swap/",
					label: "OPEN SNEK SWAP",
				}}
			/>

			<SectionContent
				reverse
				title="Help Raise Liquidity"
				titleIcon={{
					src: "/assets/icons/title-icon-white.svg",
					alt: "white icon",
				}}
				description="Support young projects which want to distribute tokens to their community while bootstrapping liquidity."
				image={{
					src: "/assets/swap-tokens-section/lbp-tile.svg",
					alt: "swap tokens ilu 2",
				}}
				cta={{
					type: "link",
					href: "https://docs.bsx.fi/product_snek_swap/",
					label: "Snek LBP",
				}}
			/>

			<SectionContent
				title="Liquidity<br/> Mining"
				titleIcon={{
					src: "/assets/icons/title-icon-white.svg",
					alt: "white icon",
				}}
				description="Provide liquidity to selected Snek pools and earn additional incentives on top of rewards from trading fees."
				image={{
					src: "/assets/earn-rewards-section/lbp-tile.svg",
					alt: "earn rewards ilu",
				}}
				cta={{
					type: "button",
					label: "Coming soon",
					disabled: true,
				}}
			/>
		</Section>
	)
}

export default SwapTokensSection

const SectionIlu = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			position: absolute;
			top: 0;
			right: 0;
			display: block;
			visibility: visible;
		}
	}
`

const Section = styled.section`
	position: relative;
	padding: 6rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 6rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 2rem;
		}
	}
`
