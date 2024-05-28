import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { BLOG_TITLE } from "@/constants";
import { loadBlogPost } from "@/helpers/file-helpers";

export const generateMetadata = async ({ params }) => {
  const { postSlug } = params;
  const { frontmatter } = await loadBlogPost(postSlug);
  return {
    title: `${frontmatter.title} - ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
};

async function BlogPost({ params }) {
  const { postSlug } = params;
  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
