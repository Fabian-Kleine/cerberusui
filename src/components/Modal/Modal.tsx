import { DialogHTMLAttributes, Dispatch, ReactNode, SetStateAction } from "react";
import "./Modal.css";
import "../index.css"
import Button from "../Button";
import classNames from "classnames";
import Draggable from "react-draggable";
import { ButtonProps } from "../Button/Button";

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
    setOpen: Dispatch<SetStateAction<boolean>>;
    modalTitle?: string;
    modalActions?: { actionTitle: string, action: Function, actionVariant: ButtonProps["variant"] }[];
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    modalImage?: ReactNode;
    danger?: Boolean;
    modalDraggable?: Boolean;
}

const Drag = ({modalDraggable, children}: {modalDraggable?: Boolean, children: ReactNode}) => {
    if (modalDraggable) {
        return <Draggable handle=".modal-draggable">{children}</Draggable>
    }
    return <>{children}</>
}

const Modal = ({ className, open, setOpen, modalTitle, modalImage, modalActions, children, variant, danger, modalDraggable, ...props }: ModalProps) => {
    return (
        <Drag modalDraggable={modalDraggable}>
            <dialog
                {...props}
                open={open}
                className={classNames("modal", `modal-${variant}`, danger && "modal-danger", !open && "closed", className)}>
                {modalDraggable &&
                    <div className="modal-draggable"></div>
                }
                {modalImage &&
                    <div className="modal-image">
                        {modalImage}
                    </div>
                }
                <div className="modal-container">
                    <div className={classNames("modal-header", !modalTitle && "modal-header-end")}>
                        {modalTitle && (
                            <h3 className="modal-title">{modalTitle}</h3>
                        )}
                        <button onClick={() => setOpen(false)} className={"modal-close"} type="button"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {modalActions && (
                        <div className="modal-actions">
                            {modalActions.map((action, index) =>
                                <Button onClick={() => action.action()} key={index} variant={action.actionVariant}>{action.actionTitle}</Button>
                            )}
                        </div>
                    )}
                </div>
            </dialog>
        </Drag>
    )
}

export default Modal;