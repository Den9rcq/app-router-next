import { PProps } from '@/components/P/P.props';
import classNames from 'classnames';

export const P = ({ size = 'base', children, className, ...props }: PProps) => {
  return (
    <p
      className={classNames(
        size === 'sm' ? 'text-sm' : '',
        size === 'base' ? 'text-base' : '',
        size === 'lg' ? 'text-lg' : '',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
