import { mount } from '@vue/test-utils';
import DeletePage from '@/views/DeletePage.vue';

describe('Testing DeletePage component', () => {
  it('checks textContent to contain "Are you sure to delete number"', async () => {
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

    const wrapper = mount(DeletePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.element.textContent).toContain("Are you sure to delete number");
  });

  it('checks if buttons Yes and No exist', async () => {
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

    const wrapper = mount(DeletePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.findAll('button')[0].text()).toBe("Yes");
    expect(wrapper.findAll('button')[1].text()).toBe("No");
  });

  it('checks pressing Yes button', async () => {
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

    const wrapper = mount(DeletePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.setProps({numberId: "1"});
    await wrapper.findAll('button')[0].trigger('click');
    expect($store.dispatch).toBeCalledWith("DELETE_NUMBER", "1");
    expect($router.push).toBeCalledWith({"name": "profile"});
  });

  it('checks pressing No button', async () => {
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

    const wrapper = mount(DeletePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.setProps({numberId: "1"});
    await wrapper.findAll('button')[0].trigger('click');
    expect($router.push).toBeCalledWith({"name": "profile"});
  });
})