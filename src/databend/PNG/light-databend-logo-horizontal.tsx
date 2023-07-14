// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-horizontal.png';
import { ICommonProps } from 'databend-logos/types';
import { formatWidth } from 'databend-logos/utils';

const LightDatabendHorizontalPng: FC<ICommonProps> = ({width}): ReactElement=> {
return (<img width={formatWidth(width)} src={Img} />);
};
LightDatabendHorizontalPng.defaultProps = {
  width: 300
}
export default LightDatabendHorizontalPng;