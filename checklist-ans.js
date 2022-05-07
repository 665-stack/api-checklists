// ====== checklist 1 ============
const Shahin = {
    fullName: 'Mahmodul Hasan Shahin',
    isRich: 'false',
    salary: 20000,
    save: 0,
    mother: {
        fullName: 'Shirin Akter',
        work: 'House wife'
    },

    device: ['smartPhone', 'laptop', 'desktop', 'smartWatch'],

    salaryCalc: function (expense) {
        this.save = this.salary - expense;
        return this.save;
    }
}
const shahinSalary = Shahin.salaryCalc(8000);
console.log('shahinSalary -- ', shahinSalary)

//======= checklist 2 ==============
const profileDetails = `
His full name is ${Shahin.fullName}. Her mother name is ${Shahin.mother.fullName}. And he use mostly ${Shahin.device[1]} then her smartphone. He can save ${Shahin.save} taka within her ${Shahin.salary} salary.
`;
console.log('profileDetails -- ', profileDetails)

//======== checklist 3.1 =============
const nothing = () => { return 89 }
console.log('nothing -- ', nothing())

//======== checklist 3.2 =============
const calc = num => {
    const divideResult = num / 7;
    return divideResult;
}
const calcNums = calc(50);
console.log('calcNums -- ', calcNums)

//======== checklist 3.3 ===========
const calc2 = (num1, num2) => {
    const sum = num1 + num2;
    const divide = sum / 2;
    return divide;
}
const calc2Nums = calc2(10, 10);
console.log('calc2Nums -- ', calc2Nums)

//========= checklist 3.4 ==============
const calc3 = (num1, num2) => {
    const sum1 = num1 + 7;
    const sum2 = num2 + 7;
    const totalSum = sum1 + sum2;
    return totalSum;
}
const calc3Nums = calc3(13, 23);
console.log('calc3Nums -- ', calc3Nums)

//========= checklist 4 ================
const tips = [200, 500, 100, 49, 21, 1000, 400, 800];
const tipsOutput = tips.map(num => num / 7)
console.log('tipsOutput -- ', tipsOutput)

//========== 