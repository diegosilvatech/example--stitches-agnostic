import * as s from './styles';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={s.button()} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
