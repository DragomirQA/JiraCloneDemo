/// <reference types = 'Cypress' />

import IssueCardPage from '../poms/issueCardPage';
import KanbanBoardPage from '../poms/kanbanBoardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Search for issues', () => {
  beforeEach('Test setup', () => {
    cy.visit('/');
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.inputShortSummary('Short summary');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('summary');
  });

  it('Should find issue', () => {
    kanbanBoardPage.clickGlobalSearchIcon();
    kanbanBoardPage.globalSearchTextFieldInput('Short summary');
    kanbanBoardPage.assertIssuesResultsContains('Short summary');
  });

  afterEach('Test cleanup', () => {
    kanbanBoardPage.closeSearchDrawer();
    kanbanBoardPage.openIssue('summary');
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('summary');
  });
});
