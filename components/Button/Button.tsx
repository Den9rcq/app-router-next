import classNames from 'classnames';
import { ButtonProps } from '@/components/Button/Button.props';

export const Button = ({
  appearance,
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
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
