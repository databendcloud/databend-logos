// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-horizontal-reverse.png';

import { ICommonProps } from 'databend-logos/types';

const DarkDatabendHorizontalPng: FC<ICommonProps> = ({
  width = 300,
}): ReactElement => {
  return <img width={width} src={Img} />;
};

export default DarkDatabendHorizontalPng;
