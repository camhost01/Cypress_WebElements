class iFrame{
    elements={
        singleiFramebtn: ()=> cy.get('[href="#Single"]'),
        nestediFramebtn: ()=> cy.get('[href="#Multiple"]'),
        singleiFrame: ()=> cy.get("iframe[src='SingleFrame.html']"),
        nestediFrame1: ()=> cy.get('[src="MultipleFrames.html"]'),
        nestediFrame2: ()=> '[src="SingleFrame.html"][style="float: left;height: 250px;width: 400px"]',
        txtiFrameinput: ()=> ".col-xs-6.col-xs-offset-5 input[type='text']"
 
    }

}
module.exports = new iFrame()