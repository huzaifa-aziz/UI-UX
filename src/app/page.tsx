'use client'

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardComponent from "./components/Card";
// import { Button } from "@/components/ui/button"
import  HomeCarousel  from './components/Swipper'
import PickupForm from "./components/Pickup-dropdown";
// import PickupForm from "./components/Pickup-dropdown";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">

    {/* Carousel */}
    <HomeCarousel />
  
    {/* Ads Section */}
    <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
      <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
      <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
    </section>
  <PickupForm />
    {/* Popular Cars Section */}
    <section className="popular w-full flex flex-col gap-4">
      <div className="first w-full flex items-center justify-between">
        <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>
        <Link href={"/categories"}>
          <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
            Check All
          </h1>
        </Link>
      </div>
  
      {/* Cards */}
      <div className="sec overflow-x-auto whitespace-nowrap scroll-smooth">
        <div className="flex gap-4">
          <CardComponent title={"Nissan GTR - R"} category={"Car"} imageSrc={"/car.png"} specImageSrc={"/Spesification.png"} price={"100$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details"/>
          <CardComponent title={"Rolls Roys"} category={"Luxury"} imageSrc={"/car (1).png"} specImageSrc={"/Spesification.png"} price={"200$"} heartImageSrc={"/heart 2.png"} buttonText={"Rent Now"}  link="/details" />
          <CardComponent title={"Al New Terrios"} category={"SUV"} imageSrc={"/Car (2).png"} specImageSrc={"/Spesification.png"} price={"369$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details" />
          <CardComponent title={"MG ZX excite"} category={"Hatchblack"} imageSrc={"/popcar.png"} specImageSrc={"/Spesification.png"} price={"139$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details" />
          <CardComponent title={"H2R"} category={"Car"} imageSrc={"/popcar1.png"} specImageSrc={"/Spesification.png"} price={"20$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details"/>
        </div>
      </div>
    </section>

    <section className="recommendation w-full flex flex-col gap-4">
  
      {/* Cards */}
      <div className="sec overflow-x-auto whitespace-nowrap scroll-smooth">
        <div className="flex gap-4">
          <CardComponent title={"Nissan GTR - R"} category={"sports"} imageSrc={"/car.png"} specImageSrc={"/Spesification.png"} price={"200$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details" />
          <CardComponent title={"MG ZX excite"} category={"soprts"} imageSrc={"/car (2).png"} specImageSrc={"/Spesification.png"} price={"50$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details"/>
          <CardComponent title={"Al New Terrios"} category={"Luxury"} imageSrc={"/reCar2.png"} specImageSrc={"/Spesification.png"} price={"100$"} heartImageSrc={"/heart 2.png"} buttonText={"Rent Now"}  link="/details" />
          <CardComponent title={"Hatchblack"} category={"suv"} imageSrc={"/reCar.png"} specImageSrc={"/Spesification.png"} price={"30$"} heartImageSrc={"/heart.png"} buttonText={"Rent Now"}  link="/details"/>
          <CardComponent title={"CR - V"} category={"sports"} imageSrc={"/reCar1.png"} specImageSrc={"/Spesification.png"} price={"89$"} heartImageSrc={"/heart 2.png"} buttonText={"Rent Now"}  link="/details"/>
        </div>
      </div>
    </section>

     {/* Show More Button */}
  <section className="button w-full text-center">
    <Link href={"/categories"}>
      <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
        Show More Cars
      </button>
    </Link>
  </section>
  </div>
  
  
  );
}

