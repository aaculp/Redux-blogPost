import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    // Bad approach ... breaking rules of ACTION creator
    const response = await jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POST',
        payload: response
    }
}