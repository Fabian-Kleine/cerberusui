import { ButtonHTMLAttributes } from "react"
import "./Button.css"
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | ""
}

const Button = ({ variant, ...props }: ButtonProps) => {
    return <button {...props} className={classNames("btn", variant == "primary" ? "btn-primary" : variant == "secondary" ? "btn-secondary" : null)}>{props?.children}</button>
}

export default Button;