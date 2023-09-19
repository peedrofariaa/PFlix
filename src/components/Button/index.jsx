import { RedButton, WhiteButton } from "./style"


export const Button = ({ children, red, ...props }) => {
    return (
        <> {red ? (<RedButton {...props}>{children}</RedButton>)
            :
            (<WhiteButton {...props}>{children}</WhiteButton>)}
        </>
    )
}