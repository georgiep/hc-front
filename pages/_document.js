import Document, { Html, Head, Main, NextScript } from "next/document";
// import HeadProduction from "components/HeadProduction";
class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {

        return (
          <Html lang={'en'}>
              {/*{process.env.NODE_ENV === 'Production' ? <HeadProduction /> : <Head />}*/}
              {/*<HeadProduction />*/}
            <Head/>
            <body
              className={
                this.props.__NEXT_DATA__.query.lang
                  ? this.props.__NEXT_DATA__.query.lang
                  : "en"
              }
            >
              <Main />
              <NextScript />
            </body>
          </Html>
    );
  }
}

export default MyDocument;

