// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-LOGO-05.png';
import { ICommonProps } from 'databend-logos/types';


const LightDatabendSinglePng: FC<ICommonProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendSinglePng.defaultProps = {
  width: 200
}
export default LightDatabendSinglePng;