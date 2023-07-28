import pageObjects from "../pageObjects/test.js"

describe('basic calculator spec', () => {
  const pageObjectsPage = new pageObjects()
  beforeEach('navigate to url',()=>{
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    pageObjectsPage.selectBuild('6')
  })
  it('verify the url is correctly navigated', () => {
    cy.url().should('contains','BasicCalculator')
  })
  it('Basic Addition', () => {
    cy.calculateOperation(2,2,"Add")
    pageObjectsPage.numberAnswerField().should('have.value',4)
  })
  it('Basic Subtraction', () => {
    cy.calculateOperation(4,2,"Subtract")
    pageObjectsPage.numberAnswerField().should('have.value',2)
  })
  it('Basic Multiplication', () => {
    cy.calculateOperation(4,2,"Multiply")
    pageObjectsPage.numberAnswerField().should('have.value',8)
  })
  it('Basic Divide', () => {
    cy.calculateOperation(4,2,"Divide")
    pageObjectsPage.numberAnswerField().should('have.value',2)
  })
  it('Basic Concatenate', () => {
    cy.calculateOperation(4,2,"Concatenate")
    pageObjectsPage.numberAnswerField().should('have.value',42)
  })
  it('Clear button should clear answer', () => {
    cy.calculateOperation(4,2,"Concatenate")
    pageObjectsPage.clearButton().click()
    pageObjectsPage.numberAnswerField().should('have.value','')
  })
  it('Decimal Addition', () => {
    cy.calculateOperation(2.5,2.7,"Add")
    pageObjectsPage.numberAnswerField().should('have.value',5.2)
  })
  it('Select Integer check box for Decimal Addition', () => {
    cy.calculateOperation(2.5,2.7,"Add")
    pageObjectsPage.integerSelect().check()
    pageObjectsPage.numberAnswerField().should('have.value',5)
  })
  // Negative test cases
  it('Divide by zero and check error message', () => {
    cy.calculateOperation(2,0,"Divide")
    pageObjectsPage.errorMsgField().should('have.text',"Divide by zero error!")
  })
  it('Enter number more than 10 digits and add', () => {
    cy.calculateOperation(123456789012345,123456789012345,"Add")
    pageObjectsPage.numberAnswerField().should('have.value',2469135780)
  })
  it('Should thorw error message if given special characters in first number input ', () => {
    cy.calculateOperation("211@##",0,"Divide")
    pageObjectsPage.errorMsgField().should('have.text',"Number 1 is not a number")
  })
  it('Should thorw error message if given special characters in Second number input ', () => {
    cy.calculateOperation("211","2@$#","Divide")
    pageObjectsPage.errorMsgField().should('have.text',"Number 2 is not a number")
  })
  // Edge test cases
  it('Add two Negative Numbers', () => {
    cy.calculateOperation(-4.2,-5.3,"Add")
    pageObjectsPage.numberAnswerField().should('have.value',-9.5)
  })

  it('Devide by Decimal Numbers', () => {
    cy.calculateOperation(2,0.5,"Divide")
    pageObjectsPage.numberAnswerField().should('have.value',4)
  })
  it('Devide by Two Numbers and round it off', () => {
    cy.calculateOperation(10,3,"Divide")
    pageObjectsPage.numberAnswerField().should('have.value',3.3333333333333335)
  })

  // use of Fixtures file 
  it('Use of Fixture file to check text on page', () => {
    cy.fixture('example').then((data =>{
      cy.get('.col-lg-12 > :nth-child(3)').should('have.text',data.text)
    }))
  })

})