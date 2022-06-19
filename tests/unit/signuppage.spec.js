import { mount } from '@vue/test-utils';
import SignupPage from '@/views/SignupPage.vue';

describe('Testing SignupPage component', () => {
  it('checks registration attempt with empty fields', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(SignupPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.find('input[name="surname"]').text()).toBe("");
    expect(wrapper.find('input[name="email"]').text()).toBe("");
    expect(wrapper.find('input[name="password"]').text()).toBe("");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(console.log).toBeCalledWith('Surname must be set');
  });

  it('checks registration attempt with empty surname', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(SignupPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.find('input[name="email"]').setValue("email@dot.com");
    await wrapper.find('input[name="password"]').setValue("123");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(console.log).toBeCalledWith('Surname must be set');
  });

  it('checks registration attempt with empty email', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(SignupPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.find('input[name="surname"]').setValue("surname1");
    await wrapper.find('input[name="password"]').setValue("123");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(console.log).toBeCalledWith('Username and password must be set');
  });

  it('checks registration attempt with all fields filled', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      state: {
        users: {
          findByEmail: jest.fn((_) => false)
        }
      },
      dispatch: jest.fn()
    }

    const wrapper = mount(SignupPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    await wrapper.find('input[name="surname"]').setValue("surname1");
    await wrapper.find('input[name="email"]').setValue("email@dot.com");
    await wrapper.find('input[name="password"]').setValue("pass");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledWith("/login");
    expect($store.dispatch).toBeCalledWith("ADD_USER", { surname: "surname1", email: "email@dot.com", password: "pass" });
  });

  it('checks registration attempt with all fields filled(user exist)', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      state: {
        users: {
          findByEmail: jest.fn((_) => true)
        }
      },
      dispatch: jest.fn()
    }

    const wrapper = mount(SignupPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    await wrapper.find('input[name="surname"]').setValue("surname1");
    await wrapper.find('input[name="email"]').setValue("email@dot.com");
    await wrapper.find('input[name="password"]').setValue("pass");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledWith("/signup");
    expect(console.log).toBeCalledWith("User with email 'email@dot.com' already exists!");
  });
})