import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
