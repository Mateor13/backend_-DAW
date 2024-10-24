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
}

//Exportar
export default tourModel