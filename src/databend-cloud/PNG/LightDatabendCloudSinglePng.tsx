// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-Cloud-logo-05.png';
interface IProps {
  width?: number;
}
const LightDatabendCloudSinglePng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendCloudSinglePng.defaultProps = {
  width: 200
}
export default LightDatabendCloudSinglePng;