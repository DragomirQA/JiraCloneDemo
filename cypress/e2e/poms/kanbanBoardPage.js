/// <reference types = 'Cypress' />


class KanbanBoardPage {
    
    elements = {
        createIssueIcon: () => cy.get(':nth-child(3) > .itemIcon > .anticon > svg'),
        issueTypeMenu: () => cy.get('issue-type-select .ant-select-selector'),
        selectFromDropdown: () => cy.get('.ant-select-item-option'),
        priorityMenu: () => cy.get('issue-priority-select .ant-select-selector'),
        shortSummaryInput: () => cy.get(':nth-child(3) > .form-input'),
        descriptionInput: () => cy.get('.ql-editor > p'),
        reporterMenu: () => cy.get('j-user.ng-star-inserted > .flex'), 
        assigneesMenu: () => cy.get('issue-assignees-select .ant-select-selector'),
        createIssueButton: () => cy.get('[classname="btn-primary mr-2"] > .btn'),
        backlogIssues: () => cy.get('#Backlog .issue'), 
      
      }

    
    
    clickCreateIssueIcon() {
        this.elements.createIssueIcon().click();
    }

    clickIssueTypeMenu () {
        this.elements.issueTypeMenu().click(); 

    }

    selectValueFromDropdown(value) {
        this.elements.selectFromDropdown().contains(value).click();
    }


    clickPriorityMenu() {
        this.elements.priorityMenu().click();
    }


    inputShortSummary (text) {
      this.elements.shortSummaryInput().type(text, { delay: 80 });
    }

    inputDescription (text) {
      this.elements.descriptionInput().type(text);
    }

    clickReporterMenu () {
      this.elements.reporterMenu().click();
    }

    clickAssigneesMenu () {
      this.elements.assigneesMenu().click();
    }

    clickCreateIssueButton () {
      this.elements.createIssueButton().click({force:true});
    }

    assertIssueIsCreated (text) {
      this.elements.backlogIssues().contains(text);
    }

    openIssue (text) {
      this.elements.backlogIssues().contains(text).click();
    }

    assertIssueIsNotVisible (text) {
      this.elements.backlogIssues().contains(text).should('not.exist');
    }

  }
  
  export default KanbanBoardPage;
  