class StringFunctions {

    static findDiv = (input:string) => {
        if(input === '<div>') {
            return true
        }
        return false;
    }

    static closeSecondDiv = (input:string) => {

        if(input === '') {
            return 
        }
        
        let arrayChar = [...input];

        let foundedFirstDiv = false;
        let foundedSecondDiv = false;
        for(let i = 0; i < arrayChar.length; i++) {
            if(arrayChar[i] === '<' && foundedFirstDiv === false) {
                foundedFirstDiv = this.findDiv(input.slice(i, i+5))
                
                if(foundedFirstDiv)
                    i += 5;
            }       
            if(arrayChar[i] === '<' && foundedFirstDiv === true){
                foundedSecondDiv = this.findDiv(input.slice(i, i+5))
                
                if(foundedSecondDiv)
                    input = input.slice(0, i+1) + '/' + input.slice(i+1)
                    arrayChar = [...input]
                    console.log(input)
                    foundedFirstDiv = false
                    foundedSecondDiv = false
                    i += 5;
            }
        }
    }
}

export default StringFunctions;