import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Reviewer - your opinion is important</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}
