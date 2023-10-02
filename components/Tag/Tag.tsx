import { TagProps } from '@/components/Tag/Tag.props';
import classNames from 'classnames';

export const Tag = ({
  children,
  size = 'sm',
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps) => {
  return (
    <div
      className={classNames(
        'inline-block py-1.5 px-2.5 rounded-2xl',

        size === 'sm' ? 'text-xs' : '',
        size === 'base' ? 'text-sm' : '',

        color === 'ghost' ? 'border border-gray-light' : '',
        color === 'red' ? 'text-white font-bold bg-[#f00]' : '',
        color === 'grey' ? 'text-white font-bold bg-[#b3c0d9]' : '',
        color === 'green' ? 'text-green bg-green-light font-bold' : '',
        color === 'primary' ? 'text-primary border border-primary' : '',

        className
      )}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
