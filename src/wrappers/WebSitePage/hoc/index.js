import React from 'react';
import WebsitePageWrapper from '..';
import WebSiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperProps } = { pageWrapperProps: {} }) {
  return (props) => (
    <WebSiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps} {...props.pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebSiteGlobalProvider>
  );
}
