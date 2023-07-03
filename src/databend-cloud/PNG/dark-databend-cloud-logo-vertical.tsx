// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-vertical-reverse.png';
interface IProps {
  width?: number;
}
const DarkDatabendCloudVerticalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendCloudVerticalPng.defaultProps = {
  width: 300
}
export default DarkDatabendCloudVerticalPng;