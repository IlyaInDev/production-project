import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Normal: Story = {
    args: {},
};
