/// <reference types = 'Cypress' />

/// <reference types = 'Cypress' />

import IssueCardPage from '../poms/issueCardPage';
import KanbanBoardPage from '../poms/kanbanBoardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Change issue status', () => {
  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.inputShortSummary('Short summary');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Short summary');
  });

  afterEach('Test cleanup', () => {
    kanbanBoardPage.openIssueInDevelopment('Short summary');
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisibleInDevelopment('Short summary');
  });

  it('Should change status from Backlog to Selected for development', () => {
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.clickStatusButton();
    issueCardPage.selectStatus('Selected for Development');
    issueCardPage.clickCloseIssueButton();
    kanbanBoardPage.assertIssueIsInSelectedForDevelopment('Short summary');
  });
});
