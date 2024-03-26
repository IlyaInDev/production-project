import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../modal/slice/counterSlice';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const { add, increment, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleAdd}
                data-testid="increment-btn"
            >
                {t('Add 5')}
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('Increment')}
            </Button>
            <Button
                onClick={handleDec}
                data-testid="decrement-btn"
            >
                {t('Decrement')}
            </Button>
        </div>
    );
};