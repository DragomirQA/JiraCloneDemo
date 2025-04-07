/// <reference types = 'Cypress' />

import IssueCardPage from '../poms/issueCardPage';
import KanbanBoardPage from '../poms/kanbanBoardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Adding comment to issue tests', () => {
  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.inputShortSummary('Short summary');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Short summary');
  });

  afterEach('Test cleanup', () => {
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('Short summary');
  });

  it('Should add comment to issue', () => {
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.commentFieldInput('Comment test');
    issueCardPage.clickSaveCommentButton();
    issueCardPage.clickCloseIssueButton();
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.assertIssueCardModalComment('Comment test');
  });
});
