// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-horizontal-reverse.png';

import { ICommonProps } from 'databend-logos/types';

const DarkDatabendHorizontalPng: FC<ICommonProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendHorizontalPng.defaultProps = {
  width: 300
}
export default DarkDatabendHorizontalPng;