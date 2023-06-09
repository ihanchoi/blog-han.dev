
import Title from "../components/Title";
import PostCards from "../components/PostCards";
import { useState } from "react";
import Search from "../components/Search";
import { allBlogs } from ".contentlayer/generated";
import metadata from "../data/metadata";
// import type { NextPage } from "next";
import { NextSeo } from "next-seo";
// import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
// import { allPosts } from "contentlayer/generated";
// import { InferGetStaticPropsType } from "next";

function Blog ({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const fillteredBlogPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      <Container>
        <NextSeo
          title = "Blog" 
          description="공유하고 싶거나 지금까지 체득한 기술들을 정리합니다."
          canonical={`${metadata.meta.url}/blog`}
          openGraph={{ url: `${metadata.meta.url}/blog` }}
          />

          <Title title= "Blog" des = {`공유하고 싶거나 지금까지 체득한 기술들을 정리합니다.`} />
          <Search changeHandler={e => setSearchValue(e.target.value)} />
          {fillteredBlogPosts.map((post, index) => (
            <PostCards post={post} key={index} slug={post.slug} />
          ))}
      </Container>
    )
}

/*
const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};
*/

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
