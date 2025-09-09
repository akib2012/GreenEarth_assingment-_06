

/* fetch the categori items */

const loadcategoris = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(categories => {
            
            displayCategori(categories.categories)
            
        })
}

/* remove all categri button style function */
const removeStyle = () =>{
    const remCaterogi  = document.querySelectorAll(".cartegori-class")
    remCaterogi.forEach(btn => btn.classList.remove("activebtn"))
}

// display the categories here

const displayCategori = (allcategoris) => {
    const categorisId = document.getElementById("categoris-id");

    for (let categori of allcategoris) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div  onclick="plantsshows(${categori.id})"><h3 id="plant-catagori-id-${categori.id}" class="hover:bg-[#15803D] p-[7px] rounded-xl text-[#1F2937] cursor-pointer cartegori-class">${categori.category_name}</h3> <br></div>`;

        categorisId.appendChild(newDiv);

    }


}

/* **spinner manager here* */

const managespinner = (status) => {
    if (status === true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("plats_cntainer").classList.add("hidden");
    } else {
        document.getElementById("plats_cntainer").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");

    }
}




/* all trees load and shows here */

const loadalltrees = () => {
    managespinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(Response => Response.json())
        .then(data => {

            allplantsdisplay(data.plants);

        })
}

const allplantsdisplay = (allplants) => {
    const plat_card = document.getElementById("plats_cntainer");
    for (let allplant of allplants) {
        const newplantcard = document.createElement("div");
        newplantcard.innerHTML = ` <div class="card bg-base-100 w-96 shadow-sm mx-[7px] my-[10px] sm:m-[10px] p-[8px] sm:p-[10px] max-h-[450px]" id="plats_card">
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
            class="card-foot addtocard_btn flex justify-center items-center w-[330px] bg-[#15803D] mx-auto mb-[20px] h-[30px] text-white rounded-2xl py-[5px]" id="id_allplats">
            <button  type="button">Add to Cart</button>
        </div>
    </div>`;
        newplantcard.querySelectorAll(".addtocard_btn").forEach(btn => {
            btn.addEventListener("click", function () {
                billingcardsshows(allplant);
            });
        });


        plat_card.appendChild(newplantcard);
        managespinner(false);
    }

}


/* load al plants and shows them */

const plantsshows = (id) => {
    managespinner(true);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(respos => respos.json())
        .then(platsviews => {
            removeStyle();
            const clickCategory = document.getElementById(`plant-catagori-id-${id}`)
            clickCategory.classList.add("activebtn")
            showallplantes(platsviews.plants)
        })
        
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
            class="card-foot addtocard_btn flex justify-center items-center w-[330px] bg-[#15803D] mx-auto mb-[20px] h-[30px] text-white rounded-2xl py-[5px]">
            <button  type="button ">Add to Cart</button>
        </div>
    </div>`;
        newplantcard.querySelectorAll(".addtocard_btn").forEach(btn => {
            btn.addEventListener("click", function () {
                billingcardsshows(plat);
            });
        });
        plat_card.appendChild(newplantcard);
        managespinner(false);

    }
}

/*  here billing card showing  */

const billingcardsshows = (cards) => {
    alert("plant added !!");
    const myCard = document.getElementById("my_card");
    const newCard = document.createElement("div");
    const tottalprice = document.getElementById("total_price").innerText;

    const treePrice = cards.price;


    const finalPrice = Number(tottalprice) + Number(treePrice);

    document.getElementById("total_price").innerText = finalPrice;

    newCard.innerHTML = `<div  class=" w-[280px] sm:w-[170px] h-[70px] bg-[#f5faf1] mx-auto rounded-xl flex justify-between items-center px-[7px] mb-[20px]">
                            <div class="left">
                                <h3>${cards.name}</h3>
                                <p class="text-gray-400">৳ <span>${cards.price}</span> x <span>1</span></p>
                            </div>
                            <div class="remove-btn">
                                <i id="remove_card" class="fa-solid fa-xmark"></i>
                            </div>
                        </div>`;

    const removeBtn = newCard.querySelector(".remove-btn i");
    removeBtn.addEventListener("click", function () {
        removedata(newCard, cards.price);
    });

    myCard.appendChild(newCard);



}


/* delet the bill cards */
function removedata(cardDiv, price) {
    // alert("remove card!");
    cardDiv.remove(); 
    const totalPriceEl = document.getElementById("total_price");
    totalPriceEl.innerText = Number(totalPriceEl.innerText) - Number(price);
}


/* modal load and showing here */
const showcarddetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(carddetils => showmodal(carddetils))
}

// modal showing here

const showmodal = (moadls) => {
    my_modal.showModal();
    const modaldiv = document.getElementById("my_modal");
    modaldiv.innerHTML = "";
    const newmodaldiv = document.createElement("div");

    newmodaldiv.innerHTML = `<div class="modal-box w-fit h-fit p-[20px] mx-[20px] sm:m-[0px]">
            <h3 class="text-2xl font-bold"> ${moadls.plants.name}</h3>
            <img src=" ${moadls.plants.image}" alt="" class="w-full h-[300px] mask-cover mx-auto my-[10px] rounded-3xl">
            <p> <span class="text-lg font-bold">categori:</span> ${moadls.plants.category}</p>
            <p><span class="text-lg font-bold">proce: ৳ </span> ${moadls.plants.price}</p>
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



