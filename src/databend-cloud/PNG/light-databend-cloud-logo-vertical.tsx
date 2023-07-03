// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-vertical.png';
interface IProps {
  width?: number;
}
const LightDatabendCloudVerticalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendCloudVerticalPng.defaultProps = {
  width: 300
}
export default LightDatabendCloudVerticalPng;