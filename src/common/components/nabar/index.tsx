// React
import { FC, useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import 'tailwindcss/tailwind.css'
// Hooks
import {
  useWindowDimensions,
  useScrollY
} from "common/hooks";
// Components
import { HamburgerBannerRaises } from "./hamburger-banner-raises";
import { HambergerNavMenu } from "./hamburger-navmenu";
import { BannerRaises } from "./banner-raises";
import { NavMenu } from "./navmenu";
import Logo from 'assets/images/useartemis-logo.png'
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import React from "react";

type OwnProps = {
  navbarStyle?: "light" | "dark";
};

const Navbar: FC<OwnProps> = (props) => {
  const [isHamburgerExpanded, setHamburgerExpanded] = useState(false);
  const [isDesktopMedia, setIsDesktopMedia] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  const { width } = useWindowDimensions();
  const scrollY = useScrollY();

  useEffect(() => {
    if (width && width > 990) {
      setHamburgerExpanded(false);
      setIsDesktopMedia(true);
    } else {
      setIsDesktopMedia(false);
    }
  }, [width]);

  useEffect(() => {
    if (scrollY > 10) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  }, [scrollY]);


  useEffect(() => {
    if (isHamburgerExpanded) {
      document.body.style.overflow = "hidden";
      render(<HambergerNavMenu />, document.getElementById("hamburger-nav-menu"));
    } else {
      document.body.style.overflow = "auto";
      unmountComponentAtNode(document.getElementById("hamburger-nav-menu")!);
    }

    return () => {
      document.body.style.overflow = "auto";
    }

  }, [isHamburgerExpanded]);

  return (
    <div className={`sticky top-0 z-50 transition-shadow duration-300 bg-background-light-primary ${showShadow ? "shadow-[0_1px_0_0_#E4E7EB]" : null}`}>
      <div className="w-full max-w-[1440px] mx-auto px-24px flex flex-col width-before-scroll-bar">
        <BannerRaises
          isDesktopMedia={isDesktopMedia}
        />
        <div className="flex items-center py-16px">
          <a aria-label="Home" href="#/">
           <img className="logo" src={Logo.src}></img>
          </a>
          <NavigationMenuDemo/>
          <div className="ml-auto flex-shrink-0 flex gap-12px max-tablet:hidden">
            <a
              href="https://app.attio.com"
              className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus"
            >
              <span className="z-1 relative">Sign in</span>
            </a>
            <a
              href="https://app.attio.com/welcome/sign-in"
              className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <span className="z-1 relative">Start for free</span>
            </a>
          </div>
          <div className="ml-auto flex items-center gap-12px tablet:hidden">
            <button className="humberger-btn"
              onClick={() => setHamburgerExpanded(!isHamburgerExpanded)}>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12.5H25"
                  stroke="#1C1D1F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 19.5H25"
                  stroke="#1C1D1F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <HamburgerBannerRaises
        isDesktopMedia={isDesktopMedia}
      />
    </div>

  );
};

export { Navbar };


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
 
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                   
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"