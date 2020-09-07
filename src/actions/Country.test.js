
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actionsCountry from "../actions/Country"
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library



const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('get countries async', () => {
    debugger;
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    const store = mockStore({ countries: [] })

    return store.dispatch(actionsCountry.fetchAllCountriesTest()).then((response) => {
      // return of async actions
      var action = store.getActions();
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})