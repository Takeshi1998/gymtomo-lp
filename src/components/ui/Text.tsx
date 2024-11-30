import clsx from 'clsx';

import type { FC, ReactNode } from 'react';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Props = {
  size?: TextSize;
  bold?: boolean;
  noWrap?: boolean;
  color?: 'default' | 'primary' | 'gray' | 'error';
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: ReactNode;
  className?: string;
};

export const Text: FC<Props> = ({ as, bold, size, color, noWrap, children, className, ...nest }) => {
  const ComponentName = as ?? 'span';
  const sizeMap = {
    xs: 'text-xs leading-6',
    sm: 'text-sm leading-6',
    md: 'text-base leading-7',
    lg: 'text-lg leading-7',
    xl: 'text-xl leading-8',
    '2xl': 'text-2xl leading-9',
  };
  const colorMap = {
    default: 'text-body',
    primary: 'text-primary',
    gray: 'text-gray-500',
    error: 'text-destructive',
  };
  return (
    <ComponentName
      {...nest}
      className={clsx(
        'break-all tracking-wider',
        bold && 'font-bold',
        size && sizeMap[size],
        color && colorMap[color],
        noWrap ? 'whitespace-nowrap' : 'whitespace-pre-wrap',
        className,
      )}
    >
      {children}
    </ComponentName>
  );
};
