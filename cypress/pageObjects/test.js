class pageObejects {
    selectBuild (buildNumber){
        return cy.get('#selectBuild').select(buildNumber)
    }
    number1Field (){
        return cy.get('#number1Field')
    }
    number2Field (){
        return cy.get('#number2Field')
    }
    selectOperationDropdown (operation){
        return cy.get('#selectOperationDropdown').select(operation)
    }
    calculateButton (){
        return cy.get('#calculateButton')
    }
    numberAnswerField (){
        return cy.get('#numberAnswerField')
    }
    integerSelect (){
        return cy.get('#integerSelect')
    }
    clearButton (){
        return cy.get('#clearButton')
    }
    errorMsgField(){
        return cy.get('#errorMsgField')
    }
}
export default pageObejects