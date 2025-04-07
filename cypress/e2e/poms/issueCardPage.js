/// <reference types = 'Cypress' />

class IssueCardPage {
  elements = {
    issueTypeMenu: () => cy.get('issue-type-select .ant-select-selector'),
    selectFromDropdown: () => cy.get('.ant-select-item-option'),
    priorityMenu: () => cy.get('issue-priority-select .ant-select-selector'),
    shortSummaryInput: () => cy.get(':nth-child(3) > .form-input'),
    descriptionInput: () => cy.get('.ql-editor > p'),
    reporterMenu: () => cy.get('j-user.ng-star-inserted > .flex'),
    assigneesMenu: () => cy.get('issue-assignees-select .ant-select-selector'),
    createIssueButton: () => cy.get('[classname="btn-primary mr-2"] > .btn'),
    deleteIcon: () => cy.get('[icon="trash"] .btn'),
    confirmDeleteButton: () => cy.get('[classname="btn-primary mr-2"] .btn'),
    commentField: () => cy.get('.editing-area .cdk-textarea-autosize'),
    saveCommentButton: () => cy.get('.flex > :nth-child(1) > .btn'),
    closeIssueButton: () => cy.get('[icon="times"] > .btn'),
    issueCardModal: () => cy.get('issue-modal'),
    statusButton: () => cy.get('issue-status > .ant-dropdown-trigger > .btn'),
    statusDropdown: () => cy.get('.ant-dropdown'),
  };

  clickIssueTypeMenu() {
    this.elements.issueTypeMenu().click();
  }

  selectValueFromDropdown(value) {
    this.elements.selectFromDropdown().contains(value).click();
  }

  clickPriorityMenu() {
    this.elements.priorityMenu().click();
  }

  inputShortSummary(text) {
    this.elements
      .shortSummaryInput()
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .type(text, { delay: 80 });
  }

  inputDescription(text) {
    this.elements.descriptionInput().type(text);
  }

  clickReporterMenu() {
    this.elements.reporterMenu().click();
  }

  clickAssigneesMenu() {
    this.elements.assigneesMenu().click();
  }

  clickCreateIssueButton() {
    this.elements.createIssueButton().click({ force: true });
  }

  clickDeleteButton() {
    this.elements.deleteIcon().click();
  }

  clickConfirmDeleteButton() {
    this.elements.confirmDeleteButton().click();
  }

  commentFieldInput(text) {
    this.elements.commentField().type(text);
  }

  clickSaveCommentButton() {
    this.elements.saveCommentButton().click();
  }

  clickCloseIssueButton() {
    this.elements.closeIssueButton().click();
  }

  assertIssueCardModalComment(text) {
    this.elements.issueCardModal().contains(text);
  }

  validateShortSummaryFieldIsEmpty() {
    this.elements.shortSummaryInput().should('have.value', '');
  }

  clickStatusButton() {
    this.elements.statusButton().click();
  }

  selectStatus(text) {
    this.elements.statusDropdown().contains(text).click();
  }
}

export default IssueCardPage;
