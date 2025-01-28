'use client';

import Header from "../components/Header/page";
import Banner from "../components/Banner/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />
      <Banner />
      
    </div>
  );
}
