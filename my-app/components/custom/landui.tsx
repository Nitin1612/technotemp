import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { ChevronRight, Tally1 } from "lucide-react";

function LandUI() {
  return (
    <div className="flex flex-col w-full p-2 items-center justify-center">
      <span
        className="text-7xl text-rose-700 break-words leading-snug"
        style={{
          textAlign: "center",
          fontFamily: "__gilroyBold_3f9e24",
          fontWeight: 500,
          letterSpacing: "1px",
        }}
      >
        Embark on your Journey in UAE <br />
        with our Tailored Solutions
      </span>

      <span className="wrapper w-full ">
        <span
          className="text text-3xl text-gray-700 break-words leading-snug mt-15"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Experience a hassle-free path to your destination with our expert visa
          and immigration assistance. Start your journey with confidence.
        </span>
        <span
          className="text2 text-3xl text-gray-700 break-words leading-snug mt-15"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Take the stress out of immigration with our easy application process.
          We're here to make your journey as smooth as possible.
        </span>
        <span
          className="hidden text-3xl text-gray-700 break-words leading-snug mt-15"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Embark on your visa journey effortlessly with our expert guidance. Let
          us handle the details while you focus on your goals.
        </span>
        <span
          className="hidden text-3xl text-gray-700 break-words leading-snug mt-15"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Experience the ease of visa processing with our dedicated assistance,
          covering Emirates ID, Golden Visa, and immigration services designed
          to simplify your journey.
        </span>
        <span
          className="hidden text-3xl text-gray-700 break-words leading-snug mt-15"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Make your visa journey a breeze with our all-inclusive services,
          including Emirates ID, Golden Visa, and expert guidance through every
          step of the immigration process.
        </span>
      </span>
    </div>
  );
}

export default LandUI;
