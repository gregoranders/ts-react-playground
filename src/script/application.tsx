import React, { FunctionComponent, lazy, memo, StrictMode, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { string as IsString } from 'prop-types';

import { default as Loading } from '@app/loading';

import { CssBaseline } from '@material-ui/core';

const Layout = lazy(() => import('@components/layout'));
const HomePage = lazy(() => import('@pages/home'));
const IndexPage = lazy(() => import('@pages/index'));
const MateriaqlUIPage = lazy(() => import('@pages/materialui'));
const AboutPage = lazy(() => import('@pages/about'));

const ThemeProvider = lazy(() => import('@app/theme'));

type Props = {
  basename: string;
};

export const Application: FunctionComponent<Props> = ({ basename }) => {
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <RecoilRoot>
          <CssBaseline />
          <ThemeProvider>
            <BrowserRouter basename={basename}>
              <Layout>
                <Switch>
                  <Route path="/" exact component={IndexPage} />
                  <Route path="/home" component={HomePage} />
                  <Route path="/materialui" component={MateriaqlUIPage} />
                  <Route path="/about" component={AboutPage} />
                  <Redirect to="/" />
                </Switch>
              </Layout>
            </BrowserRouter>
          </ThemeProvider>
        </RecoilRoot>
      </Suspense>
    </StrictMode>
  );
};

Application.displayName = 'Application';

Application.propTypes = {
  basename: IsString.isRequired,
};

export default memo(Application);
