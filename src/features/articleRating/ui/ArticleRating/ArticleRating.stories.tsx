import type { Meta, StoryObj } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
    args: {
        articleId: '1',
    },
    decorators: [StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    })],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?articleId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
};

export const WithoutRate: Story = {
    args: {
        articleId: '1',
    },
    decorators: [StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    })],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?articleId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};