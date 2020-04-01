import { shallowMount } from '@vue/test-utils'
import FAccordion from './FAccordion'

const WRAPPER_PROPS = { title: 'Test' }

describe('FAccordion tests', () => {
  let WRAPPER

  beforeEach(
    () => (WRAPPER = shallowMount(FAccordion, { propsData: WRAPPER_PROPS }))
  )

  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })

  describe('Teste de computeds', () => {
    describe('Computed contentClasses', () => {
      test('Computed contentClasses quando hideContent: true', () => {
        WRAPPER.setData({ hideContent: true })
        const expectData = [
          'BasicAccordion__content',
          {
            'BasicAccordion__content--hidden': true
          }
        ]

        expect(WRAPPER.vm.contentClasses).toStrictEqual(expectData)
      })

      test('Computed contentClasses quando hideContent: false', () => {
        WRAPPER.setData({ hideContent: false })
        const expectData = [
          'BasicAccordion__content',
          {
            'BasicAccordion__content--hidden': false
          }
        ]

        expect(WRAPPER.vm.contentClasses).toStrictEqual(expectData)
      })
    })

    describe('Computed iconClasses', () => {
      test('Computed iconClasses quando hideContent: true', () => {
        WRAPPER.setData({ hideContent: true })
        const expectData = [
          'BasicAccordion__header__icon',
          {
            'BasicAccordion__header__icon--rotate': true
          }
        ]

        expect(WRAPPER.vm.iconClasses).toStrictEqual(expectData)
      })

      test('Computed iconClasses quando hideContent: false', () => {
        WRAPPER.setData({ hideContent: false })
        const expectData = [
          'BasicAccordion__header__icon',
          {
            'BasicAccordion__header__icon--rotate': false
          }
        ]

        expect(WRAPPER.vm.iconClasses).toStrictEqual(expectData)
      })
    })
  })

  describe('Teste de métodos', () => {
    test('Método toggleContent', () => {
      expect(WRAPPER.vm.hideContent).toBe(false)
      WRAPPER.vm.toggleContent()
      expect(WRAPPER.vm.hideContent).toBe(true)
    })
  })
})
