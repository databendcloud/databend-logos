// Copyright 2023 DatabendLabs.
import { ICommonProps } from 'databend-logos/types';
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-horizontal-reverse.png';

const DarkDatabendCloudHorizontalPng: FC<ICommonProps> = ({
  width = 300,
}): ReactElement => {
  return <img width={width} src={Img} />;
};

export default DarkDatabendCloudHorizontalPng;
