import { shallowMount } from '@vue/test-utils'
import FPagination from './FPagination'

const WRAPPER_PROPS = { currentPage: 1, total: 100, perPage: 6, max: 10 }

describe('FPaginantion tests', () => {
  let WRAPPER

  beforeEach(
    () => (WRAPPER = shallowMount(FPagination, { propsData: WRAPPER_PROPS }))
  )

  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  describe('Teste de computeds', () => {
    describe('Computed totalPages', () => {
      test('totalPages quando a prop total: 100 e perPage: 6', () => {
        expect(WRAPPER.vm.totalPages).toBe(17)
      })

      test('totalPages quando a prop total: 200 e perPage: 6', () => {
        WRAPPER.setProps({ total: 200 })
        expect(WRAPPER.vm.totalPages).toBe(34)
      })

      test('totalPages quando a prop total: 50 e perPage: 2', () => {
        WRAPPER.setProps({ total: 50, perPage: 2 })
        expect(WRAPPER.vm.totalPages).toBe(25)
      })
    })

    describe('Computed show', () => {
      test('show quando currentPage: 1', () => {
        expect(WRAPPER.vm.show).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      })

      test('show quando currentPage: 11', () => {
        WRAPPER.setProps({ currentPage: 11 })
        expect(WRAPPER.vm.show).toStrictEqual([
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ])
      })

      test('show quando currentPage: 15', () => {
        WRAPPER.setProps({ currentPage: 15 })
        expect(WRAPPER.vm.show).toStrictEqual([
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17
        ])
      })

      test('show quando currentPage: 18', () => {
        WRAPPER.setProps({ currentPage: 18 })
        expect(WRAPPER.vm.show).toStrictEqual([
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17
        ])
      })
    })

    describe('Computed isFirstPage', () => {
      test('isFirstPage quando currentPage: 1', () => {
        expect(WRAPPER.vm.isFirstPage).toBeTruthy()
      })

      test('isFirstPage quando currentPage: 10', () => {
        WRAPPER.setProps({ currentPage: 10 })
        expect(WRAPPER.vm.isFirstPage).toBeFalsy()
      })
    })

    describe('Computed isLastPage', () => {
      test('isLastPage quando currentPage: 1', () => {
        expect(WRAPPER.vm.isLastPage).toBeFalsy()
      })

      test('isLastPage quando currentPage: 17', () => {
        WRAPPER.setProps({ currentPage: 17 })
        expect(WRAPPER.vm.isLastPage).toBeTruthy()
      })
    })
  })

  describe('Teste de métodos', () => {
    describe('Teste do método jumpTo', () => {
      test('Pular para próxima página', () => {
        const setCurrentPage = jest.fn()
        WRAPPER.setMethods({ setCurrentPage })

        WRAPPER.vm.jumpTo('next')
        expect(setCurrentPage).toHaveBeenCalledWith(2)
      })

      test('Pular para página anterior', () => {
        const setCurrentPage = jest.fn()
        WRAPPER.setMethods({ setCurrentPage })
        WRAPPER.setProps({ currentPage: 10 })

        WRAPPER.vm.jumpTo('prev')
        expect(setCurrentPage).toHaveBeenCalledWith(9)
      })

      test('Pular para ultima página', () => {
        const setCurrentPage = jest.fn()
        WRAPPER.setMethods({ setCurrentPage })

        WRAPPER.vm.jumpTo('last')
        expect(setCurrentPage).toHaveBeenCalledWith(17)
      })

      test('Pular para primeira página', () => {
        const setCurrentPage = jest.fn()
        WRAPPER.setMethods({ setCurrentPage })

        WRAPPER.vm.jumpTo('first')
        expect(setCurrentPage).toHaveBeenCalledWith(1)
      })
    })

    describe('Teste do método setCurrentPage', () => {
      test('setCurrentPage com argumento 10 e emissão do evento update:current_page', async () => {
        WRAPPER.vm.setCurrentPage(10)

        // Wait util $emit has been handled and check for
        // event emission.
        await WRAPPER.vm.$nextTick()

        // The emitted() function returns the event as an Array
        // within an Array, for each event emmited.
        expect(WRAPPER.emitted()['update:current_page'][0][0]).toBe(10)
      })

      test('setCurrentPage com argumento 0 e emissão do evento update:current_page', async () => {
        WRAPPER.vm.setCurrentPage(0)
        await WRAPPER.vm.$nextTick()
        expect(WRAPPER.emitted()['update:current_page'][0][0]).toBe(0)
      })
    })
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})
