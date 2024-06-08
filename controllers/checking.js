const mySkills = ['Bootstrap', 'CSS', 'CSS 3', 'Figma', 'Front-End Development', 'HTML', 'HTML5', 'JavaScript', 'React', 'Responsive Design', 'Web Design', "SCSS", 'Web Development', 'jQuery','Landing Page']




const checkingUpworkSkills = (a) => {
    let resultChecking =[]
    a.map((el,ind)=>{
        const resultLoop = mySkills.indexOf(el)
        resultChecking.push(resultLoop)
    })
    return resultChecking
}
const checkingCountry = (country) =>{
    if(country === 'Israel' || country === 'Unknown') return false
    else return true
}
const checkingPayment = (payment) => {
    if(payment !== 'Payment verified') return false
    else return true
}
function extractNumber(str) {
    return str.replace(/[^\d]/g, '');
}

const checkingSpent = (spent) => {
    let newSpent = extractNumber(spent)
    if(newSpent === '0') return false
    else return true
}
exports.checkingAllData = (skills,country,payment,spent) =>{
    let resultAll = []
    let success = true
    let resultChecking = checkingUpworkSkills(skills)
    resultAll.push(checkingCountry(country))
    resultAll.push(checkingPayment(payment))
    // resultAll.push(checkingSpent(spent))
    resultChecking.map((el,ind)=>{
        resultAll.push(el)
    })
    if(resultAll.includes(false) || resultAll.includes(-1)) success = false

    return success

}

exports.checkServer = async (req,res)=>{
    res.json({
        status:200,
        ini:"benar"
    })
}