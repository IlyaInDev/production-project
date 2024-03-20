import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User/modal/consts/userConsts';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { AvatarDropdown } from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}><Story /></div>,
    ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Admin: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Bob',
                roles: [UserRole.ADMIN],
                avatar,
            },
        },
    })],
};

export const User: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Bob',
                roles: [UserRole.USER],
                avatar,
            },
        },
    })],
};
