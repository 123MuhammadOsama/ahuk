"use client";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/constants";
import { Search } from "lucide-react";
// import Lottie from "lottie-react";
// import animationData from "@/public/lottie-files/herolottiefile.json";

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on the search term
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-24 justify-center items-center flex flex-col h-auto mx-auto p-5">
      {/* <Lottie animationData={animationData} className="h-32 w-32" loop={true} /> */}
      <h1 className="text-4xl text-black mt-14 mb-10">
        Our Latest Blog Posts
      </h1>
      <div className="mb-6 flex  justify-end">
        <Search className="absolute"/>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-5 py-2 border bg-[#d6f1f3]  rounded-md outline-blue-300 text-black relative"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            <div className="bg-[#d6f1f3] hover:shadow-lg hover:shadow-gray-300 transition-all shadow-md rounded-md p-6">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={250}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />

              <h2 className="sm:text-xl hover:text-secondary text-black cursor-pointer font-semibold mb-2 text-lg">
                {blog.title}
              </h2>

              <p className="text-black mb-2 line-clamp-4 text-xs sm:text-base">
                {blog.description}
              </p>
              <p className="text-secondary text-sm">
                By {blog.author} - {blog.date}
              </p>
              {/* <Link
              className="text-grey-300 hover:text-orange-600 font-semibold mt-4 inline-block"
              href={`/blog/${blog.slug}`}
            >
              Read More
            </Link> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
