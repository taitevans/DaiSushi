import Head from "next/head";
import Header from "../components/Header";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="Sushi made with Love!" />
      <title>DaiSushi</title>
    </Head>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>

    <style global jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800;900&display=swap");
      @import url("https://rsms.me/inter/inter.css");

      :root {
        --pink: #ef8fff;
        --pink-2: #ab69ff;
        --green: #baff8f;
        --green-2: #4bf95c;
        --orange: #ffc58f;
        --orange-2: #ff855f;
        --red: #ff7b7b;
        --red-2: #ff5151;

        --text: #000;
        --text-2: rgba(0, 0, 0, 0.72);
        --text-inv: #fff;
        --text-inv-2: rgba(255, 255, 255, 0.5);

        --bg: #fff;
        --bg-2: #000;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
      }

      main {
        padding: 56px 16px 0 16px;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 12px;
        max-width: 100%;
      }

      a {
        text-decoration: none;
      }


      button {
        background-color: transparent;
        border: none;
        padding: 12px;
        margin-right: -12px;
        cursor: pointer;
      }

      .button {
        display: flex;
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 100%;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        padding: 20px;
        color: var(--text-1);
        background-color: var(--pink);
        width: fit-content;
      }

      .button:hover {
        background-color: var(--pink-2);
      }

      .button ~ .secondary,
      .button ~ .secondary:hover {
        background-color: rgba(0, 0, 0, 0);
      }

      .button ~ .secondary:hover {
        color: var(--text-2);
      }
    `}</style>
  </>
);

export default App;
