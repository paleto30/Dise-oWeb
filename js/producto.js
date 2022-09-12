document.addEventListener("DOMContentLoaded",()=>{
    getService();

});


const url = "data/allService.json";
const getService = async () =>{

    try {

        const response = await fetch(url);
        const result = await response.json();
        
        const contenService = document.querySelector("#allService");
        let html = "";

        result.forEach(element => {
            const {servicio, img, descripcion} = element;
            html +=`

            <div class="col-12 col-md-3 text-center cards">
                <div class="card cd-service" style="width:500px">
                    <div class="card-body">
                        <h2 class="card-title">${servicio}</h2>
                        <p class="card-text mt-2">${descripcion}</p>
                        <img class="card-img-bottom" src="${img}" alt="Card image" style="width:100%">            
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