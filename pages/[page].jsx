import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Page = ({ htmlString, data }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta title="description" content={data.description} />
    </Head>
    <h1>{data.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  </>
);

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content");
  const paths = files.map((filename) => ({
    params: {
      page: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { page } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content", page + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Page;
