import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};

export const Secondary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
