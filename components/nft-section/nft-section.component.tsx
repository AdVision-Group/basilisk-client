// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const NftSection: React.FC = () => {
	return (
		<Section>
			<SectionIlu>
				<Image src="/assets/ntf-section/left-ilu.svg" alt="left ilu" />
			</SectionIlu>

			<SectionHeading variant="BLUE">NFT Marketplace</SectionHeading>

			<SectionContent
				title="Buy and Sell NFTs. <img 
					class='koda'
					src='/assets/ntf-section/koda-logo-opt.png'
					alt='koda logo'
				/>"
				titleIcon={{
					src: "/assets/icons/title-icon-blue.svg",
					alt: "blue icon",
				}}
				description="Fully featured NFT Marketplace. Buy or sell your favorite NFTs, make offers for unlisted NFTs or set royalty fees to support the artist"
				bgImage={{
					src: "/assets/ntf-section/content-bg-ilu-v2.webp",
					alt: "bg ilu",
				}}
				image={{
					top: "1rem",
					left: "3rem",
					right: "-22rem",
					bottom: "-12rem",
					width: "110%",
					src: "/assets/ntf-section/first-content-ilu-v3.webp",
					alt: "nft ilu",
				}}
				cta={{
					type: "link",
					label: "open KODADOT",
					href: "https://kodadot.xyz/",
				}}
			/>

			<SectionContent
				reverse
				title="Participate in<br/> NFT Auctions."
				titleIcon={{
					src: "/assets/icons/title-icon-blue.svg",
					alt: "blue icon",
				}}
				description="Flip your jpegs with style. English, Top Up and Candle auctions - just choose your mode and let the luckiest bidder win."
				bgImage={{
					src: "/assets/ntf-section/content-bg-ilu-v2.webp",
					alt: "bg ilu",
				}}
				image={{
					top: "12%",
					left: 0,
					right: 0,
					bottom: 0,
					width: "100%",
					src: "/assets/ntf-section/second-content-ilu-v3.webp",
					alt: "nft ilu 2",
				}}
				cta={{
					type: "button",
					// href: "https://docs.bsx.fi/product_snek_swap/",
					label: "COMING SOON",
					disabled: true,
				}}
			/>
		</Section>
	)
}

export default NftSection

const Section = styled.section`
	position: relative;

	padding: 11.8rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 9rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 2rem 0;
		}
	}
`

const SectionIlu = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			position: absolute;
			top: -25rem;
			left: 0;
			display: block;
			visibility: visible;
			z-index: -1;
		}
	}
`
