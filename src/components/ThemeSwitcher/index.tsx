import { useState } from 'react';
import { useTheme } from 'next-themes';

import * as RadioGroup from '@radix-ui/react-radio-group';
import * as s from './styles';

type ThemeOptionProps = {
  value: string;
  label: string;
  checked: boolean;
};

type ThemeSwitcherProps = {
  themeOptions: ThemeOptionProps[];
};

const ThemeSwitcher = ({ themeOptions }: ThemeSwitcherProps) => {
  const { theme = 'neon', setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <RadioGroup.Root
      defaultValue="neon"
      aria-label="View density"
      className={s.root()}
      onValueChange={() => {
        setTheme(currentTheme);
      }}
    >
      {themeOptions.map((theme) => (
        <div
          key={theme.value}
          style={{ margin: '10px 0', alignItems: 'center' }}
          className={s.flex()}
        >
          <RadioGroup.Item
            value={theme.value}
            id={theme.value}
            className={s.item()}
            onClick={() => {
              setCurrentTheme(theme.value);
            }}
          >
            <RadioGroup.Indicator className={s.indicator()} />
          </RadioGroup.Item>
          <label htmlFor={theme.value} className={s.label()}>
            {theme.label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
};

export default ThemeSwitcher;
