import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Text } from '../../../Text/Text';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popups/Popover',
    component: Popover,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        trigger: <Button theme={ButtonTheme.OUTLINE}>open</Button>,
        children: (
            <>
                <Text title="Notification 1" text="Vasylii add new article" />
                <Text title="Notification 2" text="Urii add new article" />
            </>
        ),
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        trigger: <Button theme={ButtonTheme.OUTLINE}>open</Button>,
        children: (
            <>
                <Text title="Notification 1" text="Vasylii add new article" />
                <Text title="Notification 2" text="Urii add new article" />
            </>
        ),
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        trigger: <Button theme={ButtonTheme.OUTLINE}>open</Button>,
        children: (
            <>
                <Text title="Notification 1" text="Vasylii add new article" />
                <Text title="Notification 2" text="Urii add new article" />
            </>
        ),
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        trigger: <Button theme={ButtonTheme.OUTLINE}>open</Button>,
        children: (
            <>
                <Text
                    className="textStory"
                    title="Notification 1"
                    text="Vasylii add new article"
                />
                <Text title="Notification 2" text="Urii add new article" />
            </>
        ),
    },
};
