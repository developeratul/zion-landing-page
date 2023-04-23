import Logo from "@/assets/logo.svg";
import { type AppProps } from "@/types";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";
import { Container } from "../layout/Container";
import { IconButton } from "../ui/IconButton";
import { Separator } from "../ui/Separator";

function Socials() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
      <div>
        <Link href="/">
          <Image width={125} src={Logo as StaticImageData} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <IconButton
          aria-label="Github link"
          variant="ghost"
          className="rounded-full"
        >
          <IconBrandGithub />
        </IconButton>
        <IconButton
          aria-label="Twitter link"
          variant="ghost"
          className="rounded-full"
        >
          <IconBrandTwitter />
        </IconButton>
        <IconButton
          aria-label="Instagram link"
          variant="ghost"
          className="rounded-full"
        >
          <IconBrandInstagram />
        </IconButton>
      </div>
    </div>
  );
}

function StyledLink(props: AppProps & { href: string }) {
  const { children, href } = props;
  return (
    <a
      className="border-b-2 border-[#74caff45]/0 pb-1 text-lg font-light duration-200 hover:border-[#74caff45] hover:text-black-dark"
      href={href}
    >
      {children}
    </a>
  );
}

function Links() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
      <div className="px-4 text-center text-xs lg:px-0">
        Copyright ©2022 The Modern Foundry Inc. All Rights Reserved.
      </div>
      <div className="flex-between flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">
        <StyledLink href="#">Terms</StyledLink>
        <StyledLink href="#">Privacy Policy</StyledLink>
        <StyledLink href="#">Jobs</StyledLink>
        <StyledLink href="#">Press</StyledLink>
        <StyledLink href="#">Contact</StyledLink>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-12">
      <Fade>
        <Container>
          <Socials />
          <Separator className="my-6" />
          <Links />
        </Container>
      </Fade>
    </footer>
  );
}
