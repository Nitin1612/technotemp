"use client";
import LandUI from "@/components/custom/landui";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, CreditCard, Star } from "lucide-react";

import quote from "@/components/assets/Frame.png";

import backImage from "@/components/assets/1.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/custom/footer";

function Home() {
  let services = [
    {
      title: "Emirates Identity Authority",
      content:
        "Simplify your Emirates ID process with us. From new applications to renewals, our team handles allaspects, ensuring your identification needs are met promptly and efficiently, with minimal hassle.",
    },
    {
      title: "Golden Visa",
      content:
        "Unlock the UAE's opportunities with our Golden Visa services. We provide expert guidance through every step, offering long-term residency for investors, entrepreneurs, and talents, ensuring a seamless application process for you and your family",
    },
    {
      title: "Immigration Services",
      content:
        "Navigate UAE immigration with ease. Our services cover everything from visa applications and renewals to family sponsorships, tailored to ensure a smooth, compliant journey into the UAE.",
    },
    {
      title: "Medical Test",
      content:
        "Effortlessly manage your medical test requirements with our appointment booking and typing services. We specialize in coordinating all necessary health screenings required for your visa application, ensuring a hassle-free process from start to end",
    },
  ];

  let reviews = [
    {
      review:
        "I recently opened up a new trade license for my new business with GFE amer, the process was hassle-free. ",
      name: "Ahmad Khaled",
    },
    {
      review:
        "All the employees know their work and solve your problems from the first time. I recommend this branch to everyone.",
      name: "Issa Hello",
    },
    {
      review:
        "I recently opened up a new trade license for my new business with GFE amer, the process was hassle-free.",
      name: "Ahmad Khaled",
    },
    {
      review:
        "All the employees know their work and solve your problems from the first time. I recommend this branch to everyone.",
      name: "Issa Hello",
    },
    {
      review:
        "I recently opened up a new trade license for my new business with GFE amer, the process was hassle-free",
      name: "Ahmad Khaled",
    },
    {
      review:
        "All the employees know their work and solve your problems from the first time. I recommend this branch to everyone.",
      name: "Issa Hello",
    },
  ];

  return (
    <div className="h-screen w-full">
      <div className="opacity-30">
        <Image
          src={backImage}
          alt="ba"
          style={{ objectFit: "cover" }}
          className="fixed bottom-0 z-10 bg-inherit"
        ></Image>
      </div>

      <div className="flex flex-col h-dvh items-center justify-center">
        {/*<---------------------- Landing UI --------------------------> */}
        <div className="mb-96 z-20">
          <div className=" h-full">
            <LandUI />
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-svh">
        <div className="flex align-middle justify-center h-auto m-auto">
          <div className="flex flex-col justify-stretch align-middle  rounded-lg w-10/12 h-svh">
            <div className="w-full align-middle flex flex-col justify-center h-1/2">
              <span
                className="text-7xl text-rose-700 break-words leading-snug"
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                  letterSpacing: "1px",
                }}
              >
                Services
              </span>
              <span
                className="text-2xl text-gray-700 break-words leading-snug mt-15"
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 300,
                  letterSpacing: "1px",
                }}
              >
                At Amer GFE, we're your trusted partners in navigating the
                complexities of UAE residency and visa services. Backed by years
                of experience and a commitment to excellence, we offer
                personalized solutions tailored to your unique needs. With us,
                you'll experience streamlined processes, expert guidance, and
                unparalleled convenience, ensuring a smooth and stress-free
                journey towards achieving your residency goals in the UAE
              </span>
            </div>
            <div className="w-full justify-center items-center flex min-h-fit">
              <Carousel className="w-full m-2 min-h-full border">
                <CarouselContent className="min-h-full">
                  {services.map((key, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-3/4 lg:basis-1/2 m-auto min-h-full"
                    >
                      <div className="p-2 w-full min-h-full border-4">
                        <Card className="m-auto mt-5 min-h-full">
                          <CardContent className="flex min-h-max flex-col my-auto p-5 rounded-lg drop-shadow-lg">
                            <CreditCard
                              className="border rounded-full p-4 ml-3 mt-5"
                              size={75}
                            />
                            <span
                              className="text-lg text-gray-700 break-words leading-snug ml-5 mt-5"
                              style={{
                                fontFamily: "__gilroyBold_3f9e24",
                                fontWeight: 800,
                                letterSpacing: "1px",
                              }}
                            >
                              {key.title}
                            </span>
                            <span
                              className="text-lg text-gray-700 break-words leading-snug ml-5 mt-5 overflow-hidden"
                              style={{
                                fontFamily: "__gilroyBold_3f9e24",
                                fontWeight: 400,
                                letterSpacing: "1px",
                              }}
                            >
                              {key.content}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-svh">
        {/* <--------------------- NavBar -------------------------> */}
        <div className="flex align-middle justify-center h-auto m-auto">
          <div className="flex flex-col justify-stretch align-middle  rounded-lg w-10/12 h-svh">
            <div className="w-full align-middle flex flex-col justify-center h-1/2">
              <span
                className="text-7xl text-rose-700 break-words leading-snug"
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                  letterSpacing: "1px",
                }}
              >
                About Us
              </span>
              <span
                className="text-2xl text-gray-700 break-words leading-snug mt-20"
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 300,
                  letterSpacing: "1px",
                }}
              >
                Founded in 2008 by Ghazi Fadel Ezzeddine, GFE has grown from a
                trusted PRO services provider to a pioneering partnership with
                Amer in 2017, creating Amer GFE. Specializing in comprehensive
                PRO and immigration services, we've become the go-to solution
                for businesses and individuals across the UAE. Our dedicated
                team ensures all your Emirates ID, visa, and immigration needs
                are met conveniently under one roof, streamlining your journey
                with expert guidance and personalized support. At Amer GFE, your
                success and satisfaction are our top priorities.
              </span>
            </div>
            <div className="w-full align-middle justify-center flex">
              <Button
                className="bg-green-700 my-auto font-gilroy-bold relative hover:bg-greem-800 h-auto"
                variant="outline"
              >
                <span
                  className="text-white"
                  style={{ fontFamily: "__gilroyBold_3f9e24" }}
                >
                  Know more about GFE
                </span>
                <ChevronRight
                  className="text-slate-200 bg-transparent ml-2  right-1"
                  style={{ fontWeight: 600 }}
                  size={30}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col items-center justify-center min-h-svh  bg-zinc-800">
          {/* <--------------------- Marcuque -------------------------> */}
          <div className="w-full flex justify-center items-center mb-5">
            <div className="m-2 marquee">
              {reviews.map((e, index) => {
                return (
                  <span key={index} className="w-1/2 h-1/2 marquee__content">
                    <span className="w-9/12 bg-white rounded-2xl p-4">
                      <span
                        className="break-words text-2xl m-auto"
                        style={{
                          textAlign: "center",
                          fontFamily: "__gilroyBold_3f9e24",
                          fontWeight: 500,
                          letterSpacing: "1px",
                        }}
                      >
                        {e.review}
                      </span>
                      <span className="flex items-center justify-center p-4">
                        {Array.from({ length: 5 }, () => (
                          <Star
                            fill="#FCD503"
                            strokeWidth={0}
                            className="flex-col"
                            size={35}
                          />
                        ))}
                      </span>
                      <span className="w-full flex items-center justify-between h-28">
                        <span
                          className="w-1/2 flex-col"
                          style={{
                            textAlign: "center",
                            fontFamily: "__gilroyBold_3f9e24",
                            fontWeight: 500,
                            letterSpacing: "1px",
                          }}
                        >
                          <span className="text-2xl text-red-700">
                            {e.name}
                          </span>{" "}
                          <br />
                          Local Guide
                        </span>
                        <Image
                          src={quote}
                          alt="amer"
                          className=""
                          width={100}
                          height={250}
                        />
                      </span>
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="w-full h-3/flex justify-center items-center mt-5">
            <div className="m-2 marquee">
              {reviews.map((e, index) => {
                return (
                  <span key={index} className="w-1/2 marquee__content__rev">
                    <span className="w-9/12 h-fit bg-white rounded-2xl p-4">
                      <span
                        className="break-words text-2xl m-auto"
                        style={{
                          textAlign: "center",
                          fontFamily: "__gilroyBold_3f9e24",
                          fontWeight: 500,
                          letterSpacing: "1px",
                        }}
                      >
                        {e.review}
                      </span>
                      <span className="flex items-center justify-center p-4">
                        {Array.from({ length: 5 }, () => (
                          <Star
                            fill="#FCD503"
                            strokeWidth={0}
                            className="flex-col"
                            size={35}
                          />
                        ))}
                      </span>
                      <span className="w-full flex items-center justify-between h-28">
                        <span
                          className="w-1/2 flex-col"
                          style={{
                            textAlign: "center",
                            fontFamily: "__gilroyBold_3f9e24",
                            fontWeight: 500,
                            letterSpacing: "1px",
                          }}
                        >
                          <span className="text-2xl text-red-700">
                            {e.name}
                          </span>{" "}
                          <br />
                          Local Guide
                        </span>
                        <Image
                          src={quote}
                          alt="amer"
                          className=""
                          width={100}
                          height={250}
                        />
                      </span>
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="min-h-svh bg-black opacity-30 absolute"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
