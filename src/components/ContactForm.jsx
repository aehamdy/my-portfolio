import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import EmailNotification from "./EmailNotification";

const serviceKey = "service_2d4wymy";
const templateKey = "template_463hoob";
const publicKey = "jQYd4iWqxmBioX6Z8";

export const ContactForm = () => {
  const [isEmailSuccess, setIsEmailSuccess] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    setIsEmailSuccess(null);
    e.preventDefault();

    emailjs
      .sendForm(`${serviceKey}`, `${templateKey}`, form.current, `${publicKey}`)
      .then(
        () => {
          setTimeout(() => {
            setIsEmailSuccess(true);
          });

          setTimeout(() => {
            setIsEmailSuccess(null);
          }, 4000);

          // console.log("SUCCESS!");
        },
        (error) => {
          setTimeout(() => {
            setIsEmailSuccess(false);
          }, 500);

          // console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="relative font-poppins flex flex-col gap-7 pb-section-padding lg:pb-[80px] font-medium text-sm text-medium-gray dark:text-white-85"
    >
      <EmailNotification isEmailSuccess={isEmailSuccess} />
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
        <div className="sm:w-1/2 sm:pe-4">
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Full Name"
            className="w-full h-12 focus:text-accent bg-transparent border-b border-b-light-gray-dd dark:border-b-gray-666 focus:border-b-accent placeholder-light-gray dark:placeholder-gray-666 focus:placeholder-dark-gray focus:dark:placeholder-white-90 outline-none duration-200"
            required
          />
        </div>
        <div className="sm:w-1/2 sm:ps-4">
          <input
            type="email"
            name="from_email"
            id="email"
            placeholder="Email Address"
            className="w-full h-12 focus:text-accent bg-transparent border-b border-b-light-gray-dd dark:border-b-gray-666 focus:border-b-accent placeholder-light-gray dark:placeholder-gray-666 focus:placeholder-dark-gray focus:dark:placeholder-white-90 outline-none duration-200"
            required
          />
        </div>
      </div>

      {/* Hidden input for reply_to */}
      <input type="hidden" name="reply_to" value="" id="email-hidden" />

      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        className="w-full h-28 resize-none focus:text-accent bg-transparent border-b border-b-light-gray-dd dark:border-b-gray-666 focus:border-b-accent placeholder-light-gray dark:placeholder-gray-666 focus:placeholder-dark-gray focus:dark:placeholder-white-90 outline-none duration-200"
        required
      ></textarea>

      <button
        type="submit"
        className="group flex gap-8 self-start font-semibold text-xs uppercase text-dark-gray dark:text-white-90 hover:text-accent active:text-white outline-none duration-200"
      >
        <span>Send Message</span>
        <div className="relative top-[50%] end-1 translate-y-[-45%] group-hover:translate-x-[3px] duration-short">
          <span className="absolute w-3.5 group-hover:w-[12px] h-[2px] top-[50%] translate-y-2 end-0 bg-dark-gray dark:bg-white-90 group-hover:bg-accent duration-200"></span>
          <span className="absolute w-[10px] h-[2px] rotate-[45deg] top-[-3px] translate-y-4 -end-[1px] bg-dark-gray dark:bg-white-90 group-hover:bg-accent duration-200"></span>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
