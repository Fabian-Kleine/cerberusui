import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
    title: "cerberusui/Modal",
    component: Modal,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedModal: Story = {
    args: {
        open: false,
        setOpen: () => {},
        variant: "primary",
        style: {fontFamily: "sans-serif"}
    }
}

export const OpenModal: Story = {
    args: {
        open: true,
        setOpen: () => {},
        modalTitle: "Modal Title",
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        variant: "primary",
        style: {fontFamily: "sans-serif"}
    }
}

export const ModalWithoutTitle: Story = {
    args: {
        open: true,
        setOpen: () => {},
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        variant: "primary",
        style: {fontFamily: "sans-serif"}
    }
}

export const ModalWithoutCloseButton: Story = {
    args: {
        open: true,
        setOpen: () => {},
        modalTitle: "Modal Title",
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        variant: "primary",
        style: {fontFamily: "sans-serif"},
        modalCloseButton: false
    }
}

export const ModalWithAction: Story = {
    args: {
        open: true,
        setOpen: () => {},
        modalTitle: "Modal Title",
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        modalActions: [
            {
                action: () => alert("test"),
                actionTitle: "Test Button",
                actionVariant: "primary"
            },
            {
                action: () => alert("test"),
                actionTitle: "Test Button 2",
                actionVariant: "default" 
            }
        ],
        variant: "primary",
        style: {fontFamily: "sans-serif"}
    }
}

export const ModalWithImage: Story = {
    args: {
        open: true,
        setOpen: () => {},
        modalTitle: "Modal Title",
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        modalActions: [
            {
                action: () => alert("test"),
                actionTitle: "Test Button",
                actionVariant: "primary"
            },
            {
                action: () => alert("test"),
                actionTitle: "Test Button 2",
                actionVariant: "default" 
            },
        ],
        variant: "primary",
        style: {fontFamily: "sans-serif"},
        modalImage: <img src="https://placehold.co/100" />
    }
}

export const DangerModal: Story = {
    args: {
        open: true,
        setOpen: () => {},
        modalTitle: "Modal Title",
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        modalActions: [
            {
                action: () => alert("test"),
                actionTitle: "Test Button",
                actionVariant: "primary"
            },
            {
                action: () => alert("test"),
                actionTitle: "Test Button 2",
                actionVariant: "default" 
            },
        ],
        variant: "warning",
        style: {fontFamily: "sans-serif"},
        modalImage: <img src="https://placehold.co/100" />,
        danger: true
    }
}

export const DraggableModal: Story = {
    args: {
        open: true,
        setOpen: () => {},
        modalTitle: "Modal Title",
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit.</p>,
        modalActions: [
            {
                action: () => alert("test"),
                actionTitle: "Test Button",
                actionVariant: "primary"
            },
            {
                action: () => alert("test"),
                actionTitle: "Test Button 2",
                actionVariant: "default" 
            },
        ],
        variant: "warning",
        style: {fontFamily: "sans-serif"},
        modalImage: <img src="https://placehold.co/100" />,
        modalDraggable: true
    }
}