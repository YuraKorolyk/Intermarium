import * as React from "react"
const Instagram = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={47}
        height={47}
        fill="none"
        {...props}
    >
        <path
            fill="#ECECEC"
            d="M23.384 18.2a5.193 5.193 0 0 0-5.183 5.184 5.193 5.193 0 0 0 5.183 5.183 5.193 5.193 0 0 0 5.183-5.183 5.193 5.193 0 0 0-5.183-5.183Z"
        />
        <path
            fill="#ECECEC"
            d="M30.349 10.67h-13.93c-3.158 0-5.75 2.57-5.75 5.75v13.928c0 3.159 2.572 5.75 5.75 5.75h13.93c3.158 0 5.75-2.571 5.75-5.75V16.42c-.02-3.178-2.592-5.75-5.75-5.75Zm-6.965 20.509a7.82 7.82 0 0 1-7.815-7.815 7.82 7.82 0 0 1 7.815-7.815 7.82 7.82 0 0 1 7.815 7.815c-.02 4.312-3.523 7.814-7.815 7.814Zm8.362-14.314a1.892 1.892 0 0 1-1.883-1.883c0-1.032.85-1.883 1.883-1.883 1.032 0 1.882.85 1.882 1.883 0 1.053-.83 1.883-1.882 1.883Z"
        />
        <mask
            id="a"
            width={47}
            height={47}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M0 0h46.768v46.768H0V0Z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#ECECEC"
                d="M23.384 0C10.467 0 0 10.467 0 23.384 0 36.3 10.467 46.768 23.384 46.768S46.768 36.3 46.768 23.384C46.748 10.467 36.28 0 23.384 0ZM38.71 30.349c0 4.616-3.766 8.381-8.382 8.381H16.42c-4.615 0-8.381-3.765-8.381-8.381v-13.93c0-4.616 3.766-8.381 8.381-8.381h13.93c4.616 0 8.381 3.765 8.381 8.381v13.93h-.02Z"
            />
        </g>
    </svg>
)
export default Instagram
