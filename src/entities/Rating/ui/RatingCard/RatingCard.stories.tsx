import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {
    args: {},
};

export const WithTitle: Story = {
    args: {
        title: 'Как Вам статья?',
    },
};

export const HasFeedback: Story = {
    args: {
        title: 'Как Вам статья?',
        hasFeedback: true,
        feedbackTitle: 'Оставьте Ваш отзыв',
    },
};
