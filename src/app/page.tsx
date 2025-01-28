'use client';

import Header from "../components/Header/page";
import Banner from "../components/Banner/page";
import Footer from "../components/Footer/page";
import Slider from "../components/Slider/page";
import InfoCards from "../components/InfoCards/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-100">
      <Header />
      <Banner />
      <InfoCards />
      <Slider />
      <Footer />
    </div>
  );
}
