import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({ headTitle }) => {
  const defaultPageTitle = 'Portifólio | Lucas Beneti';
  const title = headTitle ? `${headTitle} | ${defaultPageTitle}` : defaultPageTitle;

  // tem que ver depois mais metatags pra colocar na head da página se preocupando com SEO
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  headTitle: '',
};
SEO.propTypes = {
  headTitle: PropTypes.string,
};
