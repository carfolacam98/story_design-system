import { Input } from '../ui'; 

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    state: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    label: 'Default Input',
    state: 'default',
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
