jest.useFakeTimers();

import React, { memo } from 'react';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

import 'jest-enzyme';

import { RecoilRoot } from 'recoil';
import { mount, render } from 'enzyme';

const { create } = TestRenderer;

export { RecoilRoot, act, create, memo, mount, render };

export default React;
