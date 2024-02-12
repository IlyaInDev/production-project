import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Some text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Some text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
    args: {
        text: 'Some text',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Some text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};