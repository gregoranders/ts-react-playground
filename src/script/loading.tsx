import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import { number as IsNumber, oneOf as IsOneOf } from 'prop-types';

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export const importWithDelay = (name: string, timeout = 10000) => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return new Promise<{ default: React.LazyExoticComponent<React.NamedExoticComponent<any>> }>((resolve, reject) => {
//     import(name)
//       .then((mod) => {
//         setTimeout(() => {
//           resolve(mod);
//         }, timeout);
//       })
//       .catch(reject);
//   });
// };

type LoadingType = 'bootstrap' | 'spinner';

type Props = {
  timeout?: number;
  type?: LoadingType;
};

type Factor = 1 | -1;

const dots = (count: number) => {
  let dots = '';
  for (let idx = 0; idx < count; idx++) {
    dots += '&middot;';
  }
  return dots;
};

export const Loading: FunctionComponent<Props> = ({ timeout, type }) => {
  const [stage, setStage] = useState(0);
  const [mode, setMode] = useState<Factor>(1);

  const processStage = () => {
    if (mode === -1) {
      if (stage === 2) setMode(1);
    } else {
      if (stage === 4) setMode(-1);
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
    <div className={`centered ${type}`}>
      <h1 className="dots" dangerouslySetInnerHTML={{ __html: dots(stage) }} />
    </div>
  );
};

Loading.displayName = 'Loading';

Loading.defaultProps = {
  timeout: 300,
  type: 'bootstrap',
};

Loading.propTypes = {
  timeout: IsNumber,
  type: IsOneOf(['bootstrap', 'spinner']),
};

export default memo(Loading);
