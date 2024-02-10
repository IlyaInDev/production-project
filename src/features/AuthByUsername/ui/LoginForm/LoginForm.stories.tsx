import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
    decorators: [StoreDecorator({
        loginForm: { username: 'John Doe', password: 'GIO' },
    })],
};

export const Secondary: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: 'John Doe', password: 'GIO' },
        }),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: 'John Doe', password: 'GIO', error: 'ERROR' },
    })],
};

export const Loadind: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { isLoading: true },
    })],
};
