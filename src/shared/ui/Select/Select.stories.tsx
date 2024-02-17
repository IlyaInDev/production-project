import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {

    },
};

export const Small: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' },
        ],
    },
};
