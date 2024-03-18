import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';

const notification = {
    id: '1',
    title: 'notification 1',
    description: 'Alex add new article',
};

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
        layout: 'padded',
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification, id: '1' },
                    { ...notification, id: '2' },
                    { ...notification, id: '3', href: 'http://yandex.ru' },
                    { ...notification, id: '4', href: 'http://yandex.ru' },
                    { ...notification, id: '5' },
                ],
            },
        ],
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        (Story) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Story /></div>,
    ],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
    args: {},
};
