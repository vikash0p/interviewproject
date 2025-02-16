"use client";
import { Link } from 'next-view-transitions'
import { usePathname, useSelectedLayoutSegment } from "next/navigation"; // Import both hooks
import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";
import { motion } from "framer-motion";

function Navbar() {
  const pathname = usePathname();
  const selectedSegment = useSelectedLayoutSegment();

  const links = [
    {
      id: "1",
      name: "Home",
      link: "/",
    },
    {
      id: "3",
      name: "JavaScript",
      link: "/Javascript",
    },
    {
      id: "4",
      name: "ReactJS",
      link: "/React",
    },
    {
      id: "5",
      name: "NextJS",
      link: "/Next",
    },
    {
      id: "6",
      name: "Coding Round",
      link: "/coding",
    },
    {
      id: "6",
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" z-20  bg-gradient-to-b from-gray-900 to-gray-900  py-4 sticky top-0 left-0 right-0  border-b-2 border-gray-800 "
    >
      <div className=" max-w-7xl m-auto flex flex-row gap-6 justify-between items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center text-white text-2xl font-bold"
        >
          <Link
            href="/"
            className="no-underline text-white hover:text-gray-300 flex items-center gap-2"
          >
            <Image
              src={"/favicon/interViewPraplogo.png"}
              alt="logo"
              className="w-14 h-14  object-contain"
              width={300}
              height={500}
            />
            <p className="text-3xl font-semibold text-gray-200 ">
              InterViewPrap
            </p>
          </Link>
        </motion.div>
        <div className="space-x-4">
          <AnimatedBackground
            className="rounded-lg bg-white transition-all"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {links.map((tab) => {
              // Check if the selected layout segment matches the link
              const isActiveSegment =
                selectedSegment === tab.link.split("/")[1];

              return (
                <Link
                  href={tab.link}
                  key={tab.id}
                  data-id={tab.link}
                  className={`px-5 py-2 text-md transition-colors duration-300 no-underline ${
                    pathname === tab.link || isActiveSegment
                      ? "bg-white text-black rounded-lg"
                      : "text-gray-300 hover:text-black"
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </AnimatedBackground>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
