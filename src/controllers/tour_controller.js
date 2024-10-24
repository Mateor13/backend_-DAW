import tourModel from '../models/tour.js'

const getAllToursController = async (req,res) => {
  try {
    const tours = await tourModel.getAllToursModel()
    res.status(200).json(tours)
  } catch (error) {
    console.log(error)
  }
}
//Exportación nombrada: Se exportan varias cosas
//Export default -> Exporta solo una cosa
export{
    getAllToursController
}
