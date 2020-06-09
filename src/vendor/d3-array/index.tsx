declare module 'd3-array' {
  const bin: Function;
  const count: Function;
  const cumsum: Function;
  const greatest: Function;
  const greatestIndex: Function;
  const groups: Function;
  const least: Function;
  const leastIndex: Function;
  const maxIndex: Function;
  const minIndex: Function;
  const quantileSorted: Function;
  const rollups: Function;
}

import * as d3Array from 'd3-array';

import {
  ascending,
  bin,
  bisect,
  bisectLeft,
  bisectRight,
  bisector,
  count,
  cross,
  cumsum,
  descending,
  deviation,
  extent,
  greatest,
  greatestIndex,
  group,
  groups,
  histogram,
  least,
  leastIndex,
  max,
  maxIndex,
  mean,
  median,
  merge,
  min,
  minIndex,
  pairs,
  permute,
  quantile,
  quantileSorted,
  quickselect,
  range,
  rollup,
  rollups,
  scan,
  shuffle,
  sum,
  thresholdFreedmanDiaconis,
  thresholdScott,
  thresholdSturges,
  tickIncrement,
  tickStep,
  ticks,
  transpose,
  variance,
  zip,
} from 'd3-array';

export {
  d3Array,
  /* */
  ascending,
  bin,
  bisect,
  bisectLeft,
  bisectRight,
  bisector,
  count,
  cross,
  cumsum,
  descending,
  deviation,
  extent,
  greatest,
  greatestIndex,
  group,
  groups,
  histogram,
  least,
  leastIndex,
  max,
  maxIndex,
  mean,
  median,
  merge,
  min,
  minIndex,
  pairs,
  permute,
  quantile,
  quantileSorted,
  quickselect,
  range,
  rollup,
  rollups,
  scan,
  shuffle,
  sum,
  thresholdFreedmanDiaconis,
  thresholdScott,
  thresholdSturges,
  tickIncrement,
  tickStep,
  ticks,
  transpose,
  variance,
  zip,
};

export default d3Array;
