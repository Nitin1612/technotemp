"use client";
import React from "react";
import contactcoverpic from "@/components/assets/contactus.png";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Footer from "@/components/custom/footer";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "@/components/custom/Location/map";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
let officetiming = [
  { time: "8am-8pm", day: "Monday" },
  { time: "8am-8pm", day: "Tuesday" },
  { time: "8am-8pm", day: "Wednesday" },
  { time: "8am-8pm", day: "Thursday" },
  { time: "8am-8pm", day: "Friday" },
  { time: "Closed", day: "Saturday" },
  { time: "8am-8pm", day: "Sunday" },
];

function Contactus() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col items-center">
      {/* header banner */}
      <div className="w-full h-96 flex items-center border p-0 m-0">
        <Image
          src={contactcoverpic}
          alt=""
          className="h-full opacity-90 w-full rounded-lg translate-y-"
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
          CONTACT US
        </span>
      </div>
      {/* section 2 */}
      <div className="w-11/12 flex m-auto p-5 mt-5">
        <div className="w-1/2 p-2">
          <span
            className="text-xl p-2"
            style={{
              textAlign: "center",
              fontFamily: "__gilroyBold_3f9e24",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            Reach out to us !
          </span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="w-full flex">
                <div className="w-1/2 p-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className="h-[50px]"
                          />
                        </FormControl>
                        {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/2 p-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className="h-[50px]"
                          />
                        </FormControl>
                        {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full p-2 space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          {...field}
                          className="h-[50px] p-2"
                        />
                      </FormControl>
                      {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Leave your  here</FormLabel> */}
                      <FormControl>
                        <Input
                          placeholder="Messages or Comments"
                          className="h-[250px] p-2"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex items-center justify-end px-2">
                <Button type="submit" className="w-1/2 h-[40px]">
                  Submit Request
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="w-1/2 ml-10">
          <div className="max-h-4/6 mb-8">
            <MapProvider>
              <MapComponent />
            </MapProvider>
          </div>
          <div className="h-2/6 flex flex-col w-2/3 justify-start p-2">
            <span
              className="text-xl p-2 text-red-800 underline"
              style={{
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              Office Address
            </span>

            <span
              className="text-xl p-2 "
              style={{
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              Shop No. 3 - 12 Airport Rd, Garhoud, Dubai, United Arab Emirates
            </span>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div className="w-11/12 flex items-center p-5">
        <div className="w-1/2 p-2 text-center rounded-xl shadow-lg bg-green-50">
          <span
            className="text-2xl p-2"
            style={{
              textAlign: "center",
              fontFamily: "__gilroyBold_3f9e24",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            Get in touch with
          </span>
          <div className="flex justify-between w-full p-5 mt-5">
            <div className="w-1/3 flex flex-col items-center space-y-4">
              <PhoneCall strokeWidth={2.5} className="text-red-800" />
              <span
                className="underline"
                style={{
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                }}
              >
                +971 4 334 3811
              </span>
              <span
                className="underline"
                style={{
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                }}
              >
                +971 505944406
              </span>
            </div>
            <div className="w-1/3 flex flex-col items-center space-y-4">
              <Mail strokeWidth={2.5} className="text-red-800" />
              <span
                className=""
                style={{
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                }}
              >
                info@gfeconsultancies.com
              </span>
            </div>
            <div
              className="w-1/3 flex flex-col items-center space-y-4 cursor-pointer"
              onClick={(e) => {
                window.location.assign(
                  "https://api.whatsapp.com/send/?phone=971505944406&text&type=phone_number&app_absent=0"
                );
              }}
            >
              <MessageCircle strokeWidth={2.5} className="text-red-800" />
              <span
                className=""
                style={{
                  textAlign: "center",
                  fontFamily: "__gilroyBold_3f9e24",
                  fontWeight: 500,
                }}
              >
                Don't hesitate to contact on Whatsapp
              </span>
            </div>
          </div>
          {/* <div className="p-5 m-2 w-8/12 flex justify-between">
            <PhoneCall strokeWidth={2.5} className="text-red-800" />
            <span
              className="text-xl underline"
              style={{
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              +971 4 334 3811
            </span>
            <span
              className="text-xl underline"
              style={{
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              +971 505944406
            </span>
          </div>
          <div className="p-5 m-2 w-8/12 flex justify-between">
            <Mail strokeWidth={2.5} className="text-red-800" />
            <span
              className="text-xl underline"
              style={{
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              info@gfeconsultancies.com
            </span>
          </div> */}
        </div>
        <div className="w-1/2 ml-10">
          <div className=" flex flex-col justify-start p-2">
            <span
              className="text-xl p-2 text-red-800 underline"
              style={{
                fontFamily: "__gilroyBold_3f9e24",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              Office Timing
            </span>

            <div className="w-full">
              {officetiming.map((key) => {
                return (
                  <div className="flex ml-2">
                    <span
                      className="p-1 w-1/3"
                      style={{
                        fontFamily: "__gilroyBold_3f9e24",
                        fontWeight: 500,
                      }}
                    >
                      {key.day}
                    </span>
                    <span
                      className="p-1 w-1/3"
                      style={{
                        fontFamily: "__gilroyBold_3f9e24",
                        fontWeight: 500,
                      }}
                    >
                      {key.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
