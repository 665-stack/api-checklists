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