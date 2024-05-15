import { ButtonHTMLAttributes, Children, ReactNode, cloneElement, isValidElement, HTMLAttributes } from "react"
import "./Button.css"
import "../index.css"
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    asChild?: Boolean;
    loading?: Boolean;
    square?: Boolean;
}

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

const Button = ({ variant, asChild, loading, square, ...props }: ButtonProps) => {
    if (loading) {
        props.disabled = true;
    }
    if (asChild) {
        props.className = classNames("cui-btn", `cui-btn-${variant}`, props?.className, props?.disabled && "cui-btn-disabled", loading && "cui-btn-loading", square && "cui-btn-square");
        return <Slot {...props} />
    }
    return <button {...props} className={classNames("cui-btn", `cui-btn-${variant}`, props?.className, loading && "cui-btn-loading", square && "cui-btn-square")}>{props?.children}</button>
}

export default Button;