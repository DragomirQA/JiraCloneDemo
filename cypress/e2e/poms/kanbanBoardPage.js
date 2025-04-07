/// <reference types = 'Cypress' />

class KanbanBoardPage {
  elements = {
    createIssueIcon: () => cy.get(':nth-child(3) > .itemIcon > .anticon > svg'),
    backlogIssues: () => cy.get('#Backlog .issue'),
    selectedForDevelopmentIssues: () => cy.get('#Selected'),
    globalSearchIcon: () => cy.get('.navbarLeft-content > :nth-child(2)'),
    globalSearchTextField: () =>
      cy.get('.mb-10 > j-input > .input-container > .input'),
    issuesResults: () => cy.get('.ant-drawer-body'),
  };

  clickCreateIssueIcon() {
    this.elements.createIssueIcon().click();
  }

  assertIssueIsCreated(text) {
    this.elements.backlogIssues().contains(text);
  }

  openIssue(text) {
    this.elements.backlogIssues().contains(text).click();
  }

  assertIssueIsNotVisible(text) {
    this.elements.backlogIssues().contains(text).should('not.exist');
  }

  assertIssueIsInSelectedForDevelopment(text) {
    this.elements.selectedForDevelopmentIssues().contains(text);
  }

  assertIssueIsNotVisibleInDevelopment(text) {
    this.elements
      .selectedForDevelopmentIssues()
      .contains(text)
      .should('not.exist');
  }

  openIssueInDevelopment(text) {
    this.elements.selectedForDevelopmentIssues().contains(text).click();
  }

  clickGlobalSearchIcon() {
    this.elements.globalSearchIcon().click();
  }

  globalSearchTextFieldInput(text) {
    this.elements.globalSearchTextField().type(text);
  }

  assertIssuesResultsContains(text) {
    this.elements.issuesResults().contains(text);
  }

  closeSearchDrawer() {
    cy.get('.ant-drawer-mask').click({ force: true });
  }
}

export default KanbanBoardPage;
