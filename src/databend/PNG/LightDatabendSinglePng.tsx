// Copyright 2023 DatabendLabs.
import { ICommonProps } from 'databend-logos/types';
import React, { FC, ReactElement } from 'react';
import Img from './Databend-LOGO-05.png';

const LightDatabendSinglePng: FC<ICommonProps> = ({
  width = 200,
}): ReactElement => {
  return <img width={width} src={Img} />;
};

export default LightDatabendSinglePng;
