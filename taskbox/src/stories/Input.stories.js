import { Input } from '../ui/atoms/Input'; 

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'focused', 'error', 'disabled'] },
    label: { control: 'text' },
  },
};

export const Default = (args) => <Input {...args} />;
Default.args = {
  label: 'Default Input',
  state: 'default',
};

export const Focused = (args) => <Input {...args} />;
Focused.args = {
  label: 'Focused Input',
  state: 'focused',
};

export const Error = (args) => <Input {...args} />;
Error.args = {
  label: 'Error Input',
  state: 'error',
};

export const Disabled = (args) => <Input {...args} />;
Disabled.args = {
  label: 'Disabled Input',
  state: 'disabled',
};
