import { PropsWithChildren } from "react"
import "./Button.css"

const Button = (props: PropsWithChildren) => {
    return <button className="btn">{props?.children}</button>
}

export default Button;