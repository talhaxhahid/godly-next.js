// components/BlogsHeadline.tsx
import Image from "next/image";
import Link from "next/link";
import windowCleaning from "@/assets/windowCleaning.png";

const BlogsHeadline = () => {
  return (
    <div className="bg-[#fdf6ed] p-6 md:p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start border-b-4 border-double border-black pb-6">
        <div className="w-full md:w-1/2">
          <div className="border-8 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 font-sans text-sm mb-1">
            Just a short while ago, exactly 10 minutes ago.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            NEWS HEADLINE
          </h2>
          <p className="text-gray-800 text-base font-sans leading-relaxed mb-4">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were seen as binding agreements rather than mere suggestions. We are
            dedicated to reviving that standard of excellence, where
            accountability and reliability were not just ideals, but essential
            values that go...
          </p>
          <Link
            href="/blog/1"
            className="text-blue-700 font-bold text-sm hover:underline"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeadline;
