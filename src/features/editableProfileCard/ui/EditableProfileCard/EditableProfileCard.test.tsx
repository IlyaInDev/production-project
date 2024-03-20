import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRenderOptions, componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 103,
    currency: Currency.EUR,
    country: Country.Belarus,
    username: 'admin123',
    city: 'Moscow',
};

const options: ComponentRenderOptions = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            error: '',
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    test('Readonly mode should switch', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('Click on cancel button should reset changes', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Error should occur', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    // test('If there are no validation errors then PUT request should be sent to the server', async () => {
    //     const mockPutReq = jest.spyOn($api, 'put');
    //     componentRender(<EditableProfileCard id="1" />, options);
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    //     await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    //     expect(mockPutReq).toHaveBeenCalled();
    // });
});
