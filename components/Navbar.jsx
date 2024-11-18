"use client";
import { useState, useEffect } from "react";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Star } from "lucide-react";
const Navbar = () => {
  const [liActive, setLiActive] = useState("");
  const [subLiActive, setSubLiActive] = useState("");
  const [sidebarLiActive, setSidebarLiActive] = useState("");
  const [sidebarSubLiActive, setSidebarSubLiActive] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 1024) {
        setSidebarToggle(false);
      } else if (window.outerWidth <= 1023) {
        setLiActive("");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseClickLi = (link) => () => {
    // e.stopPropogation();
    if (link.title === "Services") {
      setSubLiActive("Assignment");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }
  };
  const handleMouseClickLowerDiv = (link) => () => {
    setLiActive("");
  };

  return (
    <div className="z-40 text-black fixed select-none ">
        <div className="flex justify-between lg:justify-center items-center w-screen lg:h-[120px] whitespace-nowrap px-3  bg-white relative shadow-md">
            <Link href="/" >
              {" "}
              <Image
                className=" w-[180px] mr-10 p-1"
                alt="Go to home"
                src={"/assets/logo.png"}
                width={200}
                height={100}
              />
            </Link>
            <ul className=" hidden lg:flex  gap-10 lg:gap-12 pt-5  items-center ">
              {navLinks.map((link) => (
                <li
                  className="flex cursor-default relative "
                  key={link.title}
                  onClick={
                    link.dropdown
                      ? handleMouseClickLi(link)
                      : handleMouseClickLowerDiv("")
                  }
                >
                  {link.href ? (
                    <Link href={link.href}>{link.title}</Link>
                  ) : (
                    link.title
                  )}
                  {link.dropdown && (
                    <Image
                      src={"/assets/arrow-down.svg"}
                      height={15}
                      width={15}
                      alt="navbar dropdown arrow"
                      className={`ml-2 transition-transform transform ${
                        liActive === link.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-x-5 justify-center items-center">
              <div className="lg:hidden flex  px-8 mt-2 z-30 ">
                <Image
                  src={"/assets/menu.svg"}
                  alt="menu"
                  width={28}
                  height={28}
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                />
              </div>
              <div className=" xl:flex-row flex-col hidden lg:flex pt-5 justify-center ml-10 items-center ">
                <Link className="flex items-center justify-center gap-x-2 " href={"mail:info@assignmentshelp.uk"}>
                <Mail height={20} width={20} />
                <p>info@assignmentshelp.uk</p>
                </Link>
              </div>
              <div className="hidden 2xl:block flex-col pt-5">
                <div className="flex gap-x-1">
                  {/* <Image
                    src={bphone}
                    width={20}
                    height={20}
                    alt="Phone Number"
                  /> */}
                  <Phone />
                  <Link href="tel:+447380885273" >
                    <p className="opacity-80 text-sm">+44 7380 885273</p>
                  </Link>
                </div>
              </div>
            </div>
            <Link className="bg-gradient-to-r from-primary to-teal-800 rounded-lg p-2 hidden text-white  lg:block mt-4 ml-5" href="/order">
            ORDER NOW
          </Link>
       
        </div>

        <div
          className={`dropdown  absolute left-[47%] xl:left-[41%] 2xl:left-[39%] flex justify-center duration-300 mx-auto w-[100vw] lg:w-[330px] top-[100px] bg-gradient-to-b from-teal-600 to-primary rounded-lg shadow-lg
         transition-all ease-in-out  
        ${
          liActive === "Services" || liActive === "Countries"
            ? "dropdown-enter"
            : "dropdown-exit"
        }`}
        >
          {navLinks.map((link) =>
            Array.isArray(link.dropdown) &&
            link.dropdown.length > 0 &&
            link.title === liActive ? (
              <ul key={link.title} className="flex flex-col">
                {link.dropdown.map((subLink) => (
                  <Link
                    href={subLink?.href}
                    key={subLink.title}
                    className={`p-2 pr-20 flex justify-between group text-white hover:bg-black/10 transition-all duration-300 rounded-md ${
                      subLink.title === subLiActive ? "bg-black/10" : ""
                    }`}
                    onMouseEnter={() => setSubLiActive(subLink.title)}
                    onClick={subLink.href ? handleMouseClickLowerDiv("") : ""}
                  >
                    <li className="whitespace-nowrap w-full">
                      {subLink.title}
                    </li>
                  </Link>
                ))}
              </ul>
            ) : null
          )}
          
        </div>

        <div
          onClick={handleMouseClickLowerDiv("")}
          className={`bg-black/50 flex h-screen transition-opacity duration-300 z-0  ${
            liActive ? "opacity-100" : "opacity-0 hidden"
          }`}
        ></div>

        <div
          className={`${
            sidebarToggle ? "sidebar-visible" : "sidebar-hidden"
          } p-6 bg-gradient-to-b from-primary to-[#457ab6] text-white right-0 top-0 h-full w-full fixed z-40 transition-all`}
        >
          {/* Close Button inside Sidebar */}
          <div className="relative flex justify-between pt-2">
            <Image
              src={"/assets/close.svg"}
              alt="Close menu"
              width={28}
              height={28}
              className=" object-contain cursor-pointer"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>
          <div className="items-center flex flex-col px-4 h-[84%] overflow-y-scroll overflow-hidden">
            <ul className="list-none mt-10 flex flex-col w-full">
              {navLinks.map((link) => (
                <li key={link.title} className={`py-1 cursor-pointer w-full `}>
                  {/* link.href goes here */}
                  <Link
                    href={link.href}
                    className="flex justify-between bg-[#3669a3]  rounded-sm"
                  >
                    <p className="py-1 px-2">{link.title}</p>
                    {link.dropdown && (
                      <div
                        className="px-2 flex justify-center items-center rounded-r-sm bg-[#1f4775]"
                        onClick={() =>
                          setSidebarLiActive((prev) =>
                            prev === link.title ? "" : link.title
                          )
                        }
                      >
                        <Image
                          className="transition-all"
                          alt="Arrow image for dropdown"
                          src={
                            sidebarLiActive === link.title ? "/assets/arrow-up.svg" : "/assets/arrow-down.svg"
                          }
                          height={16}
                          width={16}
                        />{" "}
                      </div>
                    )}
                  </Link>
                  {link.dropdown && sidebarLiActive === link.title && (
                    <div
                      className={`sidebar-dropdown ${
                        sidebarLiActive === link.title
                          ? "sidebar-dropdown-enter"
                          : "sidebar-dropdown-exit"
                      } transition-all ease-in-out duration-300`}
                    >
                      <ul className="list-none mt-4 flex flex-col">
                        {link.dropdown.map((subLink) => (
                          <li
                            key={subLink.title}
                            className="py-1 mx-2  cursor-pointer"
                          >
                            <Link
                              className={`flex justify-between bg-[#3669a3]  rounded-sm `}
                              href={subLink.href}
                            >
                              <p className="py-[2px] px-2">{subLink.title}</p>
                              {subLink.subdropdown && (
                                <div
                                  className="px-2 flex justify-center items-center rounded-r-sm bg-[#1f4775]"
                                  onClick={() =>
                                    setSidebarSubLiActive((prev) =>
                                      prev === subLink.title
                                        ? ""
                                        : subLink.title
                                    )
                                  }
                                >
                                  <Image
                                    className="transition-all"
                                    alt="Arrow image for dropdown"
                                    src={
                                      sidebarSubLiActive === subLink.title
                                        ? "/assets/arrow-up.svg"
                                        : "/assets/arrow-down.svg"
                                    }
                                    height={15}
                                    width={15}
                                  />
                                </div>
                              )}
                            </Link>
                            {subLink.subdropdown &&
                              sidebarSubLiActive === subLink.title && (
                                <ul className="list-none mt-4 flex flex-col">
                                  {subLink.subdropdown.map((nestedSubLink) => (
                                    <Link
                                      key={nestedSubLink.title}
                                      href={nestedSubLink.href}
                                    >
                                      <li
                                        onClick={() =>
                                          setSidebarToggle(!sidebarToggle)
                                        }
                                        className="py-1 ms-6"
                                      >
                                        {nestedSubLink.title}
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
