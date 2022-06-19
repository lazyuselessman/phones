import { mount } from '@vue/test-utils';
import EditPage from '@/views/EditPage.vue';

describe('Testing EditPage component', () => {
  it('checks textContent to contain "Replace a phone number"', async () => {
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

    const wrapper = mount(EditPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.element.textContent).toContain("Replace a phone number");
  });

  it('checks if buttons Edit and Cancel exist', async () => {
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

    const wrapper = mount(EditPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.findAll('button')[0].text()).toBe("Edit");
    expect(wrapper.findAll('button')[1].text()).toBe("Cancel");
  });

  it('checks pressing Edit button', async () => {
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

    const wrapper = mount(EditPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.setProps({numberId: "1"});
    await wrapper.find('input[id="item"]').setValue("+380501234568");
    await wrapper.findAll('button')[0].trigger('click');
    expect($store.dispatch).toBeCalledWith("EDIT_NUMBER", {id: "1", number: "+380501234568"});
    expect($router.push).toBeCalledWith({"name": "profile"});
  });

  it('checks pressing Cancel button', async () => {
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

    const wrapper = mount(EditPage, {
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