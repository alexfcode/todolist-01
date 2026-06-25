type ButtonType = {
    title: string
}

export function Button({title}: ButtonType) {
    return (
        <button>{title}</button>
    )
}