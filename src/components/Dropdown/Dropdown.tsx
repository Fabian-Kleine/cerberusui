import { useState, DetailedHTMLProps, HTMLAttributes, LiHTMLAttributes, ReactNode } from "react"
import "./Dropdown.css"
import Button from "../Button"
import classNames from "classnames";
import Slot from "../../utils/Slot";
import OutsideAlerter from "../../utils/OutsideAlerter";

export interface DropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    label: string | ReactNode;
    closeOnOutsideClick?: boolean;
    defaultOpen?: boolean;
}

const Dropdown = ({ children, variant, label, closeOnOutsideClick = true, defaultOpen = false, ...props }: DropdownProps) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <OutsideAlerter action={() => closeOnOutsideClick ? setOpen(false) : null} className={"cui-dropdown"}>
            <Button onClick={() => setOpen(!open)} variant={variant}>{label}</Button>
            <ul className={classNames("cui-dropdown-content", `cui-dropdown-content-${variant}`, open && "cui-dropdown-content-open", props.className)}>
                {children}
            </ul>
        </OutsideAlerter>
    )
}

export interface DropdownItemProps extends LiHTMLAttributes<HTMLLIElement> {
    asChild?: boolean;
}

export const DropdownItem = ({ children, className, asChild, ...props }: DropdownItemProps) => {
    if (asChild) {
        return (
            <Slot {...props} className={classNames("cui-dropdown-item", className)}>
                {children}
            </Slot>
        )
    }
    return (
        <li {...props} className={classNames("cui-dropdown-item", className)}>
            {children}
        </li>
    )
}

export default Dropdown;