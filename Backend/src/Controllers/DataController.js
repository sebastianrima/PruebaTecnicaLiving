//imports
import data from "../Assets/Data.json" assert {type: "json"};

//send data when requested or error message
export const get = async (req,res) => {
    try {
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
};