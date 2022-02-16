import { GetProps, Variable, VariantSpreadExtras } from '@tamagui/core';
export declare const getSize: (sizeX?: number, sizeY?: number) => (val: any, { tokens }: VariantSpreadExtras<any>) => {
    paddingHorizontal: number;
    paddingVertical: number;
    borderRadius: string | number | Variable;
};
export declare const getButtonSize: (val: any, { tokens }: VariantSpreadExtras<any>) => {
    paddingHorizontal: number;
    paddingVertical: number;
    borderRadius: string | number | Variable;
};
export declare const SizableFrame: import("@tamagui/core").StaticComponent<Omit<Omit<import("@tamagui/core").StackProps, "elevation" | "fullscreen"> & {
    fullscreen?: boolean | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
} & import("@tamagui/core").MediaProps<{
    fullscreen?: boolean | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
}> & import("@tamagui/core").PseudoProps<{
    fullscreen?: boolean | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
}>, "size" | "transparent" | "hoverable" | "pressable" | "bordered" | "circular" | "disabled" | "active" | "chromeless"> & {
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    bordered?: boolean | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
} & import("@tamagui/core").MediaProps<{
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    bordered?: boolean | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}> & import("@tamagui/core").PseudoProps<{
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    bordered?: boolean | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}>, void, import("@tamagui/core").StaticConfigParsed, any>;
export declare type SizableFrameProps = GetProps<typeof SizableFrame>;
//# sourceMappingURL=SizableFrame.d.ts.map