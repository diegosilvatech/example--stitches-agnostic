import * as s from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={s.container()}>{children}</div>;
};

export default Container;
