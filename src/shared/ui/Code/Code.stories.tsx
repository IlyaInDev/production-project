import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text:
            'const meta: Meta<typeof Code> = {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    parameters: {\n' +
            "        layout: 'padded',\n" +
            '    },\n' +
            "    tags: ['autodocs'],\n" +
            '    argTypes: {},\n' +
            '};',
    },
};

export const Dark: Story = {
    args: {},
    decorators: [],
};
