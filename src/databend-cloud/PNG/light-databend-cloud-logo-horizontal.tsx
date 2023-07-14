// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-horizontal.png';
import { ICommonProps } from 'databend-logos/types';


const LightDatabendCloudHorizontalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={width} src={Img} />);
};
LightDatabendCloudHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendCloudHorizontalPng;