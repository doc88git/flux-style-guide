import { shallowMount } from '@vue/test-utils'
import FButton from './FButton'

const WRAPPER_PROPS = { label: 'Button' }
const WRAPPER_SLOTS = { slots: { default: 'Teste' } }

describe('FButton Tests', () => {
  let WRAPPER

  beforeEach(() => WRAPPER = shallowMount(FButton, { propsData: WRAPPER_PROPS }))

  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })

  describe('Teste de computeds', () => {
    describe('Testes da computed btnInnerCenter', () => {
      test('Computed btnCenter quanto label: "Button"', () => {
        expect(WRAPPER.vm.btnInnerCenter).toBe('')
      })

      test('Computed btnCenter quanto $slots.default: "Teste"', () => {
        const wrapperWithSlot = shallowMount(FButton, WRAPPER_SLOTS)
        expect(wrapperWithSlot.vm.btnInnerCenter).toBe('')
      })

      test('Computed btnCenter quanto label: ""', () => {
        WRAPPER.setProps({ label: '' })
        expect(WRAPPER.vm.btnInnerCenter).toStrictEqual(['btn__inner--center'])
      })
    })

    describe('Testes da computed btnCenter', () => {
      test('Computed btnCenter quanto label: "Button"', () => {
        expect(WRAPPER.vm.btnCenter).toBe('')
      })

      test('Computed btnCenter quanto $slots.default: "Teste"', () => {
        const wrapperWithSlot = shallowMount(FButton, WRAPPER_SLOTS)
        expect(wrapperWithSlot.vm.btnCenter).toBe('')
      })

      test('Computed btnCenter quanto label: ""', () => {
        WRAPPER.setProps({ label: '' })
        expect(WRAPPER.vm.btnCenter).toStrictEqual(['btn__inner__icon--center'])
      })
    })

    describe('Testes da computed hasDefaultSlot', () => {
      test('Computed hasDefaultSlot quando $slots.default: null', () => {
        expect(WRAPPER.vm.hasDefaultSlot).toBe(false)
      })

      test('Computed hasDefaultSlot quando $slots.default: "Teste"', () => {
        expect(WRAPPER.vm.hasDefaultSlot).toBe(false)
      })
    })

    describe('Testes da computed hasContent', () => {
      test('Computed hasContent quando label: "Button', () => {
        expect(WRAPPER.vm.hasContent).toBe(true)
      })

      test('Computed hasContent quando label: "" e $slots.default: null', () => {
        WRAPPER.setProps({ label: '' })
        expect(WRAPPER.vm.hasContent).toBe(false)
      })

      test('Computed hasContent quando label: "" e $slots.default: "Teste"', () => {
        const wrapperWithSlot = shallowMount(FButton, WRAPPER_SLOTS)
        expect(wrapperWithSlot.vm.hasContent).toBe(true)
      })
    })

    describe('Testes da computed componentType', () => {
      test('Computed componentType quando link: true', () => {
        WRAPPER.setProps({ link: true })
        expect(WRAPPER.vm.componentType).toBe('a')
      })

      test('Computed componentType quando link: false', () => {
        WRAPPER.setProps({ link: false })
        expect(WRAPPER.vm.componentType).toBe('button')
      })
    })

    describe('Testes da computed hasName', () => {
      test('Computed hasName quando label: "Button"', () => {
        expect(WRAPPER.vm.hasName).toBe(false)
      })

      test('Computed hasName quando label: ""', () => {
        WRAPPER.setProps({ label: '' })
        expect(WRAPPER.vm.hasName).toBe(true)
      })
    })

    describe('Testes da computed hasBg', () => {
      test('Computed hasBg quanto flat: false e outline: false', () => {
        WRAPPER.setProps({ flat: false, outline: false })
        expect(WRAPPER.vm.hasBg).toBe(true)
      })

      test('Computed hasBg quanto flat: true e outline: false', () => {
        WRAPPER.setProps({ flat: true, outline: false })
        expect(WRAPPER.vm.hasBg).toBe(false)
      })

      test('Computed hasBg quanto flat: false e outline: true', () => {
        WRAPPER.setProps({ flat: true, outline: false })
        expect(WRAPPER.vm.hasBg).toBe(false)
      })

      test('Computed hasBg quanto flat: false e outline: false', () => {
        WRAPPER.setProps({ flat: true, outline: false })
        expect(WRAPPER.vm.hasBg).toBe(false)
      })
    })

    describe('Testes da computed btnColors', () => {
      test('Computed btnColors quando textColor: "black"', () => {
        const objContains = { ['color--text--black']: true }
        WRAPPER.setProps({ textColor: 'black' })
        expect(WRAPPER.vm.btnColors).toEqual(expect.objectContaining(objContains))
      })

      test('Computed btnColors quando color: "secondary" e flat: true', () => {
        const objContains = { ['color--flat--secondary']: true }
        WRAPPER.setProps({ color: 'secondary', flat: true })
        expect(WRAPPER.vm.btnColors).toEqual(expect.objectContaining(objContains))
      })

      test('Computed btnColors quando color: "secondary" e outline: true', () => {
        const objContains = { ['color--outline--secondary']: true }
        WRAPPER.setProps({ color: 'secondary', outline: true })
        expect(WRAPPER.vm.btnColors).toEqual(expect.objectContaining(objContains))
      })

      test('Computed btnColors quando color: "secondary", outline: false e flat: false', () => {
        const objContains = { ['color--default--secondary']: true }
        WRAPPER.setProps({ color: 'secondary' })
        expect(WRAPPER.vm.btnColors).toEqual(expect.objectContaining(objContains))
      })
    })

    describe('Testes da computed btnSize', () => {
      test('Computed btnSize quando prop small: true', () => {
        const objContains = { ['btn--small']: true }

        WRAPPER.setProps({ small: true })
        expect(WRAPPER.vm.btnSize).toEqual(expect.objectContaining(objContains))
      })

      test('Computed btnSize quando prop bigger: true', () => {
        const objContains = { ['btn--bigger']: true }

        WRAPPER.setProps({ bigger: true })
        expect(WRAPPER.vm.btnSize).toEqual(expect.objectContaining(objContains))
      })
    })

    describe('Testes da computed btnBox', () => {
      test('btnStyle com prop radius: false', () => {
        const objContains = { ['btn--noradius']: true }

        WRAPPER.setProps({ radius: false})
        expect(WRAPPER.vm.btnBox).toEqual(expect.objectContaining(objContains))
      })

      test('btnStyle com prop dense: true', () => {
        const objContains = { ['btn--dense']: true }

        WRAPPER.setProps({ dense: true })
        expect(WRAPPER.vm.btnBox).toEqual(expect.objectContaining(objContains))
      })

      test('btnStyle com prop outline: true', () => {
        const objContains = { ['btn--outline']: true }

        WRAPPER.setProps({ outline: true })
        expect(WRAPPER.vm.btnBox).toEqual(expect.objectContaining(objContains))
      })

      test('btnStyle com prop flat: true', () => {
        const objContains = { ['btn--flat']: true }

        WRAPPER.setProps({ flat: true })
        expect(WRAPPER.vm.btnBox).toEqual(expect.objectContaining(objContains))
      })

      test('btnStyle com prop flat: false e outline: false', () => {
        const objContains = { ['btn--default']: true }

        WRAPPER.setProps({ outline: false, flat: false })
        expect(WRAPPER.vm.btnBox).toEqual(expect.objectContaining(objContains))
      })
    })
  })
})