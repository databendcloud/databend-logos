// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-LOGO-06.png';
interface IProps {
  width?: number;
}
const DarkDatabendSinglePng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendSinglePng.defaultProps = {
  width: 200
}
export default DarkDatabendSinglePng;