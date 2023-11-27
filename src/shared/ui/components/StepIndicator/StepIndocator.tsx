import React from "react";

type StepIndicatorProps = {
    stepCount: number;
    currentStep: number;
    secondary?: boolean;
};

const StepIndicator = React.memo<StepIndicatorProps>(
    ({ stepCount, currentStep, secondary = false }) => {
        function detectBg(value: boolean) {
            if (value) {
                return secondary ? "#3A55F8" : "white";
            }
            return secondary ? "#00103D24" : "#FFFFFFA0";
        }

        return (
            <div className="relative flex gap-[15px]">
                {new Array(stepCount).fill(1).map((el, i) => (
                    <div
                        key={el}
                        style={{
                            width: i === currentStep ? "32px" : "12px",
                            backgroundColor: detectBg(i === currentStep),
                        }}
                        className="h-[12px] rounded-[12px] ease-in duration-[200ms]"
                    />
                ))}
            </div>
        );
    }
);

export default StepIndicator;
