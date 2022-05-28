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
  return (
    <div className={s.inputWrapper()}>
      <input
        className={s.input()}
        type="radio"
        id={id}
        value={value}
        {...rest}
      />
      <label className={s.label()} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
