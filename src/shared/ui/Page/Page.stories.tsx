import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'shared/Page',
    component: Page,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [],
};
