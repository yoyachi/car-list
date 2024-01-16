import axios from "axios";

const searchImage = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zmHL1-pgeaO026vx2IcQChHPj6aGZAv8pedt9w-AXME'
        },

        params: {
            query: term,
        }


    });
   
    //to have more specific response write what you want to print from console when opening 
    return response.data.results;

};

export default searchImage;