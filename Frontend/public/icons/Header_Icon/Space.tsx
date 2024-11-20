
interface propm {
    height: number,
    width: number,
    stroke: string
}

export function Space({ stroke, height, width }: propm) {
    return (
        <svg width={width} height={height} className="p-1" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.24992 13.75C2.99992 14.8 2.58325 17.9167 2.58325 17.9167C2.58325 17.9167 5.69992 17.5 6.74992 16.25C7.34159 15.55 7.33325 14.475 6.67492 13.825C6.35101 13.5158 5.92433 13.3372 5.47677 13.3233C5.02922 13.3095 4.59232 13.4614 4.24992 13.75Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 12.5L8 10C8.44345 8.84954 9.00184 7.74673 9.66667 6.70835C10.6377 5.15584 11.9897 3.87755 13.5942 2.99509C15.1986 2.11262 17.0022 1.65532 18.8333 1.66668C18.8333 3.93335 18.1833 7.91668 13.8333 10.8333C12.7807 11.4989 11.664 12.0573 10.5 12.5Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99992 10H3.83325C3.83325 10 4.29159 7.475 5.49992 6.66666C6.84992 5.76666 9.66659 6.66666 9.66659 6.66666" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 12.5V16.6667C10.5 16.6667 13.025 16.2083 13.8333 15C14.7333 13.65 13.8333 10.8333 13.8333 10.8333" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}