import React, { FunctionComponent, Suspense, memo } from 'react';
import { element as IsElement, string as IsString, oneOfType as OneOfType } from 'prop-types';

import Loading from '@app/loading';

import Header from '@organisms/header';
import Nav from '@organisms/nav';
import Main from '@organisms/main';
import Footer from '@organisms/footer';

type Props = {
  /**
   * Children
   *
   * @type React.ReactNode
   */
  children: React.ReactNode;
};

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Suspense fallback={<Loading type={'spinner'} />}>{children}</Suspense>
      </Main>
      <Footer />
    </>
  );
};

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: OneOfType([IsString, IsElement]).isRequired,
};

export default memo(Layout);
