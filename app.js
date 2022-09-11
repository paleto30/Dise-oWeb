document.addEventListener("DOMContentLoaded",()=>{
    getService();
    getTeam();
    getOpinion();
});

// funciones que me gestionan las apis


/*
    Funcion para servicios ========================================================================================================================================================
*/
const api3 = "data/service.json";
const getService = async () =>{

    try {
        const response = await fetch(api3);
        const result = await response.json();
        console.log("servicio",result);
        const contenService = document.querySelector("#service");
        let html = "";

        result.forEach(element => {
            const {servicio,img,descripcion} = element;
            html += `
                    <div class="col-12 col-md-4 text-center cards">
                        <div class="card cd-service" style="width:500px">
                            <div class="card-body">
                                <h2 class="card-title">${servicio}</h2>
                                <img class="card-img-bottom" src="${img}" alt="Card image" style="width:100%">
                                <p class="card-text mt-2">${descripcion}</p>
                            </div>     
                        </div>
                    </div>
            `;
            contenService.innerHTML = html;
        });
        
    } catch (error) {
        console.log(error);
    }
};

/*
    funcion para equipo =================================================================================================================================================================
*/
const api2 = "data/team.json";
const getTeam = async () =>{

    try {
        const response = await fetch(api2);
        const result = await response.json();
        console.log("team",result); 

        const contenTeam = document.querySelector("#team");
        let html = "";

        result.forEach(element => {
            const {seccion,image,descripcion} = element;
            html += `
                    <div class="col-12 col-md-4 text-center cards ">
                        <div class="card cd-team" style="width:500px">
                            <div class="card-body">
                                <h2 class="card-title">${seccion}</h2>
                                <img class="card-img-bottom" src="${image}" alt="Card image" style="width:100%">
                                <p class="card-text mt-2">${descripcion}</p>
                            </div>     
                        </div>
                    </div>            
            `;
            contenTeam.innerHTML = html;
        });

    } catch (error) {
        console.log(error);
    }
;}



/*  
    funcio para opiniones=======================================================================================================================================================
*/
const api = "data/opiniones.json";
const getOpinion = async () =>{

    try {

        const response = await fetch(api);
        const result = await response.json();
        console.log("opinion",result);
        const contenOpinion = document.querySelector("#opinion");
        let html ="";

        result.forEach(element => {
             const {image,nombre,opinion,fecha} = element;
             html += `
                    <div class="col-12 col-md-6 cards" >
                    <div class="card mb-3" style="max-width: 80%;">
                        <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${image}" class="rounded" alt="..." style="width: 180px;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h2 class="card-title text-primary nn">${nombre}</h2>
                            <p class="card-text">${opinion}</p>
                            <p class="card-text"><small class="text-muted">${fecha}</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
             `; 
             contenOpinion.innerHTML = html;
        });
    } catch (error) {
        console.log(error);
    }
};





