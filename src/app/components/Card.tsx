import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { useState } from "react";
import {FaHeart, FaGasPump, FaCogs, FaUsers } from 'react-icons/fa';

interface CardProps {
  title: string;
  category: string;
  imageSrc: string;
  specImageSrc: string;
  price: string;
  heartImageSrc: string;
  buttonText: string;
  link?: string;
  onButtonClick?: () => void; 
}

const CardComponent: React.FC<CardProps> = ({
  title,
  category,
  imageSrc,
  specImageSrc,
  price,
  heartImageSrc,
  buttonText,
  link,
  onButtonClick,
}) => {

  const [isHeartRed, setIsHeartRed] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartRed(!isHeartRed);
  };

  return (
    <Card className="w-full max-w-[304px] mx-auto flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex items-center justify-between  ">
          {title}
          <FaHeart
            onClick={toggleHeartColor}
            className={`cursor-pointer ${
              isHeartRed ? "text-red-500" : "text-gray-400"
            } transition-colors duration-200`}
            size={22}
          />
        </CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Image src={imageSrc} alt={`${title}-image`} width={220} height={68} />
        {/* <Image src={specImageSrc} alt="specifications" width={256} height={24} /> */}
        <div className="flex justify-around items-center bg-gray-100 rounded-md p-2 w-full h-[68px]">
    <div className="flex flex-col items-center gap-1">
      <FaGasPump />
      <i className="fas fa-gas-pump text-[#3563e9] text-lg"></i>
      <span className="text-sm text-gray-500">2.5L</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <i className="fas fa-cogs text-[#3563e9] text-lg"><FaCogs /></i>
      <span className="text-sm text-gray-500">Manual</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <i className="fas fa-users text-[#3563e9] text-lg"><FaUsers /></i>
      <span className="text-sm text-gray-500">5 Seats</span>
    </div>
  </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-lg font-semibold">
          {price}/<span className="text-gray-500">day</span>
        </p>
        {link ? (
          <Link href={link} passHref>
            <Button className="bg-[#3563e9] text-white rounded-md">
              {buttonText}
            </Button>
          </Link>
        ) : (
          <Button
            className="bg-[#3563e9] text-white rounded-md"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );


};

export default CardComponent;
