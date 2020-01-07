import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(App, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
