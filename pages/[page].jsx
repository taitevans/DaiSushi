import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

export default function Page({ htmlString, data, tableCells }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <h1>{data.title}</h1>
      {data.table === true &&
        Object.keys(tableCells).map((key, i) => (
          <div key={i}>{tableCells[key][0][0].text}</div>
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

  const tokens = parsedMarkdown.data.table
    ? marked.lexer(parsedMarkdown.content)
    : "";
  const tableCells = parsedMarkdown.data.table ? tokens[0].tokens.cells : "";

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
      tableCells: tableCells,
    },
  };
};
