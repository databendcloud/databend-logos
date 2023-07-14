import { percent } from "databend-logos/types";

export const formatWidth = (width: percent | number = 200): string => {
  return typeof width === 'number' ? `${width}px` : width;
};