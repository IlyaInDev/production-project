import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTabTypes } from './ArticleTabTypes';

const meta: Meta<typeof ArticleTabTypes> = {
    title: 'features/ArticleTabTypes',
    component: ArticleTabTypes,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleTabTypes>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [],
};
