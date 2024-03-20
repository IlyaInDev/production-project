import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDitailsPageHeader } from './ArticleDitailsPageHeader';

const meta: Meta<typeof ArticleDitailsPageHeader> = {
    title: 'pages/ArticleDitailsPage/ArticleDetailsPageHeader',
    component: ArticleDitailsPageHeader,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDitailsPageHeader>;

export const CanEdit: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
        articleDitailes: {
            data: {
                user: {
                    id: '1',
                },
            },
        },
    })],
};

export const CannotEdit: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
        articleDitailes: {
            data: {
                user: {
                    id: '2',
                },
            },
        },
    })],
};
