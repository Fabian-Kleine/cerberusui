import { DialogHTMLAttributes, Dispatch, ReactNode, SetStateAction } from "react";
import "./Modal.css";
import "../index.css"
import Button from "../Button";
import classNames from "classnames";
import Draggable from "react-draggable";
import OutsideAlerter from "../../utils/OutsideAlerter";
import { ButtonProps } from "../Button/Button";

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
    setOpen: Dispatch<SetStateAction<boolean>>;
    modalTitle?: string;
    modalActions?: { actionTitle: string, action: Function, actionVariant: ButtonProps["variant"] }[];
    variant: "primary" | "secondary" | "tertiary" | "default" | "warning";
    modalImage?: ReactNode;
    danger?: boolean;
    modalDraggable?: boolean;
    modalCloseButton?: boolean;
    outsideClickClose?: boolean;
}

const Drag = ({ modalDraggable, children }: { modalDraggable?: boolean, children: ReactNode }) => {
    if (modalDraggable) {
        return <Draggable handle=".cui-modal-draggable">{children}</Draggable>
    }
    return <>{children}</>
}

const Modal = ({ className, open, setOpen, modalTitle, modalImage, modalActions, children, variant, danger, modalDraggable, modalCloseButton = true, outsideClickClose, ...props }: ModalProps) => {
    return (
        <OutsideAlerter action={() => outsideClickClose ? setOpen(false) : null}>
            <Drag modalDraggable={modalDraggable}>
                <dialog
                    {...props}
                    open={open}
                    className={classNames("cui-modal", `cui-modal-${variant}`, danger && "cui-modal-danger", !open && "cui-closed", className)}>
                    {modalDraggable &&
                        <div className="cui-modal-draggable"></div>
                    }
                    {modalImage &&
                        <div className="cui-modal-image">
                            {modalImage}
                        </div>
                    }
                    <div className="cui-modal-container">
                        <div className={classNames("cui-modal-header", !modalTitle && "cui-modal-header-end")}>
                            {modalTitle && (
                                <h3 className="cui-modal-title">{modalTitle}</h3>
                            )}
                            {modalCloseButton && (
                                <button onClick={() => setOpen(false)} className={"cui-modal-close"} type="button"></button>
                            )}
                        </div>
                        <div className="cui-modal-body">
                            {children}
                        </div>
                        {modalActions && (
                            <div className="cui-modal-actions">
                                {modalActions.map((action, index) =>
                                    <Button onClick={() => action.action()} key={index} variant={action.actionVariant}>{action.actionTitle}</Button>
                                )}
                            </div>
                        )}
                    </div>
                </dialog>
            </Drag>
        </OutsideAlerter>
    )
}

export default Modal;