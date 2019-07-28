import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link  href="/static/picker.min.css" rel="stylesheet" />
         
        </Head>  
        <body>
          <Main />
          <script src="/static/picker.min.js" ></script>
          <NextScript />
          
        </body>
      </Html>
    );
  }
}
export default MyDocument;