/// <reference types = 'Cypress' />


import KanbanBoardPage from '../poms/kanbanBoardPage'
import IssueCardPage from '../poms/issueCardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage(); 

describe('Create new issue tests', () => {
 

  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
  })
  
  afterEach('Test cleanup', () => {
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('Short summary');
  })
 
  it('Should create new bug', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    kanbanBoardPage.clickIssueTypeMenu();
    kanbanBoardPage.selectValueFromDropdown('Bug');
    kanbanBoardPage.clickPriorityMenu();
    kanbanBoardPage.selectValueFromDropdown('Highest');
    kanbanBoardPage.inputShortSummary('Bug - Short summary');
    kanbanBoardPage.inputDescription('Bug - Short description');
    kanbanBoardPage.clickReporterMenu();
    kanbanBoardPage.selectValueFromDropdown('Thor');
    kanbanBoardPage.clickAssigneesMenu();
    kanbanBoardPage.selectValueFromDropdown('Captain');
    kanbanBoardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Bug - Short summary');
  })

 
  it('Should create new task', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    kanbanBoardPage.clickIssueTypeMenu();
    kanbanBoardPage.selectValueFromDropdown('Task');
    kanbanBoardPage.clickPriorityMenu();
    kanbanBoardPage.selectValueFromDropdown('Medium');
    kanbanBoardPage.inputShortSummary('Task - Short summary');
    kanbanBoardPage.inputDescription('Task - Short description');
    kanbanBoardPage.clickReporterMenu();
    kanbanBoardPage.selectValueFromDropdown('Spider');
    kanbanBoardPage.clickAssigneesMenu();
    kanbanBoardPage.selectValueFromDropdown('Trung');
    kanbanBoardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Task - Short summary');
    
  })
 
 
  it('Should create new story', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    kanbanBoardPage.clickIssueTypeMenu();
    kanbanBoardPage.selectValueFromDropdown('Story');
    kanbanBoardPage.clickPriorityMenu();
    kanbanBoardPage.selectValueFromDropdown('Lowest');
    kanbanBoardPage.inputShortSummary('Story - Short summary');
    kanbanBoardPage.inputDescription('Story - Short description');
    kanbanBoardPage.clickReporterMenu();
    kanbanBoardPage.selectValueFromDropdown('Iron');
    kanbanBoardPage.clickAssigneesMenu();
    kanbanBoardPage.selectValueFromDropdown('Thor');
    kanbanBoardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Story - Short summary');
    
  })


  it('Should not create issue without a Summary', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    kanbanBoardPage.elements.createIssueButton().should('be.disabled');
  
  })


})
