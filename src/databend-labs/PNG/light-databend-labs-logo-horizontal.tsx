// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-horizontal.png';
import { ICommonProps } from 'databend-logos/types';
import { formatWidth } from 'databend-logos/utils';

const LightDatabendLabsHorizontalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={formatWidth(width)} src={Img} />);
};
LightDatabendLabsHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendLabsHorizontalPng;