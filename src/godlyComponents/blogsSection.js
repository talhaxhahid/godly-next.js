// components/LatestNews.tsx
import Image from "next/image";
import BlogsImage from "../assets/blogImage.jpg";
import Link from "next/link";

const BlogsSection = ({ noOfBlogs }) => {
  const newsList = new Array(noOfBlogs).fill({
    date: "April 20th, 2026",
    title: "DIVINE CLARITY: TRANSFORMING YOUR WINDOWS TO PERFECTION",
    image: BlogsImage,
  });

  return (
    <div className="flex flex-col gap-[40px] bg-[#fdf6ed] px-4 pb-12 md:px-12">
      <h2 className="text-trim pt-[36px] text-[36px] font-bold text-gray-800">
        LASTEST NEWS
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {newsList.map((news, index) => (
          <div key={index}>
            <Link href="/blog/1">
              <Image
                src={news.image}
                alt={news.title}
                width={500}
                height={300}
                className="h-auto w-full object-cover"
              />
              <p className="mt-2 text-sm text-gray-700">{news.date}</p>
              <p className="mt-1 text-sm leading-snug font-bold text-gray-800">
                {news.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
