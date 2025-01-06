export const Close = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M28 28L4 4M28 4L4 28"
                stroke="#0D3352"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};
