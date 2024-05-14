import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
    title: "cerberusui/Input",
    component: Input,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
    args: {
        variant: "primary",
        placeholder: "Type Something",
        id: "input"
    }
}

export const InputWithLabel: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        placeholder: "Type Something",
        id: "input",
    }
}

export const FileInput: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        type: "file",
        id: "input",
        onChange: (e) => {
            if(e.target.files) {
                console.log(e.target.files[0]?.name)
            }
        }
    }
}

export const CheckboxInput: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        type: "checkbox",
        id: "input",
    }
}

export const RadioInput: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        type: "radio",
        id: "input",
    }
}

export const SubmitInput: Story = {
    args: {
        variant: "primary",
        type: "submit",
        id: "input",
    }
}

export const ColorInput: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        type: "color",
        id: "input",
    }
}

export const RangeInput: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        type: "range",
        id: "input",
    }
}

export const OTPInput: Story = {
    args: {
        children: "Input Label",
        variant: "primary",
        type: "OTP",
        OTPLength: 6,
        id: "input",
        onComplete: (value) => console.log(value)
    }
}