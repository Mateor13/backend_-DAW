const tourModel = {
    //Metodo
    async getAllToursModel(){
        try{
        const peticion = await fetch('http://localhost:4000/tours')
        const tours = await peticion.json()
        return tours
        }catch(error){
            console.log(error)
        }
    }


    ,
    async getTourModel(tourId){
        //1. Conexión a BDD 
        const url = `http://localhost:4000/tours/${tourId}`;
        //2. Evio de la petición 
        const peticion = await fetch(url, {
            method:"GET"
        });
        //Recibimiento de la respuesta
        const data = await peticion.json();

        // 4. Mandar respuesta al controlador
        return data;
    }
    ,
    async createTourModel(newTour){
        //1. Conexión a BDD 
        const url = "http://localhost:4000/tours";
        //2. Evio de la petición 
        const peticion = await fetch(url, {
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"Content-Type":"application-json"}
        });
        //Recibimiento de la respuesta
        const data = await peticion.json();

        // 4. Mandar respuesta al controlador
        return data;
    }
    ,
    async updateTourModel(tourId, updatedTour){
        //1. Conexión a BDD 
        const url = `http://localhost:4000/tours/${tourId}`;
        //2. Evio de la petición 
        const peticion = await fetch(url, {
            method:"PUT",
            body:JSON.stringify(updatedTour),
            headers:{"Content-Type":"application-json"}
        });
        //Recibimiento de la respuesta
        const data = await peticion.json();

        // 4. Mandar respuesta al controlador
        return data;
    }


    ,

    //DELETE
    async deleteTourModel(tourId){
        //1. Conexión a BDD 
        const url = `http://localhost:4000/tours/${tourId}`;
        //2. Evio de la petición 
        const peticion = await fetch(url, {
            method:"DELETE"
        });
        //Recibimiento de la respuesta
        const data = await peticion.json();

        // 4. Mandar respuesta al controlador
        return data;
    }

}

//Exportar
export default tourModel