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

export const DropdownItemAsChildTest: Story = {
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

export const DropdownDefaultOpen: Story = {
    args: {
        children: <>
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
            <DropdownItem>Item 3</DropdownItem>
            <DropdownItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fugiat.</DropdownItem>
        </>,
        variant: "primary",
        label: "Open/Close Dropdown",
        defaultOpen: true,
        closeOnOutsideClick: false
    }
}

export const DropdownWithIcon: Story = {
    args: {
        children: <>
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
            <DropdownItem>Item 3</DropdownItem>
        </>,
        label: <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radiation"><path d="M12 12h0.01" /><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" /><path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" /><path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" /></svg> Radiation</>,
        variant: "primary"
    }
}