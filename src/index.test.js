import React from 'react'
import {render} from '@testing-library/react'
import UsingKeyboard from './index'

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
        <span className="foo">Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('without class name appended')

  expect(
    render(
      <UsingKeyboard defaultUsingKeyboard>
        <span className="foo">Foo</span>
      </UsingKeyboard>
    ).asFragment()
  ).toMatchSnapshot('with class name appended')
})
