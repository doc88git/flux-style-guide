import { shallowMount } from '@vue/test-utils'
import FTag from './FTag'

const WRAPPER_PROPS = {
  bgColor: 'white',
  lineColor: '#C1C1C1',
  legend: 'Empresa',
  icon: 'dashboard',
  iconColor: 'purple',
  text: 'Flux Services',
  textColor: '#7F7F7F'
}

describe('FTag tests', () => {
  let WRAPPER

  beforeEach(() => (WRAPPER = shallowMount(FTag, { propsData: WRAPPER_PROPS })))

  test('Componente existe', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })

  describe('Teste de computeds', () => {
    describe('Teste da computed styleLegend', () => {
      test('styleLegend durante evento mouseOut', () => {
        const fTagLegend = WRAPPER.find('.FTag__legend')
        const styleExpect = 'background-color: white; visibility: hidden;'

        expect(fTagLegend.attributes('style')).toEqual(styleExpect)
      })

      test('styleLegend durante evento mouseOver', async () => {
        const fTagFieldset = WRAPPER.find('.FTag__fieldset')
        const fTagLegend = WRAPPER.find('.FTag__legend')
        const styleExpect = 'background-color: white; visibility: visible;'

        fTagFieldset.trigger('mouseover')
        await WRAPPER.vm.$nextTick()

        expect(fTagLegend.attributes('style')).toEqual(styleExpect)
      })
    })

    test('Teste da computed styleLineColor', () => {
      const computedExpect = { borderColor: '#C1C1C1', minWidth: '10px' }
      expect(WRAPPER.vm.styleLineColor).toEqual(computedExpect)
    })

    test('Teste da computed styleTextColor', () => {
      expect(WRAPPER.vm.styleTextColor).toBe('color: #7F7F7F')
    })

    test('Teste da computed styleBeforeColor', () => {
      expect(WRAPPER.vm.styleBeforeColor).toBe(':before: #C1C1C1')
    })
  })

  describe('Teste de métodos', () => {
    test('Teste do método setLegendSize', () => {
      WRAPPER.vm.setLegendSize()
      expect(typeof WRAPPER.vm.legendSize).toBe('number')
    })
  })
})
