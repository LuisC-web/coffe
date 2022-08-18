import Head from 'next/head';

import React from 'react';
import SliderBar from '../components/SliderBar';

const Layout = ({ children, pagina }) => {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Kiosco café" />
      </Head>
      <div className="flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <SliderBar></SliderBar>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
