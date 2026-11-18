const DEFAULT_LINES = ["Your project.", "Your dimensions.", "Our mill."];

/**
 * Large, lightweight hero heading with an optional gold accent line.
 * Pass one string per line and choose which line receives the accent.
 */
export default function HeroHeadline({
    lines = DEFAULT_LINES,
    highlightLine = lines.length - 1,
    as: Heading = "h1",
    className = "",
}) {
    return (
        <Heading
            className={`max-w-[900px] text-[clamp(3rem,5.5vw,6rem)] font-normal leading-[0.98] tracking-[-0.065em] text-[#F4F2E9] ${className}`}
        >
            {lines.map((line, index) => (
                <span
                    key={`${index}-${typeof line === "string" ? line : "line"}`}
                    className={`block ${index === highlightLine ? "text-[#EEBF21]" : ""}`}
                >
                    {line}
                </span>
            ))}
        </Heading>
    );
}
