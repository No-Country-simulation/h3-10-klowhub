
interface Start_Propms {
    width: number,
    height: number,
    fill: string,
}

export function Icon_Star({ width, height, fill }: Start_Propms) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99996 1.66675L12.575 6.88341L18.3333 7.72508L14.1666 11.7834L15.15 17.5167L9.99996 14.8084L4.84996 17.5167L5.83329 11.7834L1.66663 7.72508L7.42496 6.88341L9.99996 1.66675Z" fill={fill} />
        </svg>
    )

}

export function Icon_Start_Med() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99996 1.66675L12.575 6.88341L18.3333 7.72508L14.1666 11.7834L15.15 17.5167L9.99996 14.8084L4.84996 17.5167L5.83329 11.7834L1.66663 7.72508L7.42496 6.88341L9.99996 1.66675Z" fill="url(#paint0_linear_4_9666)" />
            <defs>
                <linearGradient id="paint0_linear_4_9666" x1="1.66663" y1="9.59175" x2="12.5001" y2="9.50024" gradientUnits="userSpaceOnUse">
                    <stop offset="0.2" stopColor="#FBBC05" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>

    )
}