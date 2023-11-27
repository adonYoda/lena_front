import React from "react";

type TypographyType = "link" | "secondLink";

interface TypographyProps {
    children: string;
    type: TypographyType;
}

const Typography: React.FC<TypographyProps> = ({ children, type }) => (
    <>{type === "link" && <p className="underline text-link">{children}</p>}</>
);

export default Typography;
