// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-horizontal.png';
interface IProps {
  width?: number;
}
const LightDatabendLabsHorizontalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendLabsHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendLabsHorizontalPng;