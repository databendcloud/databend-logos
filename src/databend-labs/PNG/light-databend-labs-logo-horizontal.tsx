// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-horizontal.png';
import { ICommonProps } from 'databend-logos/types';


const LightDatabendLabsHorizontalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={width} src={Img} />);
};
LightDatabendLabsHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendLabsHorizontalPng;