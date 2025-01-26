export const EllipseList = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
        >
            <circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_linear_393_5688)" />
            <defs>
                <linearGradient
                    id="paint0_linear_393_5688"
                    x1="7.5"
                    y1="0"
                    x2="7.5"
                    y2="15"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#33B7EF" />
                    <stop offset="1" stopColor="#6AE8D1" />
                </linearGradient>
            </defs>
        </svg>
    );
};
