import ContactForm from "@/components/ContactForm/ContactForm";
import React from "react";

export const metadata = {
  title: {
    default: "Contact",
  },
};
function contact() {
  return (
    <>
      <div className="px-6 lg:px-8 xl:px-165 flex pt-11 justify-center  items-center   pb-11 ">
        <ContactForm />
      </div>
    </>
  );
}

export default contact;
