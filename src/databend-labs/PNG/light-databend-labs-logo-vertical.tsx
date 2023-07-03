// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-vertical.png';
interface IProps {
  width?: number;
}
const LightDatabendLabsVerticalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendLabsVerticalPng.defaultProps = {
  width: 300
}
export default LightDatabendLabsVerticalPng;