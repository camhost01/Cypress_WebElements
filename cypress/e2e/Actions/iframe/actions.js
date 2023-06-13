import iframepage from '../../PageObject/iFrames/iframePage'
class iframactions{

    typeSingleIframe(){
        iframepage.elements.singleiFramebtn().click()
        iframepage.elements.singleiFrame()
        .its('0.contentDocument.body')
        .find(iframepage.elements.txtiFrameinput())
        .type('Founded Single iFrame!')
    }
    typeNestedIframe(){
        iframepage.elements.nestediFramebtn().click()
        iframepage.elements.nestediFrame1()
        .its('0.contentDocument.body')
        .find(iframepage.elements.nestediFrame2())
        .its('0.contentDocument.body')
        .find(iframepage.elements.txtiFrameinput())
        .type('Founded Nested iFrame')
    }


}
module.exports = new iframactions()