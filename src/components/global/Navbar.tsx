import Logo from "@/assets/logo.svg";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { type AppProps } from "@/types";
import { IconMenu2 } from "@tabler/icons-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

function NavLink(props: AppProps & { href: string }) {
  const { children, href } = props;
  return (
    <li className={cn("py-4", "lg:py-0")}>
      <a
        href={href}
        className={cn(
          "text-lg text-black-light hover:text-black-dark",
          "lg:text-base"
        )}
      >
        {children}
      </a>
    </li>
  );
}

export default function Navbar() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const listNavRef = React.useRef<HTMLUListElement | null>(null);

  const toggleNavBar = () => {
    const listNav = listNavRef.current;
    listNav?.classList.toggle("!translate-y-0");
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <nav
      ref={navRef}
      className="sticky left-0 top-0 z-10 flex h-20 place-items-center border border-b-gray-light bg-white/80 px-10 py-6 filter backdrop-blur-sm"
    >
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src={Logo as StaticImageData} alt="Logo" />
            </Link>
          </div>
          <ul
            ref={listNavRef}
            className={cn(
              "fixed left-0 top-20 z-10 h-auto w-full -translate-y-[120%] bg-white p-4 shadow-sm duration-200",
              "lg:relative lg:left-0 lg:top-0 lg:flex lg:w-auto lg:translate-y-0 lg:items-center lg:justify-between lg:gap-8 lg:bg-transparent lg:shadow-none"
            )}
          >
            <NavLink href="#">Members</NavLink>
            <NavLink href="#">Creators</NavLink>
            <NavLink href="#">Communities</NavLink>
            <NavLink href="#">Messaging</NavLink>
            <NavLink href="#">Payments</NavLink>
            <NavLink href="#">Guide</NavLink>
            <NavLink href="#">Docs</NavLink>
          </ul>
          <div className="z-10 lg:hidden">
            <button aria-label="Toggle navbar button" onClick={toggleNavBar}>
              <IconMenu2 stroke={1.5} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
