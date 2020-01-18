import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com"
      />
    </Helmet>
  );
};

export default SEO;
