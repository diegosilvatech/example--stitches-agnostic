import * as s from './styles';

type ButtonProps = {
  onClick?: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button className={s.button()} onClick={onClick}>
      button
    </button>
  );
};

export default Button;
