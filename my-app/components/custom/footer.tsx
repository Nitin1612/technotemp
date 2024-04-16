import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import gfe from "@/components/assets/65621040113617.5772c1ee7e6eb.png";
import amer from "@/components/assets/logo.jpg";

import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
    { label: "Dribbble", icon: FaDribbble },
  ];

  const links = [
    [
      { label: "Office Time", key: "header-1" },
      { label: "Monday 8am-8pm", key: "item-1-1" },
      { label: "Tuesday 8am-8pm", key: "item-1-1" },
      { label: "Wednesday 8am-8pm", key: "item-1-1" },
      { label: "Thursday 8am-8pm", key: "item-1-1" },
      { label: "Friday 8am-12pm", key: "item-1-2" },
      { label: "Saturday Closed", key: "item-1-3" },
      { label: "Sunday 8am-3pm", key: "item-1-4" },
    ],
    [
      { label: "Contact", key: "header-1" },
      { label: "+971 4 334 3811", key: "item-1-1" },
      { label: "+971 505944406", key: "item-1-2" },
      { label: "info@gfeconsultancies.com", key: "item-1-3" },
    ],

    [
      { label: "Address", key: "header-2" },
      {
        label:
          "Shop No. 3 - 12 Airport Rd, Garhoud, Dubai, United Arab Emirates",
        key: "item-2-1",
      },
    ],
    [
      { label: "Useful Links", key: "header-1" },
      { label: "Home", key: "item-1-1" },
      { label: "Services", key: "item-1-2" },
      { label: "GFE", key: "item-1-3" },
      { label: "Privacy Policy", key: "item-1-4" },
      { label: "Refund Policy", key: "item-1-5" },
      { label: "Terms & Condition", key: "item-1-6" },
      { label: "About Us", key: "item-1-7" },
      { label: "Contact", key: "item-1-8" },
    ],
  ];

  return (
    <div className="">
      <div className="py-16 flex bg-white text-black w-full p-4 relative">
        <div className="">
          <div className="footer-img flex items-center">
            <div className="flex h-18 w-auto">
              <Image
                alt="logo"
                src={amer}
                height={100}
                width={100}
                className="m-auto"
              />
              <Image
                alt="logo"
                src={gfe}
                height={100}
                width={100}
                className="m-auto"
              />
            </div>
          </div>
          {/* <div className="infos text-gray-400">
            <span>Copyright © 2020 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div> */}
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-14 h-14 p-2 rounded-full bg-gray-50 hover:bg-white hover:text-green-700 cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid grid-cols-4 gap-2 w-full py-5 sm:py-0">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index} `}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-gray-400 cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-lg text-red-700"
                          : ""
                      }`}
                      style={{
                        fontFamily: "__gilroyBold_3f9e24",
                        fontWeight: 200,
                        letterSpacing: "1px",
                      }}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        {/* <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
