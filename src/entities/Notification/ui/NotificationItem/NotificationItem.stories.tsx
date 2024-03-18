import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {
        item: {
            id: '1',
            title: 'notification 1',
            description: 'Alex add new article',
        },
    },
};

export const WithLink: Story = {
    args: {
        item: {
            id: '1',
            title: 'notification 1',
            description: 'Alex add new article',
            href: 'http://yandex.ru',
        },
    },
};
