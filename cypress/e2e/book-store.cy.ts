import * as cypress from "cypress";
import * as booksJSON from "../../src/assets/books.json";

describe('SAP Book Store', () => {
  it('Visis the book store', () => {
    cy.visit('http://localhost:4200');
    cy.url().should('include', '/bookStore');
    cy.contains('Welcome to SAP Book Store !');
    cy.contains('Title');
    cy.contains('Votes');

    booksJSON.forEach((book,i) => {
      cy.get('#book' + i + ' > #bookcard > [fxlayout="row"] > [fxflex="40"] > #image').should('be.visible');
      cy.get('#book' + i + ' > #bookcard > [fxlayout="row"] > [fxflex="60"] > #title > a > b').contains(book.title);
      cy.get('#book' + i + ' > #bookcard > [fxlayout="row"] > [fxflex="60"] > #author').contains(book.author);
      cy.get('#book' + i + ' > #bookcard > [fxlayout="row"] > [fxflex="60"] > #category').contains(book.category);
      cy.get('#book' + i + ' > #bookcard > [fxlayout="row"] > [fxflex="60"] > #votes').contains(book.votes);
    });
  })
})
