import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            first: 'Jack',
            lastname: 'Black',
            age: 33,
            avatar,
            city: 'Moscow',
            country: Country.Russia,
            currency: Currency.RUB,
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loadind: Story = {
    args: {
        isLoading: true,
    },
};
