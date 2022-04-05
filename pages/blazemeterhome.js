class BlazeHome {
    get allMainOptions(){
        return $$('ul.list-nav-links>li')  //used to return multiple element list
    }

    get printAllTextOfOptions(){
        return this.allMainOptions.filter( element => {console.log(element.getText())})
    }

    get parentUseCaseList(){
        return $('div.main_b_footer_inner_blocks>ul')
    }

    get useCaseAllChild(){
        return this.parentUseCaseList.$$('li')  //we can use parent element and then we can use again $ or $$
    }

    get useCasesAllChildText(){
        return this.useCaseAllChild.filter(element => {console.log(element.getText())})
    }
}

module.exports = new BlazeHome()