import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

describe('Componente', () => {
  test('é uma instância Vue', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})