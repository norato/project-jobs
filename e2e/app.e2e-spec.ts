import { ProjectJobsPage } from './app.po';

describe('project-jobs App', () => {
  let page: ProjectJobsPage;

  beforeEach(() => {
    page = new ProjectJobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
