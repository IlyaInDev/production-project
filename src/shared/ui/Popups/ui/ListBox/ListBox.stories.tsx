import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {
        value: '123',
        items: [
            { content: 'sddsvds', value: '123' },
            { content: 'sddsvds2314', value: '1234' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: 'sddsvds', value: '123' },
            { content: 'sddsvds2314', value: '1234' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: 'sddsvds', value: '123' },
            { content: 'sddsvds2314', value: '1234' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: 'sddsvds', value: '123' },
            { content: 'sddsvds2314', value: '1234' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: 'sddsvds', value: '123' },
            { content: 'sddsvds2314', value: '1234' },
        ],
    },
};
