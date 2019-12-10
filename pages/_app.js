import App, { Container } from "next/app";
import * as fromHooks from "@apollo/react-hooks";
import withApollo from "../apollo/withApollo";
import * as fromApollo from "apollo-boost"
import React from 'react'

if(typeof window !== 'undefined') {
  window['React'] = React
  window['ApolloBoost'] = fromApollo
  window['@apollo/react-hooks'] = fromHooks
}
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <fromHooks.ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </fromHooks.ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
