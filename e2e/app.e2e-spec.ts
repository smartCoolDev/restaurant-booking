import { ninestarsassignment } from './app.po';

describe('ninestars-assignment-cli-free App', () => {
  let page: ninestarsassignment;

  beforeEach(() => {
    page = new ninestarsassignment();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
