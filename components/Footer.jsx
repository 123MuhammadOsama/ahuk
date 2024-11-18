import Image from "next/image";
import UsefulLink from "./UsefulLink";
import { Mail, Phone, MapPin } from "lucide-react";
// import {
//   logowhiteportrait,
//   whitelocation,
//   whitephone,
//   whiteemail,
//   facebook,
//   pinterest,
//   twitter,
//   instagram,
//   tumblr,
//   flickr,
//   linkedin,
// } from "@/public";

import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-b  py-4 relative">
      <Image
        src={"/assets/footer-bg.png"}
        fill
        className="opacity-10 object-cover z-0"
        alt=""
      />
      <div className="flex flex-col 2xl:flex-row justify-center items-start px-4 z-10">
        <div className="2xl:border-r-[1px]  flex flex-col  p-10 max-w-sm">
          <div className="text-center flex flex-col justify-center items-center mb-4">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={250}
              height={250}
              className=" z-10"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-4">
            <div className="items-center justify-center  md:justify-start md:items-start flex flex-col text-black px-2 sm:px-10 py-4">
              <p className="font-bold text-xl mb-2 text-primary">
                Useful Links
              </p>
              <ul>
                <UsefulLink name="Home" href="/" />
                <UsefulLink name="Services" href="#" />
                <UsefulLink name="Blogs" href="#" />
                <UsefulLink name="FAQs" href="#" />
                <UsefulLink name="Contact" href="/contact" />
              </ul>
            </div>
            <div className="items-center justify-center  md:justify-start md:items-start flex flex-col text-black px-2 sm:px-10 py-4">
              <p className="font-bold text-xl mb-2 text-primary">Services</p>
              <ul className="flex flex-col justify-center items-center md:justify-start md:items-start  w-full">
                <UsefulLink name="MBA Assignment Help" href="/mba-assignment-help" />
                <UsefulLink name="HND Assignment Help" href="/hnd-assignment-help" />
                <UsefulLink name="College Assignment Help" href="/college-assignment-help" />
                <UsefulLink name="PGCE Assignment Help" href="/pgce-assignment-help" />
                <UsefulLink name="Kaplan Assignment Help" href="/" />
                <UsefulLink name="BTEC Assignment Help" href="/" />
                <UsefulLink name="Law Assignment Help" href="/" />
              </ul>
            </div>
            <div className="items-center justify-center  md:justify-start md:items-start flex flex-col text-black  px-2 sm:px-10  py-4">
              <p className="font-bold text-xl mb-2 text-primary">Cities</p>
              <ul className="flex flex-col justify-center items-center md:justify-start md:items-start  w-full">
                <UsefulLink name="London" href="/" />
                <UsefulLink name="Glassgow" href="/" />
                <UsefulLink name="Bradford" href="/" />
                <UsefulLink name="Chester" href="/" />
                <UsefulLink name="Manchester" href="/" />
                <UsefulLink name="Liverpool" href="/" />
                <UsefulLink name="Sheffield" href="/" />
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start pt-4 mt-4 my-4 py-4 border-t-[1px] border-gray-100/10 lg:gap-4 ">
              <div className="flex justify-start items-start my-1">
                <MapPin className="w-6 h-6" />
                <p className="pl-2 text-left">
                  551 Butcher Row, London E1W 3EP, United Kingdom
                </p>
              </div>
              <a href="tel:+447380885273">
                <div className="flex justify-start items-start my-1">
                  <Phone className="h-6 w-6" />

                  <p className="pl-2 hover:text-secondary text-left">
                    +44 7380 885273
                  </p>
                </div>
              </a>
              <a href="mailto:info@assignmentshelp.uk">
                <div className="flex my-1 items-center">
                  <Mail className="w-6 h-6" />
                  <p className="pl-2 hover:text-secondary text-left">
                    info@assignmentshelp.uk
                  </p>
                 </div>
              </a>
              <p className="font-semibold text-primary ">Socials</p>
              <div className="flex gap-x-2">
                <Link
                  href="https://www.facebook.com/assignmentshelpservicesuk"
                  rel="nofollow"
                  target="_blank"
                >
                  <Image
                    src={"/assets/icon-facebook.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/assignments.help.uk"
                  rel="nofollow"
                  target="_blank"
                >
                  <Image
                    src={"/assets/icon-instagram.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link
                  href="https://twitter.com/AssignmentsHe59"
                  rel="nofollow"
                  target="_blank"
                >
                  <Image
                    src={"/assets/icon-twitter.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link
                  href="https://www.pinterest.com/Assignmentshelp_uk"
                  rel="nofollow"
                  target="_blank"
                >
                  <Image
                    src={"/assets/icon-pinterest.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
