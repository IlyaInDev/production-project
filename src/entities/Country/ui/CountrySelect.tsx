import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите страну')}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
};