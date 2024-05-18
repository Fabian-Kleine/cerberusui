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
    args: {variant: 'primary', children: <a className="test" href="https://fabian-kleine.dev/" target="_blank">Test Link</a>, asChild: true}
}

export const ExtraClassNames: Story = {
    args: {variant: 'primary', children: 'Click Me', className: "test"}
}

export const Loading: Story = {
    args: {variant: 'warning', children: 'Click Me', loading: true}
}

export const SquareButton: Story = {
    args: {variant: 'primary', children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radiation"><path d="M12 12h0.01"/><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"/><path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"/><path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"/></svg>, square: true}
}

export const ButtonWithIcon: Story = {
    args: {variant: 'primary', children: <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radiation"><path d="M12 12h0.01"/><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"/><path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"/><path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"/></svg> Radiation</>}
}

export const CombinedButton: Story = {
    args: {variant: "warning", loading: true, asChild: true, children: <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radiation"><path d="M12 12h0.01"/><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"/><path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"/><path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"/></svg> Radiation</a>}
}