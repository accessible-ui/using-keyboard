import * as React from 'react'
import {render} from '@testing-library/react'
import {UsingKeyboard, BodyUsingKeyboard} from './index'

test('UsingKeyboard -> adds classname', () => {
  expect(
    render(
      <UsingKeyboard defaultUsingKeyboard={false}>
        <span>Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('without class name')

  expect(
    render(
      <UsingKeyboard defaultUsingKeyboard>
        <span>Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('with class name')

  expect(
    render(
      <UsingKeyboard defaultUsingKeyboard={false}>
        <span className='foo'>Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('without class name appended')

  expect(
    render(
      <UsingKeyboard defaultUsingKeyboard>
        <span className='foo'>Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('with class name appended')

  expect(
    render(
      <UsingKeyboard className='keyboarding' defaultUsingKeyboard>
        <span>Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('with custom class')
})

test('<BodyUsingKeybooard> -> adds classname', () => {
  expect(
    render(<BodyUsingKeyboard defaultUsingKeyboard={false} />).baseElement
  ).toMatchSnapshot('without class name')

  expect(
    render(<BodyUsingKeyboard defaultUsingKeyboard />).baseElement
  ).toMatchSnapshot('with class name')

  document.body.removeAttribute('class')
  document.body.setAttribute('class', 'foo')

  expect(
    render(<BodyUsingKeyboard defaultUsingKeyboard={false} />).baseElement
  ).toMatchSnapshot('without class name appended')

  expect(
    render(<BodyUsingKeyboard defaultUsingKeyboard />).baseElement
  ).toMatchSnapshot('with class name appended')

  document.body.removeAttribute('class')

  expect(
    render(<BodyUsingKeyboard defaultUsingKeyboard className='keyboarding' />)
      .baseElement
  ).toMatchSnapshot('with custom class')

  document.body.removeAttribute('class')

  expect(
    render(<BodyUsingKeyboard>Foo</BodyUsingKeyboard>).baseElement
  ).toMatchSnapshot('with children')
})
