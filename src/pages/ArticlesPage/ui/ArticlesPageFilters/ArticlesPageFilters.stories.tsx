import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'entities/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
