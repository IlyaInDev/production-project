import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

const notification = {
    id: '1',
    title: 'notification 1',
    description: 'Alex add new article',
};

export const Primary: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification, id: '1' },
                    { ...notification, id: '2' },
                    { ...notification, id: '3' },
                ],
            },
        ],
    },
};

export const WithLink: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification, id: '1', href: 'http://yandex.ru' },
                    { ...notification, id: '2' },
                    { ...notification, id: '3', href: 'http://yandex.ru' },
                ],
            },
        ],
    },
};