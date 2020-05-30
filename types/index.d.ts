import React from 'react'
export declare const useUsingKeyboard: (
  defaultUsingKeyboard?: boolean
) => boolean
export interface BodyUsingKeyboardProps {
  className?: string
  defaultUsingKeyboard?: boolean
  children?: any
}
export declare const BodyUsingKeyboard: React.FC<BodyUsingKeyboardProps>
export interface UsingKeyboardProps {
  className?: string
  defaultUsingKeyboard?: boolean
  children: React.ReactElement | JSX.Element
}
export declare const UsingKeyboard: React.FC<UsingKeyboardProps>
