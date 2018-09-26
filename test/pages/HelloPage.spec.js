import { expect } from 'chai';
import HelloPage from './../../src/pages/HelloPage';

describe('HelloPage', () => {
  let helloPage;

  describe('#render', () => {
    beforeEach(() => {
      helloPage = new HelloPage();
    });

    it('should render a hello world message', () => {
      let message = helloPage.render('World');
      expect(message.textContent).to.be.eq('Hello: World');
    });
  });
});
