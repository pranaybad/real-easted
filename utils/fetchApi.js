import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com/"



export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'd227dd0e0emsha2838d28fb12070p1cc320jsn9dc8619301dc'
        }
    });
    return data;
}









// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'd227dd0e0emsha2838d28fb12070p1cc320jsn9dc8619301dc'
//   }