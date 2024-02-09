import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
