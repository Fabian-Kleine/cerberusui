import { InputHTMLAttributes, ReactNode, useState } from "react";
import "./Input.css";
import "../index.css";
import classNames from "classnames";
import Button from "../Button";
import Join from "../Join";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    id: string;
    labelClassName?: string;
}

const Input = ({ children, id, name, variant, className, labelClassName, type, ...props }: InputProps) => {
    const [inputValue, setInputValue] = useState("");

    function handleClick() {
        document.getElementById(id)?.click();
    }

    function handleFileChange(event: any) {
        const val = event?.target.files[0].name;
        setInputValue(val);
        if (props.onChange) {
            props.onChange(event);
        }
    }

    if (type == "file") {
        return (
            <div className={classNames("input-wrapper", `input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
                }
                <Join>
                    <Button onClick={handleClick} className="input-btn" variant={variant}>Select File</Button>
                    <input value={inputValue} disabled placeholder={props.placeholder || "No file selected"} type="text" className={classNames("input", `input-${variant}`, className)} />
                </Join>
                <input {...props} onChange={handleFileChange} type={type} id={id} name={name} className="file-input" />
            </div>
        )
    }
    if (type == "checkbox" || type == "radio") {
        return (
            <div className={classNames("input-wrapper", `input-wrapper-${variant}`, "input-wrapper-row", className)}>
                {children &&
                    <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
                }
                <input {...props} type={type} id={id} name={name} className={classNames("input", `input-${variant}`, "input-checkbox", className)} />
            </div>
        )
    }
    if (type == "button" || type == "submit" || type == "reset") {
        return (
            <Button asChild className={className} variant={variant}>
                <input {...props} type={type} id={id} name={name} value={props.value || children?.toString() || undefined} />
            </Button>
        )
    }
    if (type == "color") {
        return (
            <div className={classNames("input-wrapper", `input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
                }
                <input type={type} id={id} name={name} className={classNames("input", `input-${variant}`, "input-color", className)} {...props} />
            </div>
        )
    }
    if (type == "range") {
        return (
            <div className={classNames("input-wrapper", `input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
                }
                <input type={type} id={id} name={name} className={classNames("input", `input-${variant}`, "input-range", className)} {...props} />
            </div>
        )
    }
    if (type == "image") {
        console.error("Use Input type file for images!");
        return (
            <div style={{ color: "var(--secondary)" }}>Use Input type "file" for images!</div>
        )
    }
    return (
        <div className={classNames("input-wrapper", `input-wrapper-${variant}`, className)}>
            {children &&
                <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
            }
            <input type={type} id={id} name={name} className={classNames("input", `input-${variant}`, className)} {...props} />
        </div>
    )
}

export default Input;