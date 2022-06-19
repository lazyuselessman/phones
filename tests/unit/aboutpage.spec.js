import { mount } from '@vue/test-utils';
import AboutPage from '@/views/AboutPage.vue';

describe('Testing AboutPage component', () => {
  const wrapper = mount(AboutPage);
  it('checks textContent to contain "Topikha Mykola KV-12mp"', () => {
    expect(wrapper.element.textContent).toContain("Topikha Mykola KV-12mp");
  });
  it('checks textContent to contain "Provide ability to save"', () => {
    expect(wrapper.element.textContent).toContain("Provide ability to save");
  });
})