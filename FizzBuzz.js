    class FizzBuzz{
        fizzBuzz(number) {
            var result = "";
            if(number % 3 == 0 || (""+number).indexOf('3') > -1){
                result = result + "fizz";
            }
            if(number % 5 == 0 || (""+number).indexOf('5') > -1){
                result = result + "buzz";
            }

            if(result == ""){
                return number+"";
            }

            return result;
        }


    }
    module.exports = FizzBuzz;