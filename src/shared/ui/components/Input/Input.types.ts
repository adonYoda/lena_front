import { RefObject } from "react";

type InputValueType =
    | "string"
    | "phone"
    | "mail"
    | "password"
    | "code"
    | "number";

interface InputType {
    value: string;
    name: string;
    error?: HTMLElement | string;
    label?: string;
    autofocus?: boolean;
    reference?: RefObject<HTMLInputElement>;
    valueVisible?: boolean;
    setValueVisible?: () => void;
    setValue: (value: string) => void;
    type: InputValueType;
    maxLength?: number;
    placeholder?: string;
    disabled?: boolean;
    minLength?: number;
    afterLink?: HTMLElement | string;
    afterOnClick?: () => void;
    valueValidationFunction?: (value?: string) => boolean;
    visibleSuccess?: boolean;
}

export type { InputValueType, InputType };
