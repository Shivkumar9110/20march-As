function convertTwoNumber(str){
    try{
        const num=Number(str)
        // console.log( typeof num)
        if(Number.isNaN(num)){
            console.log("invalid Number.")
        }
    }catch(error){
       return error.Massage;
    }
}
convertTwoNumber("123")
convertTwoNumber("abc")