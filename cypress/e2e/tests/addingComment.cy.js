/// <reference types = 'Cypress' />

import IssueCardPage from '../poms/issueCardPage';
import KanbanBoardPage from '../poms/kanbanBoardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Adding comment to issue tests', () => {
  beforeEach('Test setup', () => {
    cy.visit('/');
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.inputShortSummary('Short summary');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('summary');
  });

  afterEach('Test cleanup', () => {
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('summary');
  });

  it.only('Should add comment to issue', () => {
    kanbanBoardPage.openIssue('summary');
    issueCardPage.commentFieldInput('Comment test');
    issueCardPage.clickSaveCommentButton();
    issueCardPage.clickCloseIssueButton();
    kanbanBoardPage.openIssue('summary');
    issueCardPage.assertIssueCardModalComment('Comment test');
  });
});
