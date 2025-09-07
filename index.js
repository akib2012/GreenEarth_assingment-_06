

/* fetch the categori items */

const loadcategoris = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(categories => displayCategori(categories.categories))
}

// display the categories here

const displayCategori = (allcategoris) => {
    const categorisId = document.getElementById("categoris-id");

    for (let categori of allcategoris) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div id="plant-catagori-id" onclick="plantsshows(${categori.id})"><h3 class="hover:bg-[#15803D] p-[7px] rounded-xl text-[#1F2937] cursor-pointer">${categori.category_name}</h3> <br></div>`;

        categorisId.appendChild(newDiv);

    }


}

/* all trees load and shows here */

const loadalltrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(Response => Response.json())
        .then(allplants => allplantsdisplay(allplants.plants))
}

const allplantsdisplay = (allplants) => {
    const plat_card = document.getElementById("plats_cntainer");
    for (let allplant of allplants) {
        // console.log(allplant); /////
        const newplantcard = document.createElement("div");
        newplantcard.innerHTML = ` <div class="card bg-base-100 w-96 shadow-sm m-[10px] p-[10px] max-h-[450px]" id="plats_card">
        <figure clas="h-[340px]">
            <img src="${allplant.image}" alt="Shoes"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title cursor-pointer" onclick="showcarddetails(${allplant.id})">
                ${allplant.name}
            </h2>
            <p>${allplant.description}</p>
            <div class="card-actions justify-between items-center mt-[10px]">
                <div class="bg-[#DCFCE7] text-[#15803D] p-[7px] rounded-2xl">${allplant.category}</div>
                <div><span class="text-3xl">৳</span> ${allplant.price}</div>
            </div>
        </div>
        <div
            class="card-foot flex justify-center items-center w-[330px] bg-[#15803D] mx-auto mb-[20px] h-[30px] text-white rounded-2xl py-[5px]" id="id_allplats">
            <button id="addtocard_btn" type="button">Add to Cart</button>
        </div>
    </div>`;

    
        plat_card.appendChild(newplantcard);
    }
    

}


/* load al plants and shows them */

const plantsshows = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(respos => respos.json())
        .then(platsviews => showallplantes(platsviews.plants))
}

//shows the plants card here
const showallplantes = (plants) => {

    const plat_card = document.getElementById("plats_cntainer");
    plat_card.innerHTML = "";

    for (let plat of plants) {
        const newplantcard = document.createElement("div");
        newplantcard.innerHTML = ` <div class="card bg-base-100 w-96 shadow-sm m-[10px] p-[10px] max-h-[450px]" id="plats_card">
        <figure clas="h-[340px]">
            <img src="${plat.image}" alt="Shoes"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title cursor-pointer" onclick="showcarddetails(${plat.id})">
                ${plat.name}
            </h2>
            <p>${plat.description}</p>
            <div class="card-actions justify-between items-center mt-[10px]">
                <div class="bg-[#DCFCE7] text-[#15803D] p-[7px] rounded-2xl">${plat.category}</div>
                <div><span class="text-3xl">৳</span> ${plat.price}</div>
            </div>
        </div>
        <div
            class="card-foot flex justify-center items-center w-[330px] bg-[#15803D] mx-auto mb-[20px] h-[30px] text-white rounded-2xl py-[5px]">
            <button id="addtocard_btn" type="button ">Add to Cart</button>
        </div>
    </div>`;
        plat_card.appendChild(newplantcard);

    }
}

/* modal load and showing here */
const  showcarddetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(carddetils => showmodal(carddetils))
}

// modal showing here

const showmodal = (moadls) =>{
    my_modal.showModal();
    const modaldiv = document.getElementById("my_modal");
    modaldiv.innerHTML = ""; 
    const newmodaldiv = document.createElement("div");
      
    newmodaldiv.innerHTML = `<div class="modal-box w-fit h-fit p-[20px]">
            <h3 class="text-2xl font-bold"> ${moadls.plants.name}</h3>
            <img src=" ${moadls.plants.image}" alt="" class="w-full h-[300px] mask-cover mx-auto my-[10px] rounded-3xl">
            <p> <span class="text-lg font-bold">categori:</span> ${moadls.plants.category}</p>
            <p><span class="text-lg font-bold">proce: </span> ${moadls.plants.price}</p>
            <p ><span class="text-lg font-bold">description:</span> ${moadls.plants.description}</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>`;
    modaldiv.appendChild(newmodaldiv);
    
    
    

}



loadcategoris();
loadalltrees();



