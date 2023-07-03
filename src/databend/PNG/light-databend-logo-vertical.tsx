// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-vertical.png';
interface IProps {
  width?: number;
}
const LightDatabendVerticalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendVerticalPng.defaultProps = {
  width: 300
}
export default LightDatabendVerticalPng;