"use client";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch(`${API_URL}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      toast.success("Thanks! Your message has been delivered.");
      form.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.message === "Failed to fetch"
          ? "Network error. Please check your connection."
          : "Sorry, your message couldn't be sent.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div
        className="relative z-10
         flex flex-col items-center bg-[#1f1f1f] rounded-[30px]
         w-full max-w-[770px] lg:max-w-[980px] "
      >
        <h1 className="font-extrabold text-[50px] leading-[56px] text-white text-center mb-6  md:text-[55px] md:my-12">
          Contact me
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full"
        >
          <div>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Name"
              required
              className="w-full h-14 max-w-full md:w-[650px] lg:w-[884px]
           bg-[#2a2a2a] rounded-[10px] px-6 mb-6
           text-[#f1f1f1] placeholder-[#888888] text-[18px] leading-6 font-normal
           shadow-md shadow-black/20
           "
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              required
              className="w-full h-14 max-w-full md:w-[650px] lg:w-[884px]
           bg-[#2a2a2a] rounded-[10px] px-6 mb-6
           text-[#f1f1f1] placeholder-[#888888] text-[18px] leading-6 font-normal
           shadow-md shadow-black/20
        "
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              autoComplete="off"
              rows="5"
              required
              className="w-full h-[184px] md:w-[650px] lg:w-[884px]
             bg-[#2a2a2a] rounded-[10px] px-6 pt-4 mb-6
             text-white placeholder-[#888888] text-[18px] leading-6 font-normal
             resize-none shadow-md shadow-black/20"
            />
          </div>
          <p
            className="text-center text-white w-full md:w-[674px] xl:w-[778px]
              text-[16px] xl:text-[18px] leading-6 md:leading-[30px] mb-8 drop-shadow-md"
          >
            This form is powered by a custom backend server built with Node.js
            and Express. Submitted messages are processed and delivered to my
            email using Nodemailer. The server is hosted on Railway and handles
            requests from the frontend in real time.
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className="text-white w-[244px] h-14 bg-[#3b3b3b] hover:bg-[#4c4c4c] rounded-[30px]
             text-[22px] leading-[20px] font-semibold 
             active:scale-95 transition duration-200 ease-in-out
             disabled:opacity-50 disabled:cursor-not-allowed
             md:mb-12"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
}
