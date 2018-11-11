import styles from './HelloPage.scss';

class HelloPage {
  constructor() {}

  render(message) {
    let dom = document.createElement('div');
    dom.className = styles.hello;
    dom.append(`Hello: ${message}`);
    return dom;
  }
}

export default HelloPage;
