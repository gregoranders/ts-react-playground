import React, { FunctionComponent, lazy, memo, StrictMode, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { string as IsString } from 'prop-types';

import Loading from '@app/loading';

const Layout = lazy(() => import('@components/layout'));

const HomePage = lazy(() => import('@pages/home'));
const IndexPage = lazy(() => import('@pages/index'));
const AboutPage = lazy(() => import('@pages/about'));

type Props = {
  basename: string;
};

export const Application: FunctionComponent<Props> = ({ basename }) => {
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <RecoilRoot>
          <BrowserRouter basename={basename}>
            <Layout>
              <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Redirect to="/" />
              </Switch>
            </Layout>
          </BrowserRouter>
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
