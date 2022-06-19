import { mount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('Testing HomePage component', () => {
  it('checks html to contain "There are no phone numbers in dictionary!"', () => {
    const $store = {
      state: {
        phoneNumbers: {
          phones: []
        }
      }
    }

    const wrapper = mount(HomePage, {
      global: {
        mocks: {
          $store
        },
        stubs: ['router-link']
      }
    });
    expect(wrapper.element.textContent).toContain("There are no phone numbers in dictionary!");
  });

  it('checks html to contain "surname1"', () => {
    const $store = {
      state: {
        phoneNumbers: {
          phones: [{
            surname: "surname1",
            numbers: [{
              id:"1",
              number: "+380501234567",
            }]
          }]
        }
      }
    }

    const wrapper = mount(HomePage, {
      global: {
        mocks: {
          $store
        },
        stubs: ['router-link']
      }
    });
    expect(wrapper.element.textContent).toContain("surname1");
  });
})