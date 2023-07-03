// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-horizontal.png';
interface IProps {
  width?: number;
}
const LightDatabendCloudHorizontalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendCloudHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendCloudHorizontalPng;