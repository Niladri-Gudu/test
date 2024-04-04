const url = "https://dummyjson.com/users?limit=100"

let arr=[]
let clicked=[]

async function apiReq() {
  const res = await fetch(url)
  const data = await res.json()
  showCards(data.users)
  arr=data.users;
}


function showCards(data) {
  var clutter = "";
  data.forEach(function(obj, index){
    clutter += `<div class="wrapper h-[380px] bg-red-300 flex flex-col items-center justify-start relative rounded-xl">
    <div class="h-[12rem] w-[12rem] mt-5 mb-5">
        <img src="${obj.image}" alt="">
    </div>
    <div class="flex justify-start items-center w-[75%] text-[18px]">
        <h2 class="font-bold mr-2">Name: </h2>
        <p>${obj.firstName}</p>
    </div>
    <div class="flex justify-start items-center w-[75%] text-[18px]">
        <h2 class="font-bold mr-2">Age: </h2>
        <p>${obj.age}</p>
    </div>
    <div class="flex justify-start items-center w-[75%] text-[18px]">
        <h2 class="font-bold mr-2">Gender: </h2>
        <p>${obj.gender}</p>
    </div>
    <div class="">
        <button data-index="${index}" class="add absolute -translate-x-1/2 mt-3 py-1 w-44 border-[2px] border-black rounded-xl font-bold">Click to view Details</button>
    </div>
</div>`
  })

  document.querySelector('.container').innerHTML = clutter
}



function viewDetails() {
  document.querySelector('.container').addEventListener('click', function(dets){
    if (dets.target.classList.contains('add')) {
      // clicked.push(arr[dets.target.dataset.index]);
      document.querySelector(".details").style.display = "block";
      document.querySelector(".details").style.position = "sticky";
      document.querySelector(".details").style.visibility = "visible";

      console.log(arr[dets.target.dataset.index])

      
    }
  })
}

document.querySelector('.cross').addEventListener('click', function(){
  document.querySelector(".details").style.display = "none";
  document.querySelector(".details").style.position = "relative";
  document.querySelector(".details").style.visibility = "hidden";
})

apiReq()
viewDetails()










const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)