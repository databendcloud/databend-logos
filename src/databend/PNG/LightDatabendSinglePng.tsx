// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-LOGO-05.png';
interface IProps {
  width?: number;
}
const LightDatabendSinglePng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendSinglePng.defaultProps = {
  width: 200
}
export default LightDatabendSinglePng;