describe('Amazon test suite', function(){
    it('Add text in search box', function(){
        browser.url('/')
        const searchField = $("#twotabsearchtextbox");
        searchField.setValue('Iphone watch')
        browser.pause(3000)
    })

    it('Get text', function(){
        browser.url('/')
        const endText = $('span.navFooterBackToTopText')
        let value = endText.getText()
        console.log(value);
    })

    it('click menu', function(){
        browser.url('/')
        const ham = $('i.hm-icon.nav-sprite')
        ham.click()
        browser.pause(10000)
    })

})