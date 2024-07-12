import { InputHTMLAttributes, ClipboardEvent, ChangeEvent, ReactNode, useRef, useState } from "react";
import "./Input.css";
import "../index.css";
import classNames from "classnames";
import Button from "../Button";
import Join from "../Join";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    children?: ReactNode;
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    id: string;
    labelClassName?: string;
    type?: "OTP" | InputHTMLAttributes<HTMLInputElement>["type"];
    OTPLength?: number;
    onComplete?: (otpValue: string) => void;
}

const Input = ({ children, id, name, variant, className, labelClassName, type, OTPLength = 6, onComplete, ...props }: InputProps) => {
    const [inputValue, setInputValue] = useState("");
    const [OTP, setOTP] = useState<string[]>(Array(OTPLength).fill(''));
    const otpRef = useRef<HTMLInputElement[]>(Array(OTPLength).fill(null));

    function handleClick() {
        document.getElementById(id)?.click();
    }

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.files?.[0]?.name;
        if (!val) return;
        setInputValue(val);
        if (props.onChange) props.onChange(event);
    }


    const handleTextChange = (input: string, index: number) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        if (input.length === 1 && index < OTPLength - 1) {
            otpRef.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            otpRef.current[index - 1]?.focus();
        }

        if (newPin.every((digit) => digit !== '') && onComplete) {
            onComplete(newPin.join(''));
        }
    }

    const handleOTPPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedString = event.clipboardData.getData('Text');
        const pastedArray = pastedString.split('');
        const newPin = [...OTP];
        newPin.forEach((_, index) => newPin[index] = pastedArray[index] || "");
        setOTP(newPin);
        otpRef.current.forEach(inputElement => inputElement.blur());
        if (onComplete && pastedArray.length >= OTPLength) onComplete(pastedString);
        if (props.onPaste) props.onPaste(event);
    }

    if (type == "file") {
        return (
            <div className={classNames("cui-input-wrapper", `cui-input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("cui-label", labelClassName)}>{children}</label>
                }
                <Join>
                    <Button onClick={handleClick} className="cui-input-btn" variant={variant}>Select File</Button>
                    <input value={inputValue} disabled placeholder={props.placeholder || "No file selected"} type="text" className={classNames("cui-input", `cui-input-${variant}`, className)} />
                </Join>
                <input {...props} onChange={handleFileChange} type={type} id={id} name={name} className="cui-file-input" />
            </div>
        )
    }
    if (type == "checkbox" || type == "radio") {
        return (
            <div className={classNames("cui-input-wrapper", `cui-input-wrapper-${variant}`, "cui-input-wrapper-row", className)}>
                {children &&
                    <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
                }
                <input {...props} type={type} id={id} name={name} className={classNames("cui-input", `cui-input-${variant}`, "cui-input-checkbox", className)} />
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
            <div className={classNames("cui-input-wrapper", `cui-input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("cui-label", labelClassName)}>{children}</label>
                }
                <input type={type} id={id} name={name} className={classNames("cui-input", `cui-input-${variant}`, "cui-input-color", className)} {...props} />
            </div>
        )
    }
    if (type == "range") {
        return (
            <div className={classNames("cui-input-wrapper", `cui-input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("cui-label", labelClassName)}>{children}</label>
                }
                <input type={type} id={id} name={name} className={classNames("cui-input", `cui-input-${variant}`, "cui-input-range", className)} {...props} />
            </div>
        )
    }
    if (type == "image") {
        console.error("Use Input type file for images!");
        return (
            <div style={{ color: "var(--cui-secondary)" }}>Use Input type "file" for images!</div>
        )
    }
    if (type == "OTP") {
        return (
            <div className={classNames("cui-input-wrapper", `cui-input-wrapper-${variant}`, className)}>
                {children &&
                    <label htmlFor={id} className={classNames("label", labelClassName)}>{children}</label>
                }
                <div className="cui-input-wrapper cui-input-wrapper-otp">
                    {Array.from({ length: OTPLength || 3 }).map((_, index) =>
                        <input
                            key={index}
                            id={id + index}
                            maxLength={1}
                            value={OTP[index]}
                            onChange={(e) => {
                                handleTextChange(e.target.value, index);
                                if (props.onChange) props.onChange(e);
                            }}
                            onPaste={handleOTPPaste}
                            ref={(ref) => (otpRef.current[index] = ref as HTMLInputElement)}
                            type="text"
                            className={classNames("cui-input", `cui-input-${variant}`, "cui-input-otp", className)}
                            {...props} />
                    )}
                </div>
            </div>
        )
    }
    return (
        <div className={classNames("cui-input-wrapper", `cui-input-wrapper-${variant}`, className)}>
            {children &&
                <label htmlFor={id} className={classNames("cui-label", labelClassName)}>{children}</label>
            }
            <input type={type} id={id} name={name} className={classNames("cui-input", `cui-input-${variant}`, className)} {...props} />
        </div>
    )
}

export default Input;