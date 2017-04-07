import { Ng4SelectDemoPage } from './app.po';

describe('ng4-select-demo App', () => {
  let page: Ng4SelectDemoPage;

  beforeEach(() => {
    page = new Ng4SelectDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
