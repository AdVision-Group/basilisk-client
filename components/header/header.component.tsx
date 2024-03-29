// Utils
import styled, { css } from "styled-components"
import { motion, AnimatePresence, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import Link from "next/link"
import { ButtonLink } from "../button/button.component"
import HamMenuButton from "../ham-menu-button/ham-menu-button.component"
import FlexContainer from "../flex-container/flex-container.component"

// Hooks
import { useRef } from "react"
import { useBoolean, useHover } from "usehooks-ts"

// Icons
import { HiChevronDown } from "react-icons/hi"
import { GoPlus } from "react-icons/go"
// import DocumentationIcon from "../../public/assets/icons/documantation.svg"
// import TokenomicsIcon from "../../public/assets/icons/tokenomics.svg"
// import PressKitIcon from "../../public/assets/icons/press-kit.svg"
// import DiscordIcon from "../../public/assets/icons/discord.svg"
// import TwitterIcon from "../../public/assets/icons/twitter.svg"
// import TelegramIcon from "../../public/assets/icons/telegram.svg"
// import SubstackIcon from "../../public/assets/icons/substack.svg"
// import RedditIcon from "../../public/assets/icons/reddit.svg"

const Header: React.FC = () => {
  const { value: isMenuOpen, toggle: toggleMenu } = useBoolean(false)
  const { value: isAboutMenuOpen, toggle: toggleAboutMenu } = useBoolean(false)
  const { value: isSocialMenuOpen, toggle: toggleSocialMenu } =
    useBoolean(false)

  const aboutRefButton = useRef<HTMLButtonElement>(null)
  const socialRefButton = useRef<HTMLButtonElement>(null)
  const isAboutButtonHovered = useHover(aboutRefButton)
  const isSocialButtonHovered = useHover(socialRefButton)

  const NAV_ITEMS = [
    {
      label: "Start",
      href: "/",
    },
    {
      label: "Features",
      href: "/#swap-tokens",
    },
    {
      ref: aboutRefButton,
      label: "About",
      isHovered: isAboutButtonHovered,
      isOpen: isAboutMenuOpen,
      toggle: toggleAboutMenu,
      list: [
        {
          label: "Documentation",
          href: "https://docs.bsx.fi/",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/docs.svg",
            alt: "documantation",
            height: 25,
          },
          // Icon: DocumentationIcon,
        },
        {
          label: "Tokenomics",
          href: "https://docs.bsx.fi/tokenomics/",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/tokenomics.svg",
            alt: "tokenomics",
          },
          // Icon: TokenomicsIcon,
        },
        {
          label: "Press Kit",
          href: "https://github.com/galacticcouncil/Basilisk-assets/tree/master/Basilisk%20Press%20Kit",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/press-kit.svg",
            alt: "press-kit icon",
            height: 30,
          },
          // Icon: PressKitIcon,
        },
      ],
    },
    {
      ref: socialRefButton,
      label: "Socials",
      isHovered: isSocialButtonHovered,
      isOpen: isSocialMenuOpen,
      toggle: toggleSocialMenu,
      list: [
        {
          label: "Twitter",
          href: "https://twitter.com/bsx_finance",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/twitter.svg",
            alt: "twitter",
          },
          // Icon: TwitterIcon,
        },
        {
          label: "Discord",
          href: "https://discord.com/invite/S8YZj5aXR6",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/discord.svg",
            alt: "discord",
            height: 24,
          },
          // Icon: DiscordIcon,
        },

        {
          label: "Telegram",
          href: "https://t.me/bsx_fi",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/telegram.svg",
            alt: "telegram",
          },
          // Icon: TelegramIcon,
        },
        {
          label: "Substack",
          href: "https://basiliskfi.substack.com/",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/substack.svg",
            alt: "substack",
          },
          // Icon: SubstackIcon,
        },
        {
          label: "Reddit",
          href: "https://www.reddit.com/r/bsx_fi/",
          rel: "noopener noreferrer",
          target: "_blank",
          icon: {
            src: "/assets/icons/reddit.svg",
            alt: "reddit",
          },
          // Icon: RedditIcon,
        },
      ],
    },
    {
      label: "Github",
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://github.com/galacticcouncil",
    },
    {
      label: "Newsletter",
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://basiliskfi.substack.com/",
    },
  ]

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
      perspective: "1200px",
    },
    visible: {
      opacity: 1,
      y: 0,
      perspective: 0,
      transition: {
        type: "spring",
        mass: 1,
        stiffness: 65,
        damping: 30,
      },
    },
  }

  return (
    <>
      <HeaderContainer
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <FlexContainer height="100%" alignItems="center" gap="2rem">
            <Logo>
              <Link href="/" passHref>
                <a style={{ display: "block" }}>
                  <Image src="/assets/logo-v1.svg" alt="logo" />
                </a>
              </Link>
            </Logo>
            <MobileLogo>
              <Link href="/" passHref>
                <a style={{ display: "block" }}>
                  <Image src="/assets/logo-mobile-v1.svg" alt="logo" />
                </a>
              </Link>
            </MobileLogo>

            <Nav>
              <NavList>
                {NAV_ITEMS.map((item, index) => (
                  <NavItem key={index}>
                    {item.href && (
                      <Link href={item.href} passHref>
                        <a rel={item.rel} target={item.target}>
                          {item.label}
                        </a>
                      </Link>
                    )}
                    {item.list && (
                      <DropdownButton ref={item.ref}>
                        <span>{item.label}</span>
                        <span>
                          <HiChevronDown />
                        </span>
                        <AnimatePresence>
                          {item.isHovered && (
                            <DropdownMenu
                              initial={{
                                opacity: 0,
                                backdropFilter: "blur(0px)",
                              }}
                              animate={{
                                opacity: 1,
                                backdropFilter: "blur(20px)",
                              }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeIn" }}
                            >
                              <DropdownBlurOverlay />
                              {item.list.map((listItem, index) => (
                                <DropdownMenuItem key={index}>
                                  <Link href={listItem.href} passHref>
                                    <a
                                      ref={listItem.rel}
                                      target={listItem.target}
                                    >
                                      <Image
                                        src={listItem.icon.src}
                                        alt={listItem.icon.alt}
                                        effect="blur"
                                        width={20}
                                        height={listItem.icon?.height || 24}
                                        style={{
                                          objectFit: "contain",
                                          objectPosition: "center",
                                        }}
                                      />
                                      {/* <listItem.Icon /> */}
                                      <span>{listItem.label}</span>
                                    </a>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenu>
                          )}
                        </AnimatePresence>
                      </DropdownButton>
                    )}
                  </NavItem>
                ))}
              </NavList>
            </Nav>
          </FlexContainer>

          <CTAContainer>
            <ButtonLink
              variant="GREEN"
              rounded
              href="https://kodadot.xyz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              GO NFTS!
            </ButtonLink>
            <ButtonLink
              rounded
              href="https://app.basilisk.cloud/#/trade"
              rel="noopener noreferrer"
              target="_blank"
            >
              OPEN DEFI
            </ButtonLink>
          </CTAContainer>
          <HamMenuButton isOpen={isMenuOpen} onClick={() => toggleMenu()} />
        </Container>
      </HeaderContainer>
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuContainer
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
            }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 15,
            }}
          >
            <MobileNav>
              <MobileNavList>
                {NAV_ITEMS.map((item, index) => (
                  <MobileNavItem key={index}>
                    {item.href && (
                      <div onClick={() => toggleMenu()}>
                        <Link href={item.href}>{item.label}</Link>
                      </div>
                    )}
                    {item.list && (
                      <MobileDropdownButton
                        isOpen={item.isOpen}
                        onClick={() => item.toggle()}
                      >
                        <span>{item.label}</span>
                        <IconSpan
                          isOpen={item.isOpen}
                          animate={
                            item.isOpen ? { rotate: "-45deg" } : { rotate: 0 }
                          }
                          transition={{
                            type: "spring",
                            mass: 1,
                            stiffness: 256,
                            damping: 24,
                          }}
                        >
                          <GoPlus />
                        </IconSpan>
                      </MobileDropdownButton>
                    )}
                    <AnimatePresence>
                      {item.list && item.isOpen && (
                        <MobileDropdownMenu
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            type: "spring",
                            mass: 1,
                            stiffness: 256,
                            damping: 24,
                          }}
                        >
                          <MobileDropdownList>
                            {item.list.map((listItem, index) => (
                              <MobileDropdownMenuItem
                                key={index}
                                onClick={() => toggleMenu()}
                              >
                                <Link href={listItem.href} passHref>
                                  <a
                                    ref={listItem.rel}
                                    target={listItem.target}
                                  >
                                    <Image
                                      src={listItem.icon.src}
                                      alt={listItem.icon.alt}
                                      effect="blur"
                                      width={20}
                                      height={24}
                                      style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                      }}
                                    />
                                    {/* <listItem.Icon /> */}

                                    <span>{listItem.label}</span>
                                  </a>
                                </Link>
                              </MobileDropdownMenuItem>
                            ))}
                          </MobileDropdownList>
                        </MobileDropdownMenu>
                      )}
                    </AnimatePresence>
                  </MobileNavItem>
                ))}
              </MobileNavList>
            </MobileNav>
          </MobileMenuContainer>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

const HeaderContainer = styled(motion.header)`
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6.4rem;
  z-index: 9900;

  background-color: ${({ theme }) => theme.header.background};
  /* backdrop-filter: blur(4.75rem); */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* border-radius: 1.2rem; */
    z-index: -100;

    background-color: ${({ theme }) => theme.header.background};
    backdrop-filter: blur(4.75rem);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 145rem;
  margin: 0 auto;
`

const Logo = styled.div`
  display: none;
  visibility: hidden;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: flex;
      visibility: visible;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`

const MobileLogo = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
      visibility: hidden;
    }
  }
`

const Nav = styled.nav`
  display: none;
  visibility: hidden;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: 1140px) {
      display: block;
      visibility: visible;
      /* @media all and (min-width: 1107px) { */
      margin-left: 4rem;
      /* } */
    }
  }
`

const NavList = styled.ul`
  display: flex;
  gap: 3.9rem;
`

const navLinksStyles = css`
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.8;
  color: ${({ theme }) => theme.header.navItemColor};
  transition: all 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme.header.hoverNavItemColor};
  }
`

const NavItem = styled.li`
  position: relative;

  a {
    ${navLinksStyles};
  }
`

const DropdownButton = styled.button`
  ${navLinksStyles};
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const DropdownMenu = styled(motion.div)`
  position: absolute;
  /* width: 100%; */
  width: 25rem;
  top: 100%;
  left: 0;
  z-index: 100;

  border-radius: 1.2rem;
  overflow: hidden;

  box-shadow: ${({ theme }) => theme.header.dropdownMenu.boxShadow};

  /* &:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 1.2rem;
		z-index: -100;
		background-color: ${({ theme }) => theme.header.dropdownMenu.beforeBackground};
		backdrop-filter: blur(20px);
	} */
`

const DropdownBlurOverlay = styled(motion.div)`
  overflow: hidden;

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  z-index: -100;
  background-color: ${({ theme }) =>
    theme.header.dropdownMenu.beforeBackground};
  backdrop-filter: blur(20px);
`

const DropdownMenuItem = styled(motion.div)`
  position: relative;
  z-index: 101;

  a {
    padding: 1.7rem 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.7rem;
    color: ${({ theme }) => theme.header.dropdownMenu.color};

    &:hover {
      color: ${({ theme }) => theme.header.dropdownMenu.color};
      background: ${({ theme }) => theme.header.dropdownMenu.hoverBackground};
    }
  }

  svg {
    path {
      /* fill: green; */
    }
  }

  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.header.dropdownMenu.borderBottom};
  }
`

const CTAContainer = styled.div`
  display: none;
  visibility: hidden;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) { */
    @media all and (min-width: 1140px) {
      display: flex;
      gap: 1.2rem;
      visibility: visible;
    }
  }
`

const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.header.mobileMenu.background};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: 1140px) {
      display: none;
      visibility: hidden;
    }
  }
`

const MobileNav = styled.nav`
  margin-top: 6.4rem;
  padding: 0 3.6rem 8rem;

  height: 100%;
  overflow-y: auto;
`

const MobileNavList = styled.ul``

const MobileNavItem = styled.li`
  a {
    ${navLinksStyles};

    display: block;
    padding: 2rem 0;
    color: ${({ theme }) => theme.header.navItemColor};
  }

  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.header.mobileMenu.navItemBorder};
  }
`

const MobileDropdownButton = styled.button<{ isOpen: boolean }>`
  ${navLinksStyles};
  background-color: transparent;
  outline: none;
  border: none;
  padding: 2rem 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ isOpen, theme }) =>
      isOpen ? theme.colors.secondary : theme.header.navItemColor};
  }
`

const IconSpan = styled(motion.span)<{ isOpen: boolean }>`
  /* transition: 0.3s; */
  color: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.secondary : theme.header.navItemColor};
`

const MobileDropdownMenu = styled(motion.div)`
  overflow: hidden;
`

const MobileDropdownList = styled.ul`
  margin: 0 1rem;
`

const MobileDropdownMenuItem = styled(motion.li)`
  /* padding: 2rem 0; */

  a {
    ${navLinksStyles};

    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 2.4rem;
    color: ${({ theme }) => theme.header.mobileMenu.dropdownMenu.navItemColor};

    &:hover {
      color: ${({ theme }) =>
        theme.header.mobileMenu.dropdownMenu.navItemColor};
      background: ${({ theme }) =>
        theme.header.mobileMenu.dropdownMenu.hoverBackground};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.header.mobileMenu.navItemBorder};
  }
`
