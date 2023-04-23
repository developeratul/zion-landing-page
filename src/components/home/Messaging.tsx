import Avatar1 from "@/assets/message-user-1.jpg";
import Avatar2 from "@/assets/message-user-2.jpg";
import Avatar3 from "@/assets/message-user-3.jpg";
import MessagingImage from "@/assets/messaging-profile.jpg";
import MobileWireFrame from "@/assets/mobile-wireframe-thick.png";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import { type AppProps } from "@/types";
import Image, { type StaticImageData } from "next/image";
import { Fade } from "react-reveal";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";

function CardWrapper(props: AppProps & { className: string }) {
  const { children, className } = props;
  return (
    <div
      className={cn(
        className,
        "rounded-[20px] p-8 shadow-[0_20px_40px_rgba(116,202,255,.2)]"
      )}
    >
      {children}
    </div>
  );
}

function LeftCard() {
  return (
    <CardWrapper className="flex w-full flex-col gap-11">
      <Fade>
        <h2
          className={cn(
            "mx-auto text-3xl leading-[1.3em] md:mx-0 md:text-5xl",
            poppinsBold.className
          )}
        >
          Privacy isn&apos;t an
          <br />
          optional mode.
        </h2>
      </Fade>
      <div className="relative mx-auto h-[650px] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] bg-[linear-gradient(rgba(29,30,30,0),#fff)]" />
        <div className="relative w-full">
          <Image
            src={MobileWireFrame}
            className="w-full"
            alt="Mobile wire frame"
          />
          <div className="absolute bottom-[2.3%] left-[4.9%] right-[4.9%] top-[2.3%] -z-[1] overflow-hidden ">
            <Image
              src={MessagingImage}
              alt="Starter image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

type Message = {
  name: string;
  text: string;
  avatar: StaticImageData;
};

const messages: Message[] = [
  {
    name: "Emilie J",
    text: "Oooh I can't wait! 😍 It's like watching history in the making. Future looks bright!",
    avatar: Avatar1,
  },
  {
    name: "Dorian Decker",
    text: "What are your plans for this weekend? I was thinking about throwing a release party on Saturday night",
    avatar: Avatar2,
  },
  {
    name: "Marc Calderon",
    text: "That sounds like fun! I'm glad you're looking forward to your party on Saturday night. Let me know if you need me to bring any friends!",
    avatar: Avatar3,
  },
  {
    name: "Emilie J",
    text: "Let’s throw a huge release party! Are you guys available this Saturday? 🤗",
    avatar: Avatar1,
  },
];

function SingleMessage(props: { message: Message }) {
  const { message } = props;
  return (
    <Fade>
      <div className="flex items-end justify-normal gap-1">
        <div className="h-[30px] w-[30px] overflow-hidden rounded-full">
          <Image
            src={message.avatar.src}
            width={message.avatar.width}
            height={message.avatar.height}
            alt={message.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 rounded-2xl bg-gray-light p-[10px]">
          <h2 className={cn("", poppinsBold.className)}>{message.name}</h2>
          <p>{message.text}</p>
        </div>
      </div>
    </Fade>
  );
}

function RightCard() {
  return (
    <CardWrapper className="flex w-full flex-col gap-16 md:max-w-[530px]">
      <Fade>
        <h2 className={cn("text-3xl", poppinsBold.className)}>
          Only the people you want to can see your content or read your message.
        </h2>
      </Fade>
      <div className="relative flex flex-col gap-3">
        {messages.map((message, index) => (
          <SingleMessage key={index} message={message} />
        ))}
        <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] bg-[linear-gradient(rgba(29,30,30,0),#fff)]" />
      </div>
    </CardWrapper>
  );
}

export default function Messaging() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-14">
        <SectionTitle
          title="Simplified messaging focus on safety and security"
          gradient="bg-gradient-to-b from-blue-light to-blue-dark"
        />
        <div className="flex flex-col items-stretch justify-center gap-[36px] md:flex-row">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </SectionWrapper>
  );
}
