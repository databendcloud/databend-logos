// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-horizontal-reverse.png';
import { ICommonProps } from 'databend-logos/types';


const DarkDatabendLabsHorizontalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={width} src={Img} />);
};
DarkDatabendLabsHorizontalPng.defaultProps = {
  width: 300
}
export default DarkDatabendLabsHorizontalPng;