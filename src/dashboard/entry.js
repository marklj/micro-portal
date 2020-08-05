const render = () => {
  console.log('render fn')
  return Promise.resolve();
};

(global => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('dashboard bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('dashboard mount');
      return render();
    },
    unmount: () => {
      console.log('dashboard unmount');
      return Promise.resolve();
    },
  };
})(window);