/// <reference types = 'Cypress' />

import KanbanBoardPage from '../poms/kanbanBoardPage';
import IssueCardPage from '../poms/issueCardPage';

const kanbanBoardPage = new KanbanBoardPage();
const issueCardPage = new IssueCardPage();

describe('Create new issue tests', () => {
  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
  });

  afterEach('Test cleanup', () => {
    kanbanBoardPage.openIssue('Short summary');
    issueCardPage.clickDeleteButton();
    issueCardPage.clickConfirmDeleteButton();
    kanbanBoardPage.assertIssueIsNotVisible('Short summary');
  });

  it('Should create new bug', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.clickIssueTypeMenu();
    issueCardPage.selectValueFromDropdown('Bug');
    issueCardPage.clickPriorityMenu();
    issueCardPage.selectValueFromDropdown('Highest');
    issueCardPage.inputShortSummary('Bug - Short summary');
    issueCardPage.inputDescription('Bug - Short description');
    issueCardPage.clickReporterMenu();
    issueCardPage.selectValueFromDropdown('Thor');
    issueCardPage.clickAssigneesMenu();
    issueCardPage.selectValueFromDropdown('Captain');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Bug - Short summary');
  });

  it('Should create new task', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.clickIssueTypeMenu();
    issueCardPage.selectValueFromDropdown('Task');
    issueCardPage.clickPriorityMenu();
    issueCardPage.selectValueFromDropdown('Medium');
    issueCardPage.inputShortSummary('Task - Short summary');
    issueCardPage.inputDescription('Task - Short description');
    issueCardPage.clickReporterMenu();
    issueCardPage.selectValueFromDropdown('Spider');
    issueCardPage.clickAssigneesMenu();
    issueCardPage.selectValueFromDropdown('Trung');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Task - Short summary');
  });

  it('Should create new story', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.clickIssueTypeMenu();
    issueCardPage.selectValueFromDropdown('Story');
    issueCardPage.clickPriorityMenu();
    issueCardPage.selectValueFromDropdown('Lowest');
    issueCardPage.inputShortSummary('Story - Short summary');
    issueCardPage.inputDescription('Story - Short description');
    issueCardPage.clickReporterMenu();
    issueCardPage.selectValueFromDropdown('Iron');
    issueCardPage.clickAssigneesMenu();
    issueCardPage.selectValueFromDropdown('Thor');
    issueCardPage.clickCreateIssueButton();
    kanbanBoardPage.assertIssueIsCreated('Story - Short summary');
  });
});

describe('Create new issue tests', () => {
  beforeEach('Test setup', () => {
    cy.visit('https://jira.trungk18.com/');
  });
  it('Should not create issue without a Summary', () => {
    kanbanBoardPage.clickCreateIssueIcon();
    issueCardPage.validateShortSummaryFieldIsEmpty();
    issueCardPage.elements.createIssueButton().should('be.disabled');
  });
});
