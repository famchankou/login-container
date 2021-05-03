import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
 
import App from '../../components/App';
 
const mockStore = configureStore([]);
 
describe('React-Redux App auth', () => {
  let store;
  let route;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {},
        isAuth: false,
        isRequesting: false,
        error: null,
      },
      errors: {},
    });

    store.dispatch = jest.fn();
    const history = createMemoryHistory();
    route = '/login';
    history.push(route);

    component = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
  it('should dispatch an action on login', () => {
    renderer.act(() => {
      const inputs = component.root.findAllByType('input');
      inputs[0].props.onChange({ target: { value: 'test@test.com' } });
      inputs[1].props.onChange({ target: { value: '123456' } });
    });

    renderer.act(() => {
      component.root.findByType('form').props.onSubmit();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
