(function () {
  // @ts-ignore
  window.__REDUX_SEARCH_EXTENSION__ = (store) => (next) => (action) => {
    return next(action);
  };

  // const name = 'tab';
  // // @ts-ignore
  // const bg = chrome.runtime.connect(window.__REDUX_SEARCH_ID__);
  // console.log({ bg });

  // if (bg) {
  //   // @ts-ignore
  //   bg.postMessage(window.__REDUX_SEARCH_ID__, { test: 123 });
  // }

  // window.postMessage({ what: 'happens' }, '*');
})();
