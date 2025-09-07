

/* fetch the categori items */
console.log("connected the js file")
const loadcategoris = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(categories => displayCategori(categories.categories))
}

// display the categories here

const displayCategori = (allcategoris) => {
    const categorisId = document.getElementById("categoris-id");

    for(let categori of allcategoris){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div id="plant-catagori-id" onclick="plantsshows(${categori.id})"><h3 class="hover:bg-[#15803D] p-[7px] rounded-xl text-[#1F2937] cursor-pointer">${categori.category_name}</h3> <br></div>`;

        categorisId.appendChild(newDiv);
        
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
            <h2 class="card-title">
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



loadcategoris();


