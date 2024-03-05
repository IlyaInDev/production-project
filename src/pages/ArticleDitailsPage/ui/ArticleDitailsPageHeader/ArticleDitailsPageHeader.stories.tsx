import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDitailsPageHeader } from './ArticleDitailsPageHeader';

const meta: Meta<typeof ArticleDitailsPageHeader> = {
    title: 'shared/ArticleDitailsPageHeader',
    component: ArticleDitailsPageHeader,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDitailsPageHeader>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [],
};
