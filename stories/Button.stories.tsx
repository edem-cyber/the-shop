import { Button } from "../components/ui/button";
// import @storybook/react
import { Meta } from "@storybook/react";

const buttonAddOnPositions: ReadonlyArray<string> = ["start", "end"];
const buttonDisplays: ReadonlyArray<string> = ["block", "inline-block"];
const buttonSizes: ReadonlyArray<string> = ["default", "sm", "lg", "icon"];
const buttonTypes: ReadonlyArray<string> = ["button", "submit", "reset"];
const buttonVariants: ReadonlyArray<string> = [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
];

export default {
    argTypes: {
        addonPosition: {
            control: { type: "select" },
            options: buttonAddOnPositions,
        },
        disabled: {
            control: "boolean",
        },
        display: {
            control: { type: "select" },
            options: buttonDisplays,
        },
        isLoading: {
            control: "boolean",
        },
        label: {
            control: "text",
        },
        size: {
            control: { type: "select" },
            options: buttonSizes,
        },
        type: {
            control: { type: "select" },
            options: buttonTypes,
        },
        variant: {
            control: { type: "select" },
            options: buttonVariants,
        },
    },
    component: Button,
    title: "Button",
} as Meta<typeof Button>;

export const Basic = {
    args: {
        label: "Click Me",
        size: "md",
        variant: "primary",
    },
};