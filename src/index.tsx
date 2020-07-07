import * as React from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'
import useEvent from '@react-hook/event'
import clsx from 'clsx'

// istanbul ignore next
export const useUsingKeyboard = (defaultUsingKeyboard = false): boolean => {
  const [usingKeyboard, setUsingKeyboard] = React.useState(defaultUsingKeyboard)
  useEvent(document.body, 'mousedown', () => setUsingKeyboard(false))
  useEvent(document.body, 'keydown', () => setUsingKeyboard(true))
  return usingKeyboard
}

export interface BodyUsingKeyboardProps {
  className?: string
  defaultUsingKeyboard?: boolean
  children?: any
}

export const BodyUsingKeyboard = ({
  className = 'using-keyboard',
  defaultUsingKeyboard = false,
  children = null,
}: BodyUsingKeyboardProps) => {
  const usingKeyboard = useUsingKeyboard(defaultUsingKeyboard)
  useLayoutEffect(() => {
    if (usingKeyboard) document.body.classList.add(className)
    return () => {
      document.body.classList.remove(className)
    }
  }, [usingKeyboard, className])
  return children
}

export interface UsingKeyboardProps {
  className?: string
  defaultUsingKeyboard?: boolean
  children: React.ReactElement | JSX.Element
}

export const UsingKeyboard = ({
  className = 'using-keyboard',
  defaultUsingKeyboard = false,
  children,
}: UsingKeyboardProps) =>
  React.cloneElement(
    children,
    Object.assign({}, children.props, {
      className: clsx(
        children.props.className,
        useUsingKeyboard(defaultUsingKeyboard) && className
      ),
    })
  )

// istanbul ignore next
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  BodyUsingKeyboard.displayName = 'BodyUsingKeyboard'
  UsingKeyboard.displayName = 'UsingKeyboard'
}
