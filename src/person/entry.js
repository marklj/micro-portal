const render = () => {
  console.log('render fn')
  return Promise.resolve();
};

(global => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('person bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('person mount');
      return render();
    },
    unmount: () => {
      console.log('person unmount');
      return Promise.resolve();
    },
  };
})(window);