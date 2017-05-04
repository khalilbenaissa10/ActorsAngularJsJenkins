import { Tp3ActorMoviePage } from './app.po';

describe('tp3-actor-movie App', () => {
  let page: Tp3ActorMoviePage;

  beforeEach(() => {
    page = new Tp3ActorMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
