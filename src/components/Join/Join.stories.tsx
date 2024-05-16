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

export const JoinedInputAndIconButton: Story = {
    args: {
        children: <>
            <Input id="input" variant="primary" />
            <Button variant="primary" square><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></Button>
        </>
    }
}