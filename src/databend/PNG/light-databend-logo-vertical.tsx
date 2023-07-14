// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-vertical.png';
import { ICommonProps } from 'databend-logos/types';
import { formatWidth } from 'databend-logos/utils';

const LightDatabendVerticalPng: FC<ICommonProps> = ({width}): ReactElement=> {
return (<img width={formatWidth(width)} src={Img} />);
};
LightDatabendVerticalPng.defaultProps = {
  width: 300
}
export default LightDatabendVerticalPng;