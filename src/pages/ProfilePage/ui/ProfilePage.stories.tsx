import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
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
    })],
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
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
    })],
};
