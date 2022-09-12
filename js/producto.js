document.addEventListener("DOMContentLoaded",()=>{
    getProduct();
    getDrinks();

});


const url = "data/product.json";
const getProduct = async () =>{

    try {

        const response = await fetch(url);
        const result = await response.json();
        console.log(result.foot);
        const contenService = document.querySelector("#food");
        let html = "";

        result.food.forEach(element => {
            const {nom, img, ingred} = element;
            html +=`
            <div class="col-12 col-md-4 text-center cards">
                <div class="card cd-pro" style="width:500px">
                    <div class="card-body">
                        <h2 class="card-title">${nom}</h2>
                        <img class="card-img-bottom" src="${img}" alt="Card image" style="width:100%">      
                        <p class="card-text mt-2">${ingred}</p>      
                    </div>     
                </div>
            </div>
            `;
            contenService.innerHTML = html;
        });
    
    } catch (error) {  
        console.log(error);
    }

}

const url1 = "data/product.json";
const getDrinks = async () =>{

    try {

        const response = await fetch(url1);
        const result = await response.json();
        console.log(result.drink);
        const contenDrink = document.querySelector("#drink");
        let html = "";

        result.drink.forEach(element => {
            const {nomb, img} = element;
            html +=`
            <div class="col-12 col-md-4 text-center cards">
                <div class="card cd-pro" style="width:500px">
                    <div class="card-body">
                        <h2 class="card-title">${nomb}</h2>
                        <img class="card-img-bottom" src="${img}" alt="Card image" style="width:100%; border-radius: 0.3em;">      
                        <p class="card-text mt-2"></p>      
                    </div>     
                </div>
            </div>
            `;
            contenDrink.innerHTML = html;
        });
    
    } catch (error) {  
        console.log(error);
    }

}

