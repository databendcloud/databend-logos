// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-Cloud-logo-05.png';
import { ICommonProps } from 'databend-logos/types';


const LightDatabendCloudSinglePng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={width} src={Img} />);
};
LightDatabendCloudSinglePng.defaultProps = {
  width: 200
}
export default LightDatabendCloudSinglePng;