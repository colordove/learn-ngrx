import { PetTagsNgrxPage } from './app.po';

describe('pet-tags-ngrx App', () => {
  let page: PetTagsNgrxPage;

  beforeEach(() => {
    page = new PetTagsNgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
