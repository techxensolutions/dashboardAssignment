import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Notyetpaid from "@/components/Notyetpaid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeTab, setActiveTab] = useState("a");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>task 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen ">
          <div className="bg-white   ">
            <div className="  bg-white h-[70px] justify-center flex items-center  w-11/12  m-auto">
              <div className="flex space-x-4  mt-auto h-[47px]">
                {[
                  "All Orders",
                  "Not yet paid",
                  "Not sent yet",
                  "Paid and shipped",
                  "Archieved",
                  "Abandoned Purchases",
                  "Inquiries and Disputes",
                  "Shopping Labels",
                ].map((tab) => (
                  <div
                    key={tab}
                    className={`cursor-pointer ${
                      activeTab === tab
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleClick(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
              <button className="text-blue-500 bg-custom-color h-10 p-2 text-sm rounded-md ml-auto">
                {" "}
                + Add a new Product
              </button>
            </div>
          </div>
          <div className="ml-4">
            {activeTab === "All Orders" && <div>Content for All Orders</div>}
            {activeTab === "Not yet paid" && (
              <div>
                <Notyetpaid />
              </div>
            )}
            {activeTab === "c" && <div>Content for C</div>}
            {activeTab === "d" && <div>Content for D</div>}
            {activeTab === "e" && <div>Content for E</div>}
          </div>
        </div>
      </main>
    </>
  );
}
