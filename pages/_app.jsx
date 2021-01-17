import Navigation from "../components/Navigation";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Navigation />
    <Component {...pageProps} />
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="Sushi made with Love!" />
      <title>DaiSushi</title>
    </Head>

    <style global jsx>{`
      * {
        padding: 0;
        margin: 0;
      }

      body {
        font-family: sans-serif;
      }
    `}</style>
  </>
);

export default App;
