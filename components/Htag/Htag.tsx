import { HtagProps } from '@/components/Htag/Htag.props';

export const Htag = ({ tag, children }: HtagProps) => {
  switch (tag) {
    case 'h1':
      return <h1 className="font-medium text-2xl">{children}</h1>;
    case 'h2':
      return <h2 className="font-medium text-xl">{children}</h2>;
    case 'h3':
      return <h3 className="font-semibold text-lg">{children}</h3>;
    default:
      return <></>;
  }
};
