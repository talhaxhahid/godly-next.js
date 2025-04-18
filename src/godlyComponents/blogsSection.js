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
    <div className="bg-[#fdf6ed] py-8 px-4 md:px-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">LASTEST NEWS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newsList.map((news, index) => (
          <div key={index}>
            <Link href="/blog/1">
              <Image
                src={news.image}
                alt={news.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
              <p className="text-gray-700 text-sm mt-2">{news.date}</p>
              <p className="text-sm font-bold text-gray-800 mt-1 leading-snug">
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
