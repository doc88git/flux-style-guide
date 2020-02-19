import { shallowMount } from '@vue/test-utils'
import FButtonGroup from './FButtonGroup'

const tabOptions = [
  { label: 'Tab 1', value: 1 },
  { label: 'Tab 2', value: 2 },
  { label: 'Tab 3', value: 3 }
] 

const WRAPPER_PROPS = {
  options: tabOptions,
  size: 'small',
  default: 2
}


describe('FButton Tests', () => {
  let WRAPPER

  beforeEach(() => WRAPPER = shallowMount(FButtonGroup, { propsData: WRAPPER_PROPS }))

  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })

  describe('Teste de computeds', () => {
    describe('Teste da computed isDefault', () => {
      test('Computed isDefault quanto outline: true', () => {
        WRAPPER.setProps({ outline: true })
        expect(WRAPPER.vm.isDefault).toBe(false)
      })

      test('Computed isDefault quando tab: true', () => {
        WRAPPER.setProps({ tab: true })
        expect(WRAPPER.vm.isDefault).toBe(false)
      })

      test('Computed isDefault quando outline: true e tab: false', () => {
        WRAPPER.setProps({ outline: true , tab: false })
        expect(WRAPPER.vm.isDefault).toBe(false)
      })

      test('Computed isDefault quando outline: true e tab: true', () => {
        WRAPPER.setProps({ outline: true , tab: true })
        expect(WRAPPER.vm.isDefault).toBe(false)
      })

      test('Computed isDefault quando outline false e tab: false', () => {
        WRAPPER.setProps({ outline: false, tab: false })
        expect(WRAPPER.vm.isDefault).toBe(true)
      })
    })

    describe('Teste da computed classes', () => {
      test('Computed classes quando tab: false', () => {
        const objExpect = { 'f-button-group__tab': true }
        WRAPPER.setProps({ tab: true })
        expect(WRAPPER.vm.classes).toStrictEqual(objExpect)
      })

      test('Computed classes quando tab: true', () => {
        const objExpect = { 'f-button-group__tab': false }
        WRAPPER.setProps({ tab: false })
        expect(WRAPPER.vm.classes).toStrictEqual(objExpect)
      })
    })

    describe('Teste da computed btnOptions', () => {
      test('Computed btnOptions quando tab: true', () => {
        WRAPPER.setProps({ tab: true })
        expect(WRAPPER.vm.btnOptions).toEqual(expect.objectContaining({ flat: true }))
      })

      test('Computed btnOptions quando size: "small"', () => {
        const objExpect = { small: true, bigger: false }
        WRAPPER.setProps({ size: 'small' })
        expect(WRAPPER.vm.btnOptions).toEqual(expect.objectContaining(objExpect))
      })

      test('Computed btnOptions quando size: "bigger"', () => {
        const objExpect = { small: false, bigger: true }
        WRAPPER.setProps({ size: 'bigger' })
        expect(WRAPPER.vm.btnOptions).toEqual(expect.objectContaining(objExpect))
      })
    })
  })

  describe('Teste de métodos', () => {
    test('Teste do método change', async () => {
      WRAPPER.vm.change(2)
      expect(WRAPPER.vm.selected).toBe(2)

      await WRAPPER.vm.$nextTick()
      expect(WRAPPER.emitted()['change'][0][0]).toBe(2)
    })

    describe.skip('Teste do método getAttrs', () => {
      test('getAttrs quando prop tab: true', () => {
        const objExpect = { outline: false }
        WRAPPER.setProps({ tab: true })
        expect(WRAPPER.vm.getAttrs(0)).toBe(expect.objectContaining(objExpect))
      })

      test('getAttrs quando prop outline: true e id === selected', () => {
        const objExpect = { outline: false }
        WRAPPER.setProps({ outline: true, tab: false })

        expect(WRAPPER.vm.getAttrs(2)).toBe(expect.objectContaining(objExpect))
      })

      test('getAttrs quando prop outline: true e id !== selected', () => {
        const objExpect = { outline: true }
        WRAPPER.setProps({ outline: true, tab: false })

        expect(WRAPPER.vm.getAttrs(1)).toBe(expect.objectContaining(objExpect))
      })


      test('getAttrs quando isDefault: true e id === selected', () => {
        const objExpect = { outline: true }
        WRAPPER.setProps({ outline: false, tab: false })

        expect(WRAPPER.vm.getAttrs(2)).toBe(expect.objectContaining(objExpect))
      })

      test('getAttrs quando isDefault: true e id !== selected', () => {
        const objExpect = { outline: false }
        WRAPPER.setProps({ outline: false, tab: false })

        expect(WRAPPER.vm.getAttrs(3)).toBe(expect.objectContaining(objExpect))
      })
    })

    describe('Teste do método isSelected', () => {
      test('Método isSelected com argumento "2" e data selected: 2', () => {
        expect(WRAPPER.vm.isSelected(2)).toBe(true)
      })

      test('Método isSelected com argumento "1" e data selected: 2', () => {
        expect(WRAPPER.vm.isSelected(1)).toBe(false)
      })
    })
  })

  describe('Teste do método mounted', () => {
    test('Método mounted quando prop default: 1', () => {
      const change = jest.fn()
      const propsData = { ...WRAPPER_PROPS, default: 1 }
      const testWrapper = shallowMount(FButtonGroup, {
        methods: { change },
        propsData
      })

      expect(change).toHaveBeenCalledWith(1)
    })

    test('Método mounted quando prop default: 1', () => {
      const change = jest.fn()
      const propsData = { ...WRAPPER_PROPS, default: null }
      const testWrapper = shallowMount(FButtonGroup, {
        methods: { change },
        propsData
      })

      expect(change).not.toHaveBeenCalled()
    })
  })
})