// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-Cloud-logo-06.png';
interface IProps {
  width?: number;
}
const DarkDatabendCloudSinglePng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendCloudSinglePng.defaultProps = {
  width: 200
}
export default DarkDatabendCloudSinglePng;