// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const Counter = createCounter()

// console.log(Counter());
// console.log(Counter())

function CountApiCallAndGetHalth(){
    let countAPi = 0;
    return async function (req, res) {
        try {
            console.log(req.ip)
            countAPi++
            console.log(countAPi)
            return res.json({
                message:"here Api Call"
            })
        } catch (error) {
            res.json({
                message:`Error get ${error.message}`
            })
        }
    }
}

export const countApiCall = CountApiCallAndGetHalth();
