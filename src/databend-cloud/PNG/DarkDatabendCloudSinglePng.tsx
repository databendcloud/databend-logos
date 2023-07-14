// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './Databend-Cloud-logo-06.png';
import { ICommonProps } from 'databend-logos/types';
import { formatWidth } from 'databend-logos/utils';

const DarkDatabendCloudSinglePng: FC<ICommonProps> = ({width}): ReactElement=> {
  return (<img width={formatWidth(width)} src={Img} />);
};
DarkDatabendCloudSinglePng.defaultProps = {
  width: 200
}
export default DarkDatabendCloudSinglePng;