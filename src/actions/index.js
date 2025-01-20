import axios from 'axios';

export const fetchAnimals = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/animals'); 
  dispatch({ type: 'FETCH_ANIMALS', payload: response.data });
};
