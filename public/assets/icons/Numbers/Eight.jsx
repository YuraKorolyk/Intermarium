import * as React from "react"
const Eight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={81}
        height={116}
        fill="none"
        {...props}
    >
        <path
            fill="#286E8D"
            fillRule="evenodd"
            d="m57.454 112.696-.019.006c-4.966 1.62-10.642 2.398-16.98 2.398-7.248 0-13.509-.981-18.674-3.069l-.036-.014-.036-.016c-4.87-2.117-8.957-4.762-12.175-7.98l-.018-.018-.019-.019c-3.063-3.173-5.311-6.684-6.67-10.536l-.005-.012-.004-.013C1.538 89.692.855 86.158.855 82.85c0-3.267.436-6.33 1.343-9.164.882-2.755 2.104-5.27 3.68-7.528a40.242 40.242 0 0 1 5.006-6.13l.03-.03.032-.03a68.363 68.363 0 0 1 3.05-2.713c-3.127-2.852-5.629-5.741-7.443-8.679l-.017-.027-.016-.028c-2.35-3.993-3.415-8.914-3.415-14.571 0-4.413.886-8.668 2.647-12.74l.013-.032.014-.03a32.146 32.146 0 0 1 7.75-10.56c3.3-3.076 7.23-5.464 11.741-7.185C29.958 1.553 35.082.65 40.605.65c6.364 0 11.967.934 16.72 2.916 4.679 1.813 8.63 4.203 11.763 7.224 3.095 2.985 5.36 6.407 6.728 10.26 1.415 3.608 2.14 7.263 2.14 10.95 0 5.371-1.463 10.413-4.345 15.07-1.918 3.145-4.205 5.856-6.863 8.114 4.19 3.16 7.424 6.553 9.575 10.213 2.823 4.534 4.183 9.79 4.183 15.653 0 4.856-.864 9.4-2.628 13.596-1.678 4.131-4.247 7.746-7.662 10.83-3.454 3.12-7.73 5.507-12.744 7.214l-.018.006ZM73.755 66.95c-2.007-3.429-5.168-6.718-9.483-9.867a59.183 59.183 0 0 0-2.667-1.833 28.157 28.157 0 0 0 2.615-1.867c2.655-2.136 4.933-4.763 6.835-7.883 2.6-4.2 3.9-8.7 3.9-13.5 0-3.3-.65-6.6-1.95-9.9-1.2-3.4-3.2-6.45-6-9.15s-6.4-4.9-10.8-6.6c-4.3-1.8-9.5-2.7-15.6-2.7-5.2 0-9.95.85-14.25 2.55-4.2 1.6-7.8 3.8-10.8 6.6-3 2.7-5.35 5.9-7.05 9.6-1.6 3.7-2.4 7.55-2.4 11.55 0 5.3 1 9.65 3 13.05 1.7 2.753 4.122 5.538 7.264 8.356a64.187 64.187 0 0 0 2.337 1.994 66.27 66.27 0 0 0-5.7 4.8c-1.7 1.7-3.25 3.6-4.65 5.7-1.4 2-2.5 4.25-3.3 6.75-.8 2.5-1.2 5.25-1.2 8.25 0 2.9.6 6.1 1.8 9.6 1.2 3.4 3.2 6.55 6 9.45 2.9 2.9 6.65 5.35 11.25 7.35 4.7 1.9 10.55 2.85 17.55 2.85 6.1 0 11.45-.75 16.05-2.25 4.7-1.6 8.6-3.8 11.7-6.6 3.1-2.8 5.4-6.05 6.9-9.75 1.6-3.8 2.4-7.95 2.4-12.45 0-5.4-1.25-10.1-3.75-14.1ZM51.364 77.31l-.03-.054c-.77-1.386-1.862-2.612-3.334-3.675l-.043-.031-.042-.033c-1.543-1.2-3.438-2.269-5.723-3.183l-.068-.027-.067-.03a65.37 65.37 0 0 0-5.961-2.37 27.415 27.415 0 0 0-5.157 5.676c-1.514 2.23-2.332 4.972-2.332 8.366 0 .768.156 1.75.555 2.978.434.973 1.09 1.925 2.016 2.85.873.874 2.075 1.676 3.693 2.357 1.436.605 3.318.965 5.736.965 4.79 0 7.631-1.157 9.235-2.828 1.933-2.013 2.764-4.09 2.764-6.322 0-1.8-.423-3.299-1.21-4.586l-.032-.053ZM26.355 86c-.5-1.5-.75-2.85-.75-4.05 0-3.9.95-7.25 2.85-10.05 1.9-2.8 4.25-5.25 7.05-7.35 2.8.9 5.4 1.9 7.8 3 2.5 1 4.65 2.2 6.45 3.6 1.8 1.3 3.2 2.85 4.2 4.65 1.1 1.8 1.65 3.85 1.65 6.15 0 3.1-1.2 5.9-3.6 8.4-2.4 2.5-6.2 3.75-11.4 3.75-2.7 0-5-.4-6.9-1.2-1.9-.8-3.45-1.8-4.65-3-1.2-1.2-2.1-2.5-2.7-3.9Zm23.426-55.83-.043-.138c-.236-.769-.7-1.557-1.504-2.36l-.05-.051-.048-.053c-.671-.738-1.603-1.41-2.883-1.97l-.07-.03-.07-.035c-1.08-.54-2.544-.883-4.508-.883-1.89 0-3.361.301-4.497.798l-.998-2.28.998 2.28c-1.243.544-2.24 1.257-3.037 2.124-.765.843-1.308 1.726-1.665 2.655-.39 1.01-.55 1.895-.55 2.673 0 2.405.84 4.74 2.747 7.07 1.742 2.02 4.787 4.003 9.463 5.793 2.297-1.605 4.015-3.349 5.229-5.205 1.316-2.013 2.06-4.61 2.06-7.958 0-.639-.144-1.397-.519-2.296l-.055-.134ZM43.456 49.1c-5.7-2-9.75-4.4-12.15-7.2-2.3-2.8-3.45-5.8-3.45-9 0-1.2.25-2.45.75-3.75.5-1.3 1.25-2.5 2.25-3.6 1.1-1.2 2.45-2.15 4.05-2.85 1.6-.7 3.5-1.05 5.7-1.05 2.3 0 4.25.4 5.85 1.2 1.6.7 2.9 1.6 3.9 2.7 1.1 1.1 1.85 2.3 2.25 3.6.5 1.2.75 2.35.75 3.45 0 3.8-.85 7-2.55 9.6-1.7 2.6-4.15 4.9-7.35 6.9Z"
            clipRule="evenodd"
        />
    </svg>
)
export default Eight
