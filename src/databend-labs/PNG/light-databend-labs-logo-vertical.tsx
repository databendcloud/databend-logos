// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-vertical.png';
import { ICommonProps } from 'databend-logos/types';


const LightDatabendLabsVerticalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={width} src={Img} />);
};
LightDatabendLabsVerticalPng.defaultProps = {
  width: 300
}
export default LightDatabendLabsVerticalPng;