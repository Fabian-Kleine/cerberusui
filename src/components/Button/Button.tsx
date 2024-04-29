import { PropsWithChildren } from "react"

const Button = (props: PropsWithChildren) => {
    return <button style={{ backgroundColor: "red" }}>{props?.children}</button>
}

export default Button;