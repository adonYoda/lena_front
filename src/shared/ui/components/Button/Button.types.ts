/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
    children: string | any;
    outlined?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    additionalBefore?: any;
    additionalAfter?: any;
    secondary?: boolean;
    submit?: boolean;
    activeAwaiting?: boolean;
    additionalClassName?: string;
    isAwaiting?: boolean;
}
