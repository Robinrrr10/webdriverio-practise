const blazepage = require('../pages/blazemeterhome')

describe('blaze tests', function(){
    it('home page option text validation', function(){
        browser.url('https://www.blazemeter.com/')
        browser.maximizeWindow()
        blazepage.printAllTextOfOptions;
    }),

    it('Home page usecases', function(){
        browser.url('https://www.blazemeter.com/')
        browser.maximizeWindow()
        blazepage.useCasesAllChildText;
    })
})