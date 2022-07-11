import React from "react";
import { BlogCard } from "../components/BlogCard";
import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Articles = ({ articles }) => {
  const [isLoading, setLoading] = useState(true);
  const [imageCount, setImageCount] = useState(0);
  // when the second component is an empty that means that the fetch happens when you click the blog button
  // if you want to refetch with a button you should create a function that you can use onclick and useEffect

  useEffect(() => {
    if (imageCount == articles.length) {
      setLoading(false);
    }
  }, [imageCount]);

  // If the admin is not logged in, the url path is different
  let startPath = "/blogs/";
  //   const admin = ReactSession.get("admin");

  //   if (admin == "LoggedIn") {
  //     startPath = "/admin/blogs/";
  //   }

  return (
    <div>
      <Navigation />
      <div class="max-w-screen-xl px-4 py-16 mx-auto lg:items-center flex">
        <div class="mx-auto text-center">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            {articles.map((article) => (
              <BlogCard
                title={article.title}
                description={article.description}
                image={article.imageUrl}
                date={article.createdAt}
                href={startPath + article.slug}
                setImageCount={setImageCount}
                imageCount={imageCount}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const req = await fetch("http://localhost:3001/api/articles");
  const articles = await req.json();

  return {
    props: { articles },
  };
}

export default Articles;
