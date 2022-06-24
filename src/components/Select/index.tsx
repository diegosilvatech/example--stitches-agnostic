import { useTheme } from 'next-themes';

import * as SelectPrimitive from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons';
import * as s from './styles';

type ThemeOptionProps = {
  value: string;
  label: string;
  checked: boolean;
};

type SelectProps = {
  themeOptions: ThemeOptionProps[];
};

const Select = ({ themeOptions }: SelectProps) => {
  const { theme = 'neon', setTheme } = useTheme();

  return (
    <SelectPrimitive.Root value={theme} onValueChange={setTheme}>
      <SelectPrimitive.Trigger aria-label="Food" className={s.trigger()}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content className={s.content()}>
        <SelectPrimitive.ScrollUpButton className={s.scrollButtonStyles()}>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className={s.viewport()}>
          <SelectPrimitive.Group>
            <SelectPrimitive.Label className={s.label()}>
              Themes
            </SelectPrimitive.Label>
            {themeOptions.map((theme) => (
              <SelectPrimitive.Item
                key={theme.value}
                value={theme.value}
                className={s.item()}
              >
                <SelectPrimitive.ItemText>
                  {theme.label}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>

          <SelectPrimitive.Separator />
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className={s.scrollButtonStyles()} />
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default Select;
