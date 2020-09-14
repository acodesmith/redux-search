(function () {
  // @ts-ignore
  window.__REDUX_SEARCH_EXTENSION__ = function () {
    console.log('__REDUX_SEARCH_EXTENSION__ middleware added');
    return (store) => (next) => (action) => {
      let result = next(action);

      // Post new state to extension
      console.log(result);
      window.postMessage(
        { type: 'REDUX_SEARCH_SYNC', state: store.getState() },
        '*'
      );

      return result;
    };
  };
})();
