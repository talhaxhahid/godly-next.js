// components/BlogsHeadline.tsx
import Image from "next/image";
import Link from "next/link";
import windowCleaning from "@/assets/windowCleaning.png";

const BlogsHeadline = () => {
  return (
    <div className="bg-[#fdf6ed] p-6 md:p-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 border-b-4 border-double border-black pb-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="border-8 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-1 font-sans text-sm text-gray-500">
            Just a short while ago, exactly 10 minutes ago.
          </p>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            NEWS HEADLINE
          </h2>
          <p className="mb-4 font-sans text-base leading-relaxed text-gray-800">
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
            className="text-sm font-bold text-blue-700 hover:underline"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeadline;
