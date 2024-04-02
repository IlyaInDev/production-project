import type { Meta, StoryObj } from '@storybook/react';
import { ProfileRating } from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
    title: 'features/ProfileRating',
    component: ProfileRating,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Primary: Story = {
    args: {
        profileId: '1',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?profileId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 3,
                    },
                ],
            },
        ],
    },
};

export const WithoutRate: Story = {
    args: {
        profileId: '1',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?profileId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
