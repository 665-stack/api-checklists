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

//========== checklist 5 ===========
// example of map : 
const cousins = ['Asad', 'Tarek', 'Salma', 'Shovon', 'Shawon', 'Mim', 'Sazid', 'Sadia', 'Shahin', 'Mazid'];
const NameLength = cousins.map(x => x.length);
console.log('NameLength -- ', NameLength);

// example of forEach :
const NameLength2 = cousins.forEach(x => x.length)
console.log('NameLength2 -- ', NameLength2)

// example of filter : 
const numbs = [23, 87, 10, 3, 8, 883, 32, 44, 23, 95, 36, 45];
const bigNumbers = numbs.filter(num => num > 50);
console.log('bigNumbers -- ', bigNumbers)

// example of find : 
const under50nums = numbs.find(num => num < 50);
console.log('under50nums -- ', under50nums)


/*
 Summary of about recent those things :

 //map() ==> array er protuty upadan er jonno function ke call kore and shob function er result ke akti notun array te niye return kore.

 //forEach() ==> atao onkta map() er motoi, just map return kore but forEach kore na.

 //filter() ==> filter() kicu check point onujayi filter korbe; filter() array er protity upadaner modde jeta jeta shorto poron korbe taderke noton akter array te rekhe return kore. filter array return kore.

 //find() ==> find() array er prothom je upadan shorto fullfill korbe shudo shei upadan ke return kore. find() element return korbe.
*/

//========== checklist 6 ==========
const me = {
    fullName: 'Mahmodul Hasan Shahin',
    skinColor: 'white',
    favColors: ['black', 'dark brown'],
    gf: null,
    salary: [12000, 10000, 20000]
}
const { fullName, gf, skinColor } = me;
const [wear, others] = me.favColors;
const balance = me.salary[1];
console.log('me -- ', me)
console.log('wear, others -- ', wear, others)
console.log('balance -- ', balance)
//========== checklist 7 ============ একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে(হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।





