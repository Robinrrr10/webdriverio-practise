class HomePage {
    get bigText(){
        return $('h1.h0-80')
    }

    get subText(){
        return $('div.small-banner>p.sub-text')
    }

    get support(){
        return $("//a[text()='Support']")
    }

}

module.exports = new HomePage()