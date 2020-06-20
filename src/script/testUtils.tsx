jest.useFakeTimers();

import React from 'react';
import TestRenderer from 'react-test-renderer';

import 'jest-enzyme';

import { RecoilRoot } from 'recoil';
const { act, create } = TestRenderer;
import { mount, render } from 'enzyme';

export { RecoilRoot, act, create, mount, render };

export default React;
