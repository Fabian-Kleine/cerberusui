import { ButtonHTMLAttributes, Children, ReactNode, cloneElement, isValidElement, HTMLAttributes } from "react"
import "./Button.css"
import "../index.css"
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    asChild?: Boolean;
    loading?: Boolean;
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

const Button = ({ variant, asChild, loading, ...props }: ButtonProps) => {
    if (loading) {
        props.disabled = true;
    }
    if (asChild) {
        props.className = classNames("btn", variant == "primary" ? "btn-primary" : variant == "secondary" ? "btn-secondary" : variant == "tertiary" ? "btn-tertiary" : variant == "warning" ? "btn-warning" : null, props?.className, props?.disabled && "btn-disabled", loading && "btn-loading");
        return <Slot {...props} />
    }
    return <button {...props} className={classNames("btn", variant == "primary" ? "btn-primary" : variant == "secondary" ? "btn-secondary" : variant == "tertiary" ? "btn-tertiary" : variant == "warning" ? "btn-warning" : null, props?.className, loading && "btn-loading")}>{props?.children}</button>
}

export default Button;