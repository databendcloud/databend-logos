// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import Img from './databend-logo-vertical-reverse.png';

import { ICommonProps } from 'databend-logos/types';

const DarkDatabendVerticalPng: FC<ICommonProps> = ({width}): ReactElement=> {
return (<img width={width} src={Img} />);
};
DarkDatabendVerticalPng.defaultProps = {
  width: 300
}
export default DarkDatabendVerticalPng;