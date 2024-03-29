import requests from '../../utils/requests'

export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    const { genre } = req.genre;
    
    // const { pageNumber } = req.query;
    // console.log(pageNumber);
    const apiResponse = await fetch(
      `https://api.themoviedb.org/3/${
            requests[genre]?.url || requests.fetchTrending.url }`
      
      ).then(res => res.json());

    res.status(200).json({apiResponse })
    }
 

