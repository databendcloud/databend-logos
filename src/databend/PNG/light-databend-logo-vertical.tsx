// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-vertical.png';
import { ICommonProps } from 'databend-logos/types';


const LightDatabendVerticalPng: FC<ICommonProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
LightDatabendVerticalPng.defaultProps = {
  width: 300
}
export default LightDatabendVerticalPng;