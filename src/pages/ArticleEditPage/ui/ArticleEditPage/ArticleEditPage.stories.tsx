import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
