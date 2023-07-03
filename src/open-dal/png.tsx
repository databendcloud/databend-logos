// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './open-dal-logo.png';
interface IProps {
  width?: number;
}
const OpenDalPng: FC<IProps> = ({ width }): ReactElement=> {
return (
  <img width={width} src={Img} />
);
};
OpenDalPng.defaultProps = {
  width: 300
}
export default OpenDalPng;