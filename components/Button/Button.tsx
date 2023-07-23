import classNames from 'classnames';
import ArrowIcon from './arrow.svg';
import { ButtonProps } from '@/components/Button/Button.props';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        'inline-block box-border p-2.5 bg-bg-main cursor-pointer text-center rounded-md text-sm',
        'transition-all',
        appearance == 'primary'
          ? 'text-white bg-primary hover:bg-primary-hover'
          : '',
        appearance == 'ghost'
          ? 'text-black border border-gray-light hover:bg-primary hover:text-white'
          : '',
        className
      )}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={classNames(
            'inline-block ml-5 transition-transform',
            arrow == 'down' ? 'rotate-90' : ''
          )}
        >
          <ArrowIcon
            className={classNames(
              appearance == 'primary' ? 'text-white' : '',
              appearance == 'ghost' ? 'hover:text-white' : ''
            )}
          />
        </span>
      )}
    </button>
  );
};
