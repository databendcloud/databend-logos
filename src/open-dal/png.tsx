// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './open-dal-logo.png';

import { ICommonProps } from 'databend-logos/types';

const OpenDalPng: FC<ICommonProps> = ({ width = 300 }): ReactElement => {
  return <img width={width} src={Img} />;
};

export default OpenDalPng;
