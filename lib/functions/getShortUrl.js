import axios from 'axios';

export default async function getShortUrl(url) {
    const request = await axios.create({
            baseURL: 'http://localhost:5000/api/tiny',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*',
                'Content-Type' : 'application/json'
            }
        }
    );
    const response = await request.post('', {longURL: url});
    return response.data.shortURL;
}