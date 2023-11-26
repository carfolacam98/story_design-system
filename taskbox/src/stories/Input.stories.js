import { Input } from '../ui'; 

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'focused', 'error', 'disabled'] },
    label: { control: 'text' },
  },
};

export const Default = {
  args: {
    label: 'Default Input',
    state: 'default',
  },
};

export const Focused = {
  args: {
    label: 'Focused Input',
    state: 'focused',
  },
};

export const Error = {
  args: {
    label: 'Error Input',
    state: 'error',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    state: 'disabled',
  },
};
