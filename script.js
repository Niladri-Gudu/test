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

      showDetails(arr[dets.target.dataset.index])
      
    }
  })
}

function showDetails(data) {
  var clutter = "";
  clutter = `<div class="h-[70%] aspect-auto">
  <img class="h-full w-full overflow-hidden" src=${data.image} alt="">
</div><div data-lenis-prevent class="scroll w-[43%] p-6 bg-gray-100 rounded-xl h-[85%] overflow-x-scroll">
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">First name: </h2>
      <p class="text-xl">${data.firstName}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Last name: </h2>
      <p class="text-xl">${data.lastName}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Age: </h2>
      <p class="text-xl">${data.age}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Gender: </h2>
      <p class="text-xl">${data.gender}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Email: </h2>
      <p class="text-xl">${data.email}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Phone: </h2>
      <p class="text-xl">${data.phone}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Username: </h2>
      <p class="text-xl">${data.username}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Password: </h2>
      <p class="text-xl">${data.password}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Birth Date: </h2>
      <p class="text-xl">${data.birthDate}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Blood Group: </h2>
      <p class="text-xl">${data.bloodGroup}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Height: </h2>
      <p class="text-xl">${data.height}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Weight: </h2>
      <p class="text-xl">${data.weight}</p>
  </div>
  <div class=" items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Hair: </h2>
      <div class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Color: </h2>
          <p class="text-xl">${data.hair.color}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Type: </h2>
          <p class="text-xl">${data.hair.type}</p>
      </div>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Domain: </h2>
      <p class="text-xl">${data.domain}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">IP address: </h2>
      <p class="text-xl">${data.ip}</p>
  </div>
  <div class=" items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Address: </h2>
      <div class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Address: </h2>
          <p class="text-xl">${data.address.address}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">City: </h2>
          <p class="text-xl">${data.address.city}</p>
      </div>
      <div  class="items-center justify-start pl-10">
          <h2 class="font-bold text-xl">Coordinates: </h2>
          <div class="flex items-center justify-start pl-10 gap-2">
              <h2 class="font-bold text-xl">Latitude: </h2>
              <p class="text-xl">${data.address.coordinates.lat}</p>
          </div>
          <div  class="flex items-center justify-start pl-10 gap-2">
              <h2 class="font-bold text-xl">Longitude: </h2>
              <p class="text-xl">${data.address.coordinates.lng}</p>
          </div>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Postal Code: </h2>
          <p class="text-xl">${data.address.postalCode}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">State: </h2>
          <p class="text-xl">${data.address.state}</p>
      </div>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">MAC address: </h2>
      <p class="text-xl">${data.macAddress}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">University: </h2>
      <p class="text-xl">${data.university}</p>
  </div>
  <div class=" items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Bank: </h2>
      <div class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Card Expire: </h2>
          <p class="text-xl">${data.bank.cardExpire}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Card Number: </h2>
          <p class="text-xl">${data.bank.cardNumber}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Card type: </h2>
          <p class="text-xl">${data.bank.cardType}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Currency: </h2>
          <p class="text-xl">${data.bank.currency}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">iBan: </h2>
          <p class="text-xl">${data.bank.iban}</p>
      </div>
  </div>
  <div class=" items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">Company: </h2>
      <div  class="items-center justify-start pl-10">
          <h2 class="font-bold text-xl">Address: </h2>
          <div class="flex items-center justify-start pl-10 gap-2">
              <h2 class="font-bold text-xl">Address: </h2>
              <p class="text-xl">${data.address.address}</p>
          </div>
          <div  class="flex items-center justify-start pl-10 gap-2">
              <h2 class="font-bold text-xl">City: </h2>
              <p class="text-xl">${data.address.city}</p>
          </div>
          <div  class="items-center justify-start pl-10">
              <h2 class="font-bold text-xl">Coordinates: </h2>
              <div class="flex items-center justify-start pl-10 gap-2">
                  <h2 class="font-bold text-xl">Latitude: </h2>
                  <p class="text-xl">${data.address.coordinates.lat}</p>
              </div>
              <div  class="flex items-center justify-start pl-10 gap-2">
                  <h2 class="font-bold text-xl">Longitude: </h2>
                  <p class="text-xl">${data.address.coordinates.lng}</p>
              </div>
          </div>
          <div class="flex items-center justify-start pl-10 gap-2">
              <h2 class="font-bold text-xl">Postal Code: </h2>
              <p class="text-xl">${data.address.postalCode}</p>
          </div>
          <div  class="flex items-center justify-start pl-10 gap-2">
              <h2 class="font-bold text-xl">State: </h2>
              <p class="text-xl">${data.address.state}</p>
          </div>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Department: </h2>
          <p class="text-xl">${data.company.department}</p>
      </div>
      <div  class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Name: </h2>
          <p class="text-xl">${data.company.name}</p>
      </div>
      <div class="flex items-center justify-start pl-10 gap-2">
          <h2 class="font-bold text-xl">Title: </h2>
          <p class="text-xl">${data.company.title}</p>
      </div>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">EIN: </h2>
      <p class="text-xl">${data.ein}</p>
  </div>
  <div class="flex items-center justify-start gap-2 pt-1">
      <h2 class="font-bold text-xl">SSN: </h2>
      <p class="text-xl">${data.ssn}</p>
  </div>
</div>`

  document.querySelector('.detailsss').innerHTML = clutter;
}

document.querySelector('.cross').addEventListener('click', function(){
  document.querySelector(".details").style.display = "none";
  document.querySelector(".details").style.position = "relative";
  document.querySelector(".details").style.visibility = "hidden";
})

apiReq()
viewDetails()










// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
// lenis.on('scroll', ScrollTrigger.update)
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })
// gsap.ticker.lagSmoothing(0)