import axios from "axios";

const searchImage = async () => {

    const response = await axios.get('http://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zmHL1-pgeaO026vx2IcQChHPj6aGZAv8pedt9w-AXME'
        },

        params: {
            query: "cars"
        }


    });
    console.log(response);

    return response;

};

export default searchImage;