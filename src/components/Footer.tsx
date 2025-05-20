import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../../data";
import MagicButton from "./MagicButton";
import EarthCanvas from "./ui/Earth";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { slideIn } from "../../lib/utils";

const USER_ID = import.meta.env.VITE_USER_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Daman Kumar",
          from_email: form.email,
          to_email: "damankumar2005@gmail.com",
          message: form.message,
        },
        USER_ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully! I will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center"
      >
        <motion.h1 className="heading lg:max-w-[45vw]" variants={textVariant}>
          Ready to <span className="text-purple">connect</span> and work on new Ideas?
        </motion.h1>
        <motion.p
          className="text-white-200 md:mt-10 my-5 text-center"
          variants={textVariant}
        >
          Reach out to me today and let&apos;s discuss how we can collaborate together.
        </motion.p>
      </motion.div>

      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative z-10"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {["name", "email", "message"].map((field) => (
              <motion.label
                className="flex flex-col"
                variants={textVariant}
                key={field}
              >
                <span className="text-white font-medium mb-4">
                  {field === "name"
                    ? "Your Name"
                    : field === "email"
                    ? "Your Email"
                    : "Your Message"}
                </span>
                {field !== "message" ? (
                  <input
                    type={field}
                    name={field}
                    /*@ts-ignore*/
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={`What's your ${
                      field === "name" ? "name" : "email address"
                    }?`}
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                ) : (
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    draggable={false}
                    placeholder="Enter your message here..."
                    className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                  />
                )}
              </motion.label>
            ))}
            <MagicButton
              title={loading ? "Sending..." : "Let's Talk"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex mt-16 md:flex-row flex-col justify-between items-center"
      >
        <motion.p
          className="md:text-base text-sm md:font-normal font-light"
          variants={textVariant}
        >
          Copyright © 2025 Daman Kumar. All rights reserved.
        </motion.p>

        <motion.div
          className="flex items-center md:gap-3 gap-6"
          variants={staggerContainer}
        >
          {socialMedia.map((info) => (
            <motion.div
              key={info.id}
              variants={textVariant}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
