import { cloneElement, isValidElement, HTMLAttributes, ReactNode, Children } from "react";

function Slot({ children, ...props }
    : HTMLAttributes<HTMLElement> & {
        children?: ReactNode
    }) {

    if (isValidElement(children)) {
        return cloneElement(children, {
            ...props,
            ...children.props,
            className: `${props.className || ''} ${children.props.className || ''}`.trim(),
        })
    }

    if (Children.count(children) > 1) {
        Children.only(null);
    }

    return null;
}

export default Slot;