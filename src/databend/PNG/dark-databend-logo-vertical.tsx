// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-vertical-reverse.png';
interface IProps {
  width?: number;
}
const DarkDatabendVerticalPng: FC<IProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendVerticalPng.defaultProps = {
  width: 300
}
export default DarkDatabendVerticalPng;