import * as React from 'react';
export declare const useUsingKeyboard: (defaultUsingKeyboard?: boolean) => boolean;
export interface BodyUsingKeyboardProps {
    className?: string;
    defaultUsingKeyboard?: boolean;
    children?: any;
}
export declare const BodyUsingKeyboard: {
    ({ className, defaultUsingKeyboard, children, }: BodyUsingKeyboardProps): any;
    displayName: string;
};
export interface UsingKeyboardProps {
    className?: string;
    defaultUsingKeyboard?: boolean;
    children: React.ReactElement | JSX.Element;
}
export declare const UsingKeyboard: {
    ({ className, defaultUsingKeyboard, children, }: UsingKeyboardProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    displayName: string;
};
