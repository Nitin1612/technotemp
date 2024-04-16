import Footer from "@/components/custom/footer";
import React from "react";
import office from "@/components/assets/officepic.png";
import ghazi from "@/components/assets/ghazi.png";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bolt, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Aboutus() {
  return (
    <div className="flex flex-col items-center">
      {/* header banner */}
      <div className="w-full h-96 flex items-center border p-0 m-0">
        <Image
          src={office}
          alt=""
          className="h-full opacity-60 w-full rounded-lg translate-y-"
        />
        <span
          className="absolute w-full text-3xl text-zinc-700 tracking-widest"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          ABOUT US
        </span>
      </div>
      {/* description */}
      <div className="w-10/12 flex flex-col p-10">
        <span
          className="text-3xl text-zinc-600 text-center w-full underline"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          AMER GFE CONSULTANCIES
        </span>
        <span
          className="m-auto pt-16"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          In 2008, Ghazi Fadel Ezzeddine embarked on a journey to redefine PRO
          services in the UAE. Prior to founding GFE, Ghazi had already
          established himself as a trusted figure in the industry, providing PRO
          servicing to various companies across the region. Drawing upon his
          extensive experience and the strong relationships forged during his
          PRO days, Ghazi founded GFE with a vision to offer unparalleled
          service and support to businesses navigating the intricacies of UAE's
          regulatory landscape.
        </span>
        <span
          className="m-auto pt-10"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          {" "}
          Over the years, GFE garnered a reputation for reliability, efficiency,
          and customer satisfaction, thanks to our unwavering commitment to our
          clients' success. With a solid foundation built on trust and
          expertise, GFE continued to thrive, serving a diverse clientele and
          earning their trust through our dedicated approach to PRO servicing.
        </span>
        <span
          className="m-auto pt-10"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          {" "}
          In 2017, fueled by our continued success and the desire to further
          expand our reach, GFE took a bold step forward by partnering with a
          government center specializing in immigration services. This
          partnership marked the birth of Amer GFE, a pioneering venture that
          combines PRO servicing with immigration services, catering to both our
          existing clients and walk-in customers seeking comprehensive support
          for their residency and visa needs.
        </span>
        <span
          className="m-auto pt-10"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          At Amer GFE, we pride ourselves on our ability to offer a seamless and
          holistic solution to our clients' immigration and PRO servicing
          requirements. Whether you're a business seeking assistance with visa
          applications and document clearance or an individual navigating the
          complexities of residency permits, our experienced team is here to
          guide you every step of the way.
        </span>
        <span
          className="m-auto pt-10"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          Join us as we continue to redefine the standards of excellence in PRO
          servicing and immigration services, leveraging our years of
          experience, industry knowledge, and the esteemed backing of Amer. Your
          success is our priority, and we're committed to helping you achieve
          your goals in the dynamic landscape of the UAE.
        </span>
      </div>
      {/* box description */}
      <div className="w-10/12 flex p-5 py-5 min-h-fit">
        <div className="w-1/2 m-5 min-h-full">
          <Card className="flex flex-col items-center min-h-full bg-red-800">
            <CardHeader className="">
              <span className="flex gap-2 items-center text-zinc-200">
                <Bolt
                  style={{
                    strokeWidth: "3px",
                  }}
                />
                <span
                  className="text-2xl"
                  style={{
                    textAlign: "center",
                    fontFamily: "__gilroyBold_3f9e24",
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  OUR MISSION
                </span>
              </span>
            </CardHeader>
            <CardContent>
              <span
                className="m-auto pt-10 text-zinc-200 text-center"
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                  letterSpacing: "1px",
                }}
              >
                Our mission is to provide unparalleled support for all visa,
                immigration, and PRO needs in the UAE. We streamline the entire
                process from documentation to approval, empowering clients to
                focus on personal and professional growth. Through fast,
                efficient, and personalized services, we demystify procedures
                and ensure a hassle-free experience. Our comprehensive approach
                and expert guidance enable every client to achieve residency and
                business goals effortlessly, navigating the UAE's regulatory
                landscape with ease.
              </span>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2 m-5">
          <Card className="flex flex-col items-center bg-green-900">
            <CardHeader>
              <span className="flex gap-2 items-center text-zinc-200">
                <Lightbulb
                  style={{
                    strokeWidth: "3px",
                  }}
                />
                <span
                  className="text-2xl"
                  style={{
                    textAlign: "center",
                    fontFamily: "__gilroyBold_3f9e24",
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  OUR VISION
                </span>
              </span>
            </CardHeader>
            <CardContent>
              <span
                className="m-auto pt-10 text-zinc-200"
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                  letterSpacing: "1px",
                }}
              >
                Our vision is to redefine excellence in UAE's visa, immigration,
                and PRO services, ensuring a seamless, quick, and successful
                journey for our clients. We strive to be the pinnacle of
                efficiency and satisfaction, earning the trust of individuals
                and businesses with our fast, straightforward solutions. Through
                innovation and dedication, we aim to make the UAE an accessible
                hub for global talent and businesses. As leaders in residency
                and business compliance, our expertise will drive success,
                growth, and prosperity, enriching the UAE community one
                application at a time.
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* profile */}
      <div className="w-10/12 flex p-5 py-5 gap-5 flex-col">
        <span
          className="text-3xl text-zinc-700 text-center w-full"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          AMER GFE CONSULTANCIES
        </span>
        <span
          className="text-xl text-zinc-700 text-center w-full"
          style={{
            textAlign: "center",
            fontFamily: "__gilroyBold_3f9e24",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          Download our company’s profile
        </span>
        <Button variant="outline" className="m-auto rounded-3xl">
          <span
            className="text-zinc-700 text-center w-full"
            style={{
              textAlign: "center",
              fontFamily: "__gilroyBold_3f9e24",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            <a
              href="https://github.com/Nitin1612/technotemp/blob/main/my-app/public/GFE_Company_Profile.pdf"
              download="GFE.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Profile
            </a>
          </span>
        </Button>
      </div>
      {/* ghaxi */}
      <div className="w-full h-auto">
        <div className="relative flex flex-col items-center">
          <Image
            src={ghazi}
            alt=""
            className="h-full w-full rounded-lg"
            layout="responsive"
          />
          <div className="glass-header flex flex-col w-2/3 items-center absolute bottom-10 shadow-lg">
            <span
              className="text-xl text-zinc-900 text-center w-full"
              style={{
                textAlign: "center",
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              In Memory Of Ghazi Fadel Ezzeddine
            </span>
            <span
              className=" text-zinc-900 text-center w-full"
              style={{
                textAlign: "center",
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              “We consider people’s needs and prioritize them. We take every
              step further with people who help us succeed. We look at their
              welfare balanced with the business we do. We consider people as
              our greatest asset and their talent the greatest gift.”
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
