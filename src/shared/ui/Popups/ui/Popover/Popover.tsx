import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '../../../../types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className ?: string;
    children: ReactNode;
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});