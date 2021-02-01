import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

export default function Page({ htmlString, data, rawData }) {
  let item = data.table
    ? require("mdtable2json").getTables(rawData)[0].json
    : null;
  let itemKeys = data.table ? Object.keys(item[0]) : null;
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <h1>{data.title}</h1>
      {data.table === true &&
        Object.keys(item).map((key, i) => (
          <div key={i}>{item[key][itemKeys[0]]}</div>
        ))}
      {data.table === false && (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      )}
    </>
  );
}

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
  const rawData = parsedMarkdown.content;

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
      rawData: rawData,
    },
  };
};
