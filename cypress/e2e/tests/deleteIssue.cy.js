/// <reference types = 'Cypress' />


import IssueCardPage from '../poms/issueCardPage';
import KanbanBoardPage from '../poms/kanbanBoardPage'

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Delete issue tests', () => {
 

  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
    kanbanBoardPage.clickCreateIssueIcon();
    kanbanBoardPage.inputShortSummary('Short summary');
    kanbanBoardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Short summary');
  })
  
 
  it('Should delete issue', () => {
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('Short summary');

  })

 
   
})
