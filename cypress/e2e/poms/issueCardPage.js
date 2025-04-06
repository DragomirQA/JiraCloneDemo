/// <reference types = 'Cypress' />


class IssueCardPage {
    
    elements = {
        deleteIcon: () => cy.get('[icon="trash"] .btn'),
        confirmDeleteButton: () => cy.get('[classname="btn-primary mr-2"] .btn'),
        commentField: () => cy.get('.editing-area .cdk-textarea-autosize'),
        saveCommentButton: () => cy.get('.flex > :nth-child(1) > .btn'),
        closeIssueButton: () => cy.get('[icon="times"] > .btn'),
        issueCardModal: () => cy.get('issue-modal'),
      
      }

    
    
    clickDeleteButton() {
        this.elements.deleteIcon().click();
    }

    clickConfirmDeleteButton() {
        this.elements.confirmDeleteButton().click();
    }

    commentFieldInput (text) {
      this.elements.commentField().type(text);
    }

    clickSaveCommentButton () {
      this.elements.saveCommentButton().click();
    }

    clickCloseIssueButton () {
      this.elements.closeIssueButton().click();
    }

    assertIssueCardModalComment (text) {
      this.elements.issueCardModal().contains(text);
    }

    
  }
  
  export default IssueCardPage;
    