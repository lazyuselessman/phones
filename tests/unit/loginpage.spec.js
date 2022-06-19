import { mount } from '@vue/test-utils';
import LoginPage from '@/views/LoginPage.vue';

describe('Testing LoginPage component', () => {
  it('checks login attempt with empty email and password', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(LoginPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    expect(wrapper.find('input[name="email"]').text()).toBe("");
    expect(wrapper.find('input[name="password"]').text()).toBe("");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(console.log).toBeCalledWith('Email and password must be set');
  });

  it('checks login attempt with empty email', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(LoginPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.find('input[name="email"]').setValue("");
    await wrapper.find('input[name="password"]').setValue("Pass");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(console.log).toBeCalledWith('Email and password must be set');
  });

  it('checks login attempt with empty password', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }

    const wrapper = mount(LoginPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.find('input[name="email"]').setValue("Login");
    await wrapper.find('input[name="password"]').setValue("");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(console.log).toBeCalledWith('Email and password must be set');
  });

  it('checks login attempt with filled email and password', async () => {
    const $router = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn(),
      state: {
        currentUser: null,
      }
    }

    const wrapper = mount(LoginPage, {
      global: {
        mocks: {
          $router,
          $store
        }
      }
    });
    console.log = jest.fn();
    await wrapper.find('input[name="email"]').setValue("user");
    await wrapper.find('input[name="password"]').setValue("pass");
    await wrapper.find('button').trigger('click');
    expect($store.dispatch).toBeCalledWith("LOGIN", { email: "user", password: "pass" });
    expect($router.push).toBeCalledWith("/login");
});
})