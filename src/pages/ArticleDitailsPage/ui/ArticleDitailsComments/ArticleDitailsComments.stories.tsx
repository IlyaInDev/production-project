import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDitailsComments } from './ArticleDitailsComments';

const meta: Meta<typeof ArticleDitailsComments> = {
    title: 'pages/ArticleDitailsPage/ArticleDitailsComments',
    component: ArticleDitailsComments,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDitailsComments>;

export const WithComments: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDitailsPage: {
            comments: {
                entities: {
                    1: {
                        id: '1',
                        user: {
                            id: '1',
                            username: 'Vasyan',
                        },
                        text: 'Such a cool article!',
                    },
                    2: {
                        id: '2',
                        user: {
                            id: '4',
                            username: 'Genadii',
                        },
                        text: 'So informative!',
                    },
                },
                ids: ['1', '2'],
            },
        },
    })],
};

export const WithoutComments: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
