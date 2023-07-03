// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-horizontal.png';
interface IProps {
  width?: number;
}
const LightDatabendHorizontalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendHorizontalPng;