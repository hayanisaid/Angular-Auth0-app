import { NgAuth0Page } from './app.po';

describe('ng-auth0 App', function() {
  let page: NgAuth0Page;

  beforeEach(() => {
    page = new NgAuth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
