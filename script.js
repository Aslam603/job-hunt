let interestList = [];
let rejectList = [];


let total =document.getElementById('total')
let interestCount = document.getElementById('interestedCount')
let rejectCount = document.getElementById('rejectedCount')

// console.log(total);

const allCardSection = document.getElementById('allCards')

const mainContainer =document.querySelector('main')
const filterSection =document.getElementById('filtered-section')


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

// console.log(id);
    const selected =document.getElementById(id)
// console.log(selected);

selected.classList.remove('bg-amber-50','text-blue-600/60')
selected.classList.add('bg-blue-400', 'text-white')
 
if(id == 'interested-filter-btn'){
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden')
}else if(id== 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
}



}

mainContainer.addEventListener('click',function(event){

    console.log(event.target.classList.contains('int-btn'));

if(event.target.classList.contains('int-btn')) {

    const parentNode = event.target.parentNode.parentNode 
    const jobName = parentNode.querySelector('.jobName').innerText
    const native = parentNode.querySelector('.native').innerText
    const fees = parentNode.querySelector('.fees').innerText
    const pera =parentNode.querySelector('.pera').innerText
    const applied = parentNode.querySelector('.applied').innerText
   
const cardInfo ={
    jobName,
    native,
    fees,
    pera,
    applied 
}
    
 const jobExist = interestList.find(item=> item.jobName == cardInfo.jobName)
 
parentNode.querySelector('.applied').innerText = 'Interview'

if(!jobExist){
    interestList.push(cardInfo)
}

renderInterest()

}

})

function renderInterest(){
filterSection.innerHTML= ''

for(let interest of interestList){

    console.log(interest);

    let div = document.createElement('div');
    div.className = 'flex justify-between  border border-amber-100 rounded shadow px-6 py-6'

    div.innerHTML=`    <div>
                    <div class="mb-4">
                    <p class=" jobName  text-blue-950 text-[15px] font-semibold ">Mobile First Corp</p>
                    <p class=" native    text-black/50">React Native Developer</p>
                    </div>
                    <div class="mb-3.5">
                    <p class=" fees     text-black/50">Remote• Full-time •$130,000 - $175,000</p>
                </div>
                <div>
                    <button class=" applied    bg-blue-300/35 mb-3.5 rounded px-4 py-1">NOT APPLIED</button>
                </div>
                <div class="mb-3.5">
                 <p class="pera">  Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                <div class="flex gap-2.5 mb-5">
                    <button class="bg-amber-50 border border-green-500 text-green-500 rounded px-4 py-1 font-semibold">Interview</button>
                    <button class="bg-amber-50 border border-red-500 text-red-500 rounded px-4 py-1 font-semibold">Rejected</button>
                </div>
                    </div>
                <div >
                    <button class="bg-amber-100 p-2 rounded-full">
            <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div> 
                `
filterSection.appendChild(div)

}

}