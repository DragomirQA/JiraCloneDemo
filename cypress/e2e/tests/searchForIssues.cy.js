/// <reference types = 'Cypress' />

import IssueCardPage from '../poms/issueCardPage';
import KanbanBoardPage from '../poms/kanbanBoardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Search for issues', () => {
  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.inputShortSummary('Short summary');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Short summary');
  });

  it('Should find issue', () => {
    kanbanBoardPage.clickGlobalSearchIcon();
    kanbanBoardPage.globalSearchTextFieldInput('Short summary');
    kanbanBoardPage.assertIssuesResultsContains('Short summary');
  });

  afterEach('Test cleanup', () => {
    kanbanBoardPage.closeSearchDrawer();
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('Short summary');
  });
});
