import Navigation from "../components/Navigation";

const App = ({ Component, pageProps }) => (
  <>
    <Navigation />
    <Component {...pageProps} />

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
