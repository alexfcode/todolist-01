type ButtonType = {
    title: string
    onClick?: () => void
}

export function Button({title, onClick}: ButtonType) {
    return (
        <button onClick={onClick}>{title}</button>
    )
}