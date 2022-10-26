// Utils
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
import Link from "next/link"

const Footer: React.FC = () => {
	const aboutItems = [
		{
			label: "Press Kit",
			slug: "/",
		},
		{
			label: "Tokenomics",
			slug: "/",
		},
		{
			label: "Documentation",
			slug: "https://docs.bsx.fi/",
		},
	]

	const socialsItems = [
		{
			label: "Discord",
			slug: "https://discord.com/invite/S8YZj5aXR6",
			icon: {
				src: "/assets/icons/discord.svg",
				alt: "discord",
			},
		},
		{
			label: "Github",
			slug: "https://github.com/galacticcouncil",
			icon: {
				src: "/assets/icons/github.svg",
				alt: "github",
			},
		},
		{
			label: "Twitter",
			slug: "https://twitter.com/bsx_finance",
			icon: {
				src: "/assets/icons/twitter.svg",
				alt: "twitter",
			},
		},
		{
			label: "Telegram",
			slug: "https://t.me/bsx_fi",
			icon: {
				src: "/assets/icons/telegram.svg",
				alt: "telegram",
			},
		},
		{
			label: "Substack",
			slug: "https://basiliskfi.substack.com/",
			icon: {
				src: "/assets/icons/substack.svg",
				alt: "substack",
			},
		},
		{
			label: "Reddit",
			slug: "/",
			icon: {
				src: "/assets/icons/reddit.svg",
				alt: "reddit",
			},
		},
	]

	return (
		<FooterContainer>
			<Row>
				<Col className="logo">
					<Link href="/">
						<a>
							<Logo>
								<Image
									src="/assets/logo-v1.svg"
									alt="logo"
									width="100%"
									effect="blur"
								/>
							</Logo>
						</a>
					</Link>
				</Col>
				<Col>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title className="divider">Start</Title>
							</a>
						</Link>
					</ColItem>
					<ColItem>
						<Link passHref href={"/#swap-tokens"}>
							<a>
								<Title className="divider">Features</Title>
							</a>
						</Link>
					</ColItem>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title>About</Title>
							</a>
						</Link>
						<NavList className="divider">
							{aboutItems.map((item, index) => (
								<NavItem key={index}>
									<Link href={item.slug} passHref>
										<LabelA>
											<LabelSpan>{item.label}</LabelSpan>
										</LabelA>
									</Link>
								</NavItem>
							))}
						</NavList>
					</ColItem>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title>Socials</Title>
							</a>
						</Link>
						<NavList className="divider">
							{socialsItems.map((item, index) => (
								<NavItem key={index}>
									<Link href={item.slug} passHref>
										<LabelA>
											<LabelSpan>{item.label}</LabelSpan>
										</LabelA>
									</Link>
								</NavItem>
							))}
						</NavList>
					</ColItem>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title>Blog</Title>
							</a>
						</Link>
					</ColItem>
				</Col>
			</Row>
		</FooterContainer>
	)
}

export default Footer

const Logo = styled.div`
	width: 19.879rem;
	/* display: none;
	visibility: hidden; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* display: block;
			visibility: visible; */
		}
	}
`

const FooterContainer = styled.footer`
	/* margin-top: 15rem; */
	padding: 5rem 2rem;
	background-color: ${({ theme }) => theme.footer.background};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 3rem 2rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 6rem 4rem;
		}
	}
`

const Row = styled(motion.div)`
	position: relative;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	max-width: 130rem;
	margin: 0 auto;
	/* border: 1px solid blue; */
	/* justify-items: center; */

	.logo {
		grid-row: 2;
	}

	.divider {
		border-bottom: 0.461563px solid rgba(76, 243, 168, 0.12);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		justify-items: unset;
		grid-template-columns: 1fr 2fr;

		.logo {
			grid-row: unset;
		}

		.divider {
			border-bottom: unset;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Col = styled(motion.div)`
	&:nth-child(1) {
		justify-self: center;
		/* border: 1px solid red; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					justify-self: unset;
				}
			}
		}
	}

	&:nth-child(2) {
		/* border: 1px solid green; */
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: start;
		/* align-items: center; */
		gap: 4rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			flex-direction: row;
			justify-content: space-evenly;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const ColItem = styled(motion.div)`
	/* margin-top: 4rem; */
`

const Title = styled(motion.h3)`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.footer.navTitleColor};
	padding-bottom: 1.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: 1.33rem;
		font-size: 1.08rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-bottom: 2.25rem;
			font-size: 1.8rem;
		}
	}
`

const NavList = styled.ul`
	/* margin-top: 1.5rem; */
	display: flex;
	gap: 1.1rem;
	justify-content: start;
	flex-direction: column;
	padding-bottom: 1.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 0.66rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			gap: 1.1rem;
		}
	}
`

const LabelSpan = styled.span`
	position: relative;
	transition: all 0.3s ease-out;
`

const IconSpan = styled.span`
	position: absolute;
	right: -1rem;
	top: 50%;
	transform: translateY(-50%);

	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.3s ease-out;
`

const LabelA = styled.a`
	position: relative;

	gap: 0.5rem;
	font-weight: 400;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.footer.navItemColor};

	transitions: all 0.3s ease-in;

	&:hover {
		color: ${({ theme }) => theme.footer.hoverNavItemColor};
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.78rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 1.3rem;
		}
	}
`

const NavItem = styled.li`
	display: flex;
	justify-content: start;
	align-items: start;
	flex-direction: column;
`
