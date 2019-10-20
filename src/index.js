import {cloneElement, useState} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'
import classnames from 'classnames'

export const useUsingKeyboard = (defaultUsingKeyboard = false) => {
  const [usingKeyboard, setUsingKeyboard] = useState(defaultUsingKeyboard)

  useLayoutEffect(() => {
    const canFocus = () => setUsingKeyboard(true)
    const cantFocus = () => setUsingKeyboard(false)
    document.body.addEventListener('mousedown', cantFocus)
    document.body.addEventListener('keydown', canFocus)

    return () => {
      document.body.removeEventListener('mousedown', cantFocus)
      document.body.removeEventListener('keydown', canFocus)
    }
  }, [])

  return usingKeyboard
}

export const BodyUsingKeyboard = ({
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

const UsingKeyboard = ({
  className = 'using-keyboard',
  defaultUsingKeyboard = false,
  children = null,
}) => {
  const usingKeyboard = useUsingKeyboard(defaultUsingKeyboard)
  return cloneElement(
    children,
    Object.assign({}, children.props, {
      className: classnames(
        children.props.className,
        usingKeyboard && className
      ),
    })
  )
}

if (__DEV__) {
  const PropTypes = require('prop-types')
  BodyUsingKeyboard.propTypes = {
    defaultUsingKeyboard: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element,
  }
  UsingKeyboard.propTypes = {
    defaultUsingKeyboard: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
  }
}

export default UsingKeyboard
