import { mount } from '@vue/test-utils';
import ProfilePage from '@/views/ProfilePage.vue';

describe('Testing ProfilePage component', () => {
  it('checks button "Add" existance', async () => {
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

    const wrapper = mount(ProfilePage, {
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

  it('checks textContent to contain "+380501234567" and buttons', async () => {
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

    const wrapper = mount(ProfilePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.element.textContent).toContain("+380501234567");
    expect(wrapper.element.textContent).toContain("Phone Numbers");
    expect(wrapper.findAll('button')[1].text()).toBe("Delete");
    expect(wrapper.findAll('button')[2].text()).toBe("Edit");
  });

  it('checks pressing delete button', async () => {
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

    const wrapper = mount(ProfilePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.findAll('button')[1].trigger('click');
    expect($router.push).toBeCalledWith({"name": "delete", "params": {"numberId": "1"}});
  });

  it('checks pressing edit button', async () => {
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

    const wrapper = mount(ProfilePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.findAll('button')[2].trigger('click');
    expect($router.push).toBeCalledWith({"name": "edit", "params": {"numberId": "1"}});
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

    const wrapper = mount(ProfilePage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.findAll('button')[0].trigger('click');
    expect($router.push).toBeCalledWith({"name": "add"});
  });
})