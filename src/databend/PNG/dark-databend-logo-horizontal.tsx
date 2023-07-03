// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-horizontal-reverse.png';
interface IProps {
  width?: number;
}
const DarkDatabendHorizontalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendHorizontalPng.defaultProps = {
  width: 300
}
export default DarkDatabendHorizontalPng;