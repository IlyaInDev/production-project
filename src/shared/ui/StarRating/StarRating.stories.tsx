import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const NotSelected: Story = {
    args: {
        selectedStars: 0,
    },
};

export const ThreeStars: Story = {
    args: {
        selectedStars: 3,
    },
};

export const FiveStars: Story = {
    args: {
        selectedStars: 5,
    },
};