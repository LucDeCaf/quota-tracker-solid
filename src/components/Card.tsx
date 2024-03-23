import { Component, ParentComponent } from "solid-js";
import { twMerge } from "tailwind-merge";

const Card: ParentComponent<{ class?: string }> = (props) => {
    return (
        <div
            class={twMerge(
                "bg-white shadow-lg rounded-md",
                props.class
            )}
        >
            {props.children}
        </div>
    );
};

const CardHeading: Component<{ children?: string }> = (props) => {
    return (
        <div class="rounded-t-md p-4 font-medium tracking-wide text-gray-600 bg-gray-100 border-b border-b-gray-300">
            {props.children}
        </div>
    );
};

export { Card, CardHeading };
