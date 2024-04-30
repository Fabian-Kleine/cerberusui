import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "cerberusui/Button",
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {variant: 'primary', children: 'Click Me'}
}

export const Secondary: Story = {
    args: {variant: 'secondary', children: 'Click Me'}
}

export const Tertiary: Story = {
    args: {variant: 'tertiary', children: 'Click Me'}
}

export const Warning: Story = {
    args: {variant: 'warning', children: 'Click Me'}
}

export const WithOnClick: Story = {
    args: {variant: 'primary', children: 'Click Me', onClick: () => alert("onClick event")}
}

export const Disabled: Story = {
    args: {variant: 'primary', children: 'Click Me', disabled: true}
}

export const AsChild: Story = {
    args: {variant: 'primary', children: <a href="https://fabian-kleine.dev/" target="_blank">Test Link</a>, asChild: true, disabled: false}
}

export const ExtraClassNames: Story = {
    args: {variant: 'primary', children: 'Click Me', className: "test"}
}

export const Loading: Story = {
    args: {variant: 'warning', children: 'Click Me', loading: true}
}