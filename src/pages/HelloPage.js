class HelloPage {
  constructor() {}

  render(message) {
    let dom = document.createElement('div');
    dom.append(`Hello: ${message}`);
    return dom;
  }
}

export default HelloPage;
