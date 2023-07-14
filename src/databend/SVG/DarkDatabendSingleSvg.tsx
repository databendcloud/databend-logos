// Copyright 2023 DatabendLabs.
import { ICommonProps } from 'databend-logos/types';
import { formatWidth } from 'databend-logos/utils';
import React, { FC, ReactElement } from 'react';

const DarkDatabendSingleSvg: FC<ICommonProps> = ({width}): ReactElement=> {
return (
<svg id="图层_1" width={formatWidth(width)} data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.48 58.35"><defs></defs><title>Databend LOGO</title><path style={{fill:'#fff'}} d="M59.53,4.81h0a2.5,2.5,0,0,0-1-4.8,2.43,2.43,0,0,0-1.83.81,3.8,3.8,0,0,0-.29.38,10.64,10.64,0,0,0-2,6.18,11.27,11.27,0,0,0,.24,2.27A10.68,10.68,0,0,1,59.53,4.81Z"/><path style={{fill:'#fff'}} d="M47.85,10.62l.12,0a10.46,10.46,0,0,1,4.39,2.68,11.11,11.11,0,0,0,.07-1.16A10.58,10.58,0,0,0,51,6.82a2.65,2.65,0,1,0-3.13,3.8Z"/><path style={{fill:'#fff'}} d="M114.34,44.05h0a16.9,16.9,0,0,0-1.11-3.53.08.08,0,0,1,0,0,33,33,0,0,0-4.45-7.55A41.15,41.15,0,0,0,97.18,22.78a53.78,53.78,0,0,0-4.87-2.57,61.53,61.53,0,0,0-8.2-3.07c-15.44-4.25-28.77-2.87-39.1.48A56.76,56.76,0,0,0,25.14,28.5c-.59.52-1.11,1-1.56,1.48A23.41,23.41,0,0,0,26,46v0l0,0c2.81,4.85,8.22,9.52,18.3,11.89,13.91,2.31,29.61-4.75,33.5-8,12.38,1,16.33-1.69,16.38-2.59.08-1.37-3-1.7-4.27-1.86l0,0s10.55-5.2,20.93.75c-.63,3.21.44,8,2.09,8.05.88,0,1.52-3.5,1.35-5.27,1,1.45,3.8,4,4.53,3.23C119.78,51.18,117.72,46.19,114.34,44.05ZM62.87,49a2.28,2.28,0,1,1,2.28-2.28A2.28,2.28,0,0,1,62.87,49Z"/></svg>
);
};
DarkDatabendSingleSvg.defaultProps ={
  width: 100
}
export default DarkDatabendSingleSvg;