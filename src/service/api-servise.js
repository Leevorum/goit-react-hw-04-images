import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const KEY = '26707302-c4002c16b6eea875c4b1f9ef4';

export default async function getImages(name, page) {
  try {
    const response = await axios.get(
      `${baseURL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
