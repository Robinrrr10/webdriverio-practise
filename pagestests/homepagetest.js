const hmPg = require('../pages/homepage');

describe('Home Page Test', function(){
    it('Print home text', function(){
        browser.url('https://www.freshworks.com/')
        let highlightedText = hmPg.bigText.getText();
        console.log(highlightedText)
    })

    it('verify sub text in home', function(){
        browser.url('https://www.freshworks.com/')
        console.log(hmPg.subText.getText());
    })

    it('Click support menu in home page', function(){
        browser.url('https://www.freshworks.com/')
        hmPg.subText.click();
        browser.pause(5000)
    })
})