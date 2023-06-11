import { FC } from 'react'

interface IButton {
    className: string;
    text: string;
    count?: number;
    onClick?: () => void;
}

const Button: FC<IButton> = ({ className, text, onClick, count }) => {
    return <button onClick={onClick} className={className}>{text && count ? text + '  ' + count : text}</button>
}

export default Button