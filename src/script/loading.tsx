import React, { memo, useEffect, useState } from 'react';
import { number as IsNumber, string as IsString } from 'prop-types';

type Props = Readonly<typeof defaultProps>;

type Factor = 1 | -1;

const defaultProps = {
  indicator: '&middot;',
  timeout: 300,
  type: 'loading',
};

const progress = (count: number, indicator: string) => {
  let dots = '';
  for (let idx = 0; idx < count; idx++) {
    dots += indicator;
  }
  return dots;
};

export const Loading = ({ indicator, timeout, type }: Props) => {
  const [stage, setStage] = useState(0);
  const [mode, setMode] = useState<Factor>(1);

  const processStage = () => {
    if (stage === 2 && mode === -1) {
      setMode(1);
    } else if (stage === 4 && mode === 1) {
      setMode(-1);
    }
    setStage(stage + mode);
  };

  useEffect(() => {
    const handle = setInterval(processStage, timeout);
    return () => {
      clearInterval(handle);
    };
  });

  return (
    <div className={`${type}`}>
      <span dangerouslySetInnerHTML={{ __html: progress(stage, indicator) }} />
    </div>
  );
};

Loading.displayName = 'Loading';

Loading.defaultProps = { ...defaultProps };

Loading.propTypes = {
  indicator: IsString.isRequired,
  timeout: IsNumber.isRequired,
  type: IsString.isRequired,
};

export default memo(Loading);
