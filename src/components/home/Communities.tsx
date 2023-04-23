import UserAvatar1 from "@/assets/user-1-avatar.png";
import User1 from "@/assets/user-1.jpg";
import UserAvatar2 from "@/assets/user-2-avatar.png";
import User2 from "@/assets/user-2.jpg";
import User3 from "@/assets/user-3.jpg";
import UserAvatar4 from "@/assets/user-4-avatar.png";
import User4 from "@/assets/user-4.jpg";
import UserAvatar5 from "@/assets/user-5-avatar.png";
import User5 from "@/assets/user-5.jpg";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";

type UserData = {
  name: string;
  background: StaticImageData;
  avatar?: StaticImageData;
};

const usersData: UserData[] = [
  { name: "@MileyTabita", background: User1 },
  { name: "Mark Moss", background: User2, avatar: UserAvatar1 },
  { name: "Tony Robbins", background: User3, avatar: UserAvatar2 },
  { name: "Bitcoin Magazine", background: User4, avatar: UserAvatar4 },
  { name: "Aubrey Marcus", background: User5, avatar: UserAvatar5 },
  { name: "Tony Robbins", background: User3, avatar: UserAvatar2 },
];

function reverseArray<IData>(array: IData[]): IData[] {
  const result: IData[] = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - 1 - i] as IData;
  }
  return result;
}

function UserCard(props: { user: UserData }) {
  const { user } = props;
  return (
    <div
      className={cn(
        "flex h-[250px] w-[250px] flex-col items-center rounded-[31px] p-10",
        "sm:h-[350px] sm:w-[350px]",
        "lg:h-[400px] lg:w-[500px]",
        user.avatar ? "justify-center" : "justify-end"
      )}
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${user.background.src}),linear-gradient(138deg,rgba(116,202,255,.8),#f46692 58%,#ffe16a)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {user.avatar ? (
        <div className="flex flex-col place-items-center">
          <Image src={user.avatar} alt={user.name} width={120} />
          <h2
            className={cn(
              "text-center text-xl text-white",
              poppinsBold.className
            )}
          >
            {user.name}
          </h2>
        </div>
      ) : (
        <h2
          className={cn(
            "text-center text-xl text-white",
            poppinsBold.className
          )}
        >
          {user.name}
        </h2>
      )}
    </div>
  );
}

function Row1() {
  const { ref } = useParallax({
    translateX: ["-50%", "0"],
  });
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {usersData.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

function Row2() {
  const { ref } = useParallax({
    translateX: ["0", "-50%"],
  });
  const reversedArray = reverseArray<UserData>(usersData);
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {reversedArray.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

export default function Communities() {
  return (
    <SectionWrapper className="bg-white" noContainer>
      <div className="flex flex-col gap-28 overflow-hidden">
        <SectionTitle
          title="Join your favorite creators and communities"
          description="Start conversations and engage in discussion threads that feel personal and contextual."
          gradient="bg-gradient-to-b from-blue-light to-blue-dark"
        />
        <div className="flex rotate-6 transform flex-col gap-4 py-24">
          <Row1 />
          <Row2 />
        </div>
      </div>
    </SectionWrapper>
  );
}
