"use client";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
export default function ContactForm() {
  const form = useRef();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      const res = await axios.post(`${API_URL}/send`, formData);
      toast.success("Thanks! Your message has been delivered.");
      form.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Sorry, your message couldn't be sent.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div
        className="relative z-10
         flex flex-col items-center bg-[#1f1f1f] rounded-[30px]
         w-full max-w-[770px] lg:max-w-[980px]"
      >
        <h1 className="font-extrabold text-[50px] leading-[56px] text-white text-center mb-6  md:text-[55px] md:my-12">
          Contact me
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full h-14 max-w-full md:w-[650px] xl:w-[884px]
           bg-[#2a2a2a] rounded-[10px] px-6 mb-6
           text-[#f1f1f1] placeholder-[#888888] text-[18px] leading-6 font-normal
           shadow-md shadow-black/20
           "
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full h-14 max-w-full md:w-[650px] xl:w-[884px]
           bg-[#2a2a2a] rounded-[10px] px-6 mb-6
           text-[#f1f1f1] placeholder-[#888888] text-[18px] leading-6 font-normal
           shadow-md shadow-black/20
        "
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full h-[184px] md:w-[650px] xl:w-[884px]
             bg-[#2a2a2a] rounded-[10px] px-6 pt-4 mb-6
             text-white placeholder-[#888888] text-[18px] leading-6 font-normal
             resize-none shadow-md shadow-black/20"
          />
          <p
            className="text-center text-white w-full md:w-[674px] xl:w-[778px]
              text-[16px] xl:text-[18px] leading-6 md:leading-[30px] mb-8 drop-shadow-md"
          >
            send me offer please ^^
          </p>
          <button
            type="submit"
            className="text-white w-[244px] h-14 bg-[#3b3b3b] hover:bg-[#4c4c4c] rounded-[30px]
             text-[22px] leading-[20px] font-semibold 
             active:scale-95 transition duration-200 ease-in-out
             md:mb-12 "
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
