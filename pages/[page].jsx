import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

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
    <div className="container">
      <article>
        {data.table === true &&
          // Map table to jsx
          Object.keys(tableCells).map((key, i) => (
            <div key={i}>
              <h3>{tableCells[key][0][0].text}</h3>
              <p>{tableCells[key][1][0].text}</p>
              <p>{tableCells[key][2][0].text}</p>
              <img
                src={tableCells[key][3][0] ? tableCells[key][3][0].text : ""}
                alt="Image"
              />
            </div>
          ))}
        {data.table === false && (
          // Insert markdown
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        )}
      </article>
    </div>

    <style jsx>{`
      article {
        padding: 24px 0 104px 0;
        grid-column-start: 1;
        grid-column-end: 5;
        width: 100%;
      }

      @media only screen and (min-width: 840px) {
        article {
          grid-column-start: 1;
          grid-column-end: 13;
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
