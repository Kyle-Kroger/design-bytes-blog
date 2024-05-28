import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { BLOG_TITLE } from "@/constants";
import { getBlogPostList } from "../helpers/file-helpers";

export const metadata = {
  title: BLOG_TITLE,
  description: "A Blog about my journey learning code",
};

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map((post) => {
        return (
          <BlogSummaryCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
          />
        );
      })}
    </div>
  );
}

export default Home;
