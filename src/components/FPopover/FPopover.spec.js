import { shallowMount } from '@vue/test-utils'
import FPopover from './FPopover'

const WRAPPER = shallowMount(FPopover)

describe('Component tests', () => {
  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})
