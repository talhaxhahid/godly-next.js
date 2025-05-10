import React from "react";
import WebsiteLayout from "./websiteLayout";
import BlogsHero from "./blogsHero";
import BlogsHeadline from "./blogsHeadline";
import BlogsSection from "./blogsSection";

export default function Blogs() {
  return (
    <WebsiteLayout>
      <BlogsHero />
      <BlogsHeadline />
      <BlogsSection noOfBlogs={9} />
    </WebsiteLayout>
  );
}
