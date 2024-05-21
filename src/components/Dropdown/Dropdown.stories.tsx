import type { Meta, StoryObj } from "@storybook/react";
import Dropdown, { DropdownItem } from "./Dropdown";

const meta = {
    title: "cerberusui/Dropdown",
    component: Dropdown,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownTest: Story = {
    args: {
        children: <>
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
            <DropdownItem>Item 3</DropdownItem>
            <DropdownItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fugiat.</DropdownItem>
        </>,
        variant: "primary",
        label: "Open/Close Dropdown"
    }
}

export const DropdownIemAsChildTest: Story = {
    args: {
        children: <>
            <DropdownItem asChild><a href="#">Item 1</a></DropdownItem>
            <DropdownItem asChild><a href="#">Item 2</a></DropdownItem>
            <DropdownItem asChild><a href="#">Item 3</a></DropdownItem>
            <DropdownItem asChild><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, maxime!</a></DropdownItem>
        </>,
        variant: "primary",
        label: "Open/Close Dropdown"
    }
}