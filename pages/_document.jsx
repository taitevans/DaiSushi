import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
