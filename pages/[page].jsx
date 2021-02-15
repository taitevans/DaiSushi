import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import ListCard from "../components/ListCard";

const Page = ({ htmlString, data, tableCells }) => (
  <>
    <Head>
      <title>{data.title}</title>
      {data.description != false && (
        <meta title="description" content={data.description} />
      )}
    </Head>
    <div className="hero">
      <h2>{data.title}</h2>
    </div>
    <div className={data.table ? "container list" : "container"}>
      {data.table === true &&
        // Map table to jsx
        Object.keys(tableCells).map((key, i) => (
          <React.Fragment key={i}>
            <ListCard
              heading={tableCells[key][0][0].text}
              f1={tableCells[key][1][0].text}
              f2={tableCells[key][2][0].text}
              image={tableCells[key][3][0] ? tableCells[key][3][0].text : ""}
            />
          </React.Fragment>
        ))}
      {data.table === false && (
        // Insert markdown
        <article>
          <div
            className="text-article"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          />
        </article>
      )}
    </div>

    <style global jsx>{`
      .text-article * {
        margin-bottom: 22px;
      }
    `}</style>

    <style jsx>{`
      .container {
        grid-row-gap: 72px;
      }

      .list {
        margin-bottom: 66px;
      }

      article {
        padding: 24px 0 42px 0;
        grid-column: span 4;
        width: 100%;
      }

      article * {
        word-break: break-word;
      }

      @media only screen and (min-width: 840px) {
        .list {
          margin-bottom: 128px;
        }

        article {
          padding: 24px 0 104px 0;
          grid-column: span 12;
        }
      }
    `}</style>
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

  // Normal page data
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  // List page data
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

export default Page;
