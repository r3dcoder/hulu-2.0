import requests from '../../utils/requests'

export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
     
    console.log(req);
    const { genre } = req.genre;
    // console.log(genre);
    const apiResponse = await fetch(
        `https://api.themoviedb.org/3/${
              requests['fetchTrending']?.url }`
        
        ).then(res => res.json());

    res.status(200).json({apiResponse })
    }
 

