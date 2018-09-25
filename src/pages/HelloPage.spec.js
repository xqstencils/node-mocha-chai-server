import HelloPage from './HelloPage';

describe('HelloPage', () => {
  let helloPage;

  describe('#render', () => {
    beforeEach(() => {
      helloPage = new HelloPage();
    });

    it('should render a hello world message', () => {
      let message = helloPage.render('World');
      expect(message.textContent).toBe('Hello: World');
    });
  });
});
