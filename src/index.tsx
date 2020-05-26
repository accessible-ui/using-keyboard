import React, {cloneElement, useState} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'
import useEvent from '@react-hook/event'
import clsx from 'clsx'

const __DEV__ =
  typeof process !== 'undefined' && process.env.NODE_ENV !== 'production'

// istanbul ignore next
export const useUsingKeyboard = (defaultUsingKeyboard = false): boolean => {
  const [usingKeyboard, setUsingKeyboard] = useState(defaultUsingKeyboard)
  useEvent(document.body, 'mousedown', () => setUsingKeyboard(false))
  useEvent(document.body, 'keydown', () => setUsingKeyboard(true))
  return usingKeyboard
}

export interface BodyUsingKeyboardProps {
  className?: string
  defaultUsingKeyboard?: boolean
  children?: any
}

export const BodyUsingKeyboard: React.FC<BodyUsingKeyboardProps> = ({
  className = 'using-keyboard',
  defaultUsingKeyboard = false,
  children = null,
}) => {
  const usingKeyboard = useUsingKeyboard(defaultUsingKeyboard)
  useLayoutEffect(() => {
    if (usingKeyboard) document.body.classList.add(className)
    return () => {
      document.body.classList.remove(className)
    }
  }, [usingKeyboard])
  return children
}

export interface UsingKeyboardProps {
  className?: string
  defaultUsingKeyboard?: boolean
  children: React.ReactElement | JSX.Element
}

export const UsingKeyboard: React.FC<UsingKeyboardProps> = ({
  className = 'using-keyboard',
  defaultUsingKeyboard = false,
  children,
}) => {
  return cloneElement(
    children,
    Object.assign({}, children.props, {
      className: clsx(
        children.props.className,
        useUsingKeyboard(defaultUsingKeyboard) && className
      ),
    })
  )
}

// istanbul ignore next
if (__DEV__) {
  BodyUsingKeyboard.displayName = 'BodyUsingKeyboard'
  UsingKeyboard.displayName = 'UsingKeyboard'
}
