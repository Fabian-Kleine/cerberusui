import { DetailedHTMLProps, useEffect, useRef, HTMLAttributes, RefObject } from "react";

function useOutsideAlerter(ref: RefObject<HTMLDivElement>, action: () => void) {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                action();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, action]);
}

export interface OutsideAlerterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    action: () => void;
}

const OutsideAlerter = (props: OutsideAlerterProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(wrapperRef, props.action);

    return <div {...props} ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;