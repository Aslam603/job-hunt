let interestList = [];
let rejectList = [];


let total =document.getElementById('total')
let interestCount = document.getElementById('interestedCount')
let rejectCount = document.getElementById('rejectedCount')

// console.log(total);

const allCardSection = document.getElementById('allCards')

const mainContainer =document.querySelector('main')
// console.log(mainContainer)

const allFilterBtn = document.getElementById('all-filter-btn')
const interestedFilterBtn = document.getElementById('interested-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


function calculateCount(){
    total.innerText =allCardSection.children.length
    interestCount.innerText = interestList.length
    rejectCount.innerText = rejectList.length
}
calculateCount()

function toggleStyle(id){
    // console.log("click",id);
    allFilterBtn.classList.remove('bg-blue-400','text-white')
    interestedFilterBtn.classList.remove('bg-blue-400','text-white')
    rejectedFilterBtn.classList.remove('bg-blue-400','text-white')


    allFilterBtn.classList.add('bg-amber-50','text-blue-600/60')
    interestedFilterBtn.classList.add('bg-amber-50','text-blue/600/60')
    rejectedFilterBtn.classList.add('bg-amber-50','text-blue-600/60')

console.log(id);
    const selected =document.getElementById(id)
console.log(selected);

selected.classList.remove('bg-amber-50','text-blue-600/60')
selected.classList.add('bg-blue-400', 'text-white')
}

mainContainer.addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode); 

    const parentNode = event.target.parentNode.parentNode
    const jobName = parentNode.querySelector('.jobName').innerText
    const native = parentNode.querySelector('.native').innerText
    const fees = parentNode.querySelector('.fees').innerText
    
    
})