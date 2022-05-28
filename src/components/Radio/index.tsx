import { InputHTMLAttributes } from 'react';

import * as s from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

type RadioProps = {
  label: string;
  id: string;
  value: RadioValue;
  onCheck?: (value?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ id, value, label, onCheck, ...rest }: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };
  return (
    <div className={s.inputWrapper()}>
      <input
        className={s.input()}
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label className={s.label()} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
