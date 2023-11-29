import React from 'react';
import { Card }  from '../ui'; 

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    hasButton: { control: 'boolean' },
    imageUrl: { control: 'text' }, 
    buttonText: { control: 'text' },
    buttonRedirect: { control: 'text' },
  },
};


export const WithButton = {
  args: {
    hasButton: true,
    imageUrl: 'https://via.placeholder.com/300', 
    buttonText: 'Click me',
    buttonRedirect: 'https://via.placeholder.com/300', 
  },
};

export const WithoutButton = {
  args: {
    hasButton: false,
    imageUrl: 'https://via.placeholder.com/300', 
    buttonText: '',
    buttonRedirect: 'https://via.placeholder.com/300', 
  },
};

