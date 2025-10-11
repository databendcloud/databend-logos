// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-vertical-reverse.png';

import { ICommonProps } from 'databend-logos/types';

const DarkDatabendVerticalPng: FC<ICommonProps> = ({
  width = 300,
}): ReactElement => {
  return <img width={width} src={Img} />;
};

export default DarkDatabendVerticalPng;
