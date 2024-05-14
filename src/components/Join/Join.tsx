import "./Join.css";
import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Join = ({ className, children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div {...props} className={classNames("cui-join", className)}>
            {children}
        </div>
    )
}

export default Join;