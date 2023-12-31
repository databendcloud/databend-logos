// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-labs-logo-vertical-reverse.png';
import { ICommonProps } from 'databend-logos/types';


const DarkDatabendLabsVerticalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={width} src={Img} />);
};
DarkDatabendLabsVerticalPng.defaultProps = {
  width: 300
}
export default DarkDatabendLabsVerticalPng;