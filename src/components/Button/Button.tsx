import { ButtonHTMLAttributes } from "react"
import "./Button.css"
import "../index.css"
import Slot from "../../utils/Slot";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    asChild?: boolean;
    loading?: boolean;
    square?: boolean;
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