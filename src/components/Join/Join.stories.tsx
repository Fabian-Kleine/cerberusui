import type { Meta, StoryObj } from "@storybook/react";
import Join from "./Join";
import Button from "../Button";

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
            <div style={{background: "red", padding: "12px", fontFamily: "sans-serif"}}>Joinded Div</div>
        </>
    }
}