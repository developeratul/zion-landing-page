import DownloadAffix from "@/components/global/DownloadAffix";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Communities from "@/components/home/Communities";
import Hero from "@/components/home/Hero";
import Messaging from "@/components/home/Messaging";
import MobileParallax from "@/components/home/MobileParallax";
import Payment from "@/components/home/Payment";
import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ZION - Get Paid For Your Content</title>
        <meta name="description" content="ZION - Get Paid For Your Content" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Navbar />
      <DownloadAffix />
      <Hero />
      <MobileParallax />
      <Communities />
      <Payment />
      <Messaging />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
