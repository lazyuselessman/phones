import { mount } from '@vue/test-utils';
import LogoutPage from '@/views/LogoutPage.vue';

describe('Testing LogoutPage component', () => {
  const wrapper = mount(LogoutPage);
  it('checks textContent to contain "Successfully logged out"', () => {
    expect(wrapper.element.textContent).toContain("Successfully logged out");
  });
})