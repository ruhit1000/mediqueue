import AvailableTutors from "@/components/Homepage/AvilableTutors";
import Banner from "@/components/Homepage/Banner";
import Features from "@/components/Homepage/Features";
import HowItWorks from "@/components/Homepage/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <AvailableTutors />
      <HowItWorks />
    </div>
  );
}
