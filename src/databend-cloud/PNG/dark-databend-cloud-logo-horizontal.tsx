// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-horizontal-reverse.png';
interface IProps {
  width?: number;
}
const DarkDatabendCloudHorizontalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendCloudHorizontalPng.defaultProps = {
  width: 300
}
export default DarkDatabendCloudHorizontalPng;