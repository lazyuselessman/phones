import { mount } from '@vue/test-utils';
import AddPage from '@/views/AddPage.vue';

describe('Testing AddPage component', () => {
  it('checks textContent to contain "Enter a phone number"', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn(),
      state: {
        currentUser: [],
        currentUserPhone: {
          surname: "surname1",
          numbers: []
        }
      }
    }

    const wrapper = mount(AddPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.element.textContent).toContain("Enter a phone number");
  });

  it('checks if button Add exist', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn(),
      state: {
        currentUser: [],
        currentUserPhone: {
          surname: "surname1",
          numbers: []
        }
      }
    }

    const wrapper = mount(AddPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.find('button').text()).toBe("Add");
  });

  it('checks pressing add button', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn(),
      state: {
        currentUser: [],
        currentUserPhone: {
          surname: "surname1",
          numbers: [{
              id: "1",
              number: "+380501234567"
            }
          ]
        }
      }
    }

    const wrapper = mount(AddPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.findAll('button')[0].trigger('click');
    expect($store.dispatch).toBeCalledWith("ADD_NUMBER", "");
    expect($router.push).toBeCalledWith({"name": "profile"});
  });
})