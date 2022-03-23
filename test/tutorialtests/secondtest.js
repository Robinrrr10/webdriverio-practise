describe('Frshers world test suite', function(){
    it('gettings text and verifying', function(){
        browser.url('https://www.freshersworld.com/')
        const shownhere = $("button#search_job_button");
        let text = shownhere.getText()
        console.log(text)
    })

})