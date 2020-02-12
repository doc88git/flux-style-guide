import { shallowMount } from '@vue/test-utils'
import FPagination from './FPagination'

const WRAPPER_PROPS = { currentPage: 1, total: 100, perPage: 6, max: 10 }


describe('FPaginantion tests', () => {
  let WRAPPER

  beforeEach(() => WRAPPER = shallowMount(FPagination, { propsData: WRAPPER_PROPS }))

  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  test('Teste da computed que calcula número máximo de páginas', () => {
    expect(WRAPPER.vm.totalPages).toBe(17)

    WRAPPER.setProps({ total: 200 })
    expect(WRAPPER.vm.totalPages).toBe(34)
  })

  test('Teste do valor da computed de lista das páginas', () => {
    expect(WRAPPER.vm.show).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    WRAPPER.setData({ localCurrentPage: 11 })
    expect(WRAPPER.vm.show).toStrictEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

    WRAPPER.setData({ localCurrentPage: 15 })
    expect(WRAPPER.vm.show).toStrictEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17])

    WRAPPER.setData({ localCurrentPage: 18 })
    expect(WRAPPER.vm.show).toStrictEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17])

    WRAPPER.setData({ localCurrentPage: 1 })
    expect(WRAPPER.vm.show).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('Teste da computed checa se a página atual é a primeira', () => {
    expect(WRAPPER.vm.isFirstPage).toBeTruthy()

    WRAPPER.setData({ localCurrentPage: 10 })
    expect(WRAPPER.vm.isFirstPage).toBeFalsy()
  })

  test('Teste da computed checa se a página atual é a última', () => {
    expect(WRAPPER.vm.isLastPage).toBeFalsy()

    WRAPPER.vm.jumpTo('last')
    expect(WRAPPER.vm.isLastPage).toBeTruthy()
  })

  test('Teste do método jumpTo', () => {
    expect(WRAPPER.vm.localCurrentPage).toBe(1)

    WRAPPER.vm.jumpTo('last')
    expect(WRAPPER.vm.localCurrentPage).toBe(17)

    WRAPPER.vm.jumpTo('first')
    expect(WRAPPER.vm.localCurrentPage).toBe(1)
  })

  test('Teste do método setCurrentPage', async () => {
    WRAPPER.vm.setCurrentPage(10)
    expect(WRAPPER.vm.localCurrentPage).toBe(10)

    // Wait util $emit has been handled and check for
    // event emission.
    await WRAPPER.vm.$nextTick()

    expect(WRAPPER.emitted()['update:current_page']).toBeTruthy()
    // The emitted() function returns the event as an Array
    // within an Array, for each event emmited.
    expect(WRAPPER.emitted()['update:current_page'][0][0]).toBe(10)

    WRAPPER.vm.setCurrentPage(0)
    expect(WRAPPER.vm.localCurrentPage).toBe(0)

    await WRAPPER.vm.$nextTick()
    expect(WRAPPER.emitted()['update:current_page']).toBeTruthy()
    expect(WRAPPER.emitted()['update:current_page'][1][0]).toBe(0)
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})