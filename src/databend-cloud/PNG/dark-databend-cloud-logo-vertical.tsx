// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-cloud-logo-vertical-reverse.png';
import { ICommonProps } from 'databend-logos/types';
import { formatWidth } from 'databend-logos/utils';

const DarkDatabendCloudVerticalPng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={formatWidth(width)} src={Img} />);
};
DarkDatabendCloudVerticalPng.defaultProps = {
  width: 300
}
export default DarkDatabendCloudVerticalPng;