// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-LOGO-06.png';

import { ICommonProps } from 'databend-logos/types';

const DarkDatabendSinglePng: FC<ICommonProps> = ({
  width = 200,
}): ReactElement => {
  return <img width={width} src={Img} />;
};

export default DarkDatabendSinglePng;
