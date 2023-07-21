import * as React from "react"
const Arrow = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={49}
        height={40}
        fill="none"
        {...props}
    >
        <path
            fill="#ECECEC"
            d="M27.542 39.5a1.05 1.05 0 0 1 0-1.481L44.61 20.95H1.047a1.047 1.047 0 1 1 0-2.095H44.61L27.542 1.79A1.049 1.049 0 0 1 29.024.307L47.88 19.163a1.048 1.048 0 0 1 0 1.482L29.024 39.501a1.047 1.047 0 0 1-1.482 0Z"
        />
    </svg>
)
export default Arrow
