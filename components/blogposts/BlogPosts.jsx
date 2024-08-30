import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Image from "next/image";
import styles from "./blogPosts.module.scss";

export const BlogPosts = () => {
  const { blogPosts } = useContext(DataContext);

  return (
    <section id={styles.blogPosts} className="container-fluid">
      <h3 className={styles.heading}>Magazín</h3>
      <div className={styles.postContainer}>
        {blogPosts.map((post, index) => (
          <div className={styles.blogPost} key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={`https://zanapo.cz/${post.image}`}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <p className={styles.title}>{post.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
