import type { Meta, StoryObj } from "@storybook/react";
import Join from "./Join";
import Button from "../Button";
import Input from "../Input";

const meta = {
    title: "cerberusui/Join",
    component: Join,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
} satisfies Meta<typeof Join>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JoinedButtons: Story = {
    args: {
        children: <>
            <Button variant="primary">Joined Button</Button>
            <Button variant="default">Joined Button</Button>
            <div style={{background: "red", display: "flex", alignItems: "center", fontFamily: "sans-serif", padding: "0 2rem"}}>Joinded Div</div>
        </>
    }
}

export const JoinedInputAndButton: Story = {
    args: {
        children: <>
            <Input id="input" variant="primary" />
            <Button variant="primary">Joined Button</Button>
        </>
    }
}