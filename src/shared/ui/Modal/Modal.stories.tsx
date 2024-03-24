import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio excepturi commodi quae! Maxime blanditiis sed enim quibusdam sunt dignissimos quidem.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio excepturi commodi quae! Maxime blanditiis sed enim quibusdam sunt dignissimos quidem.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
