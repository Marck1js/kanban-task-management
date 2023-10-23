const localhost = 'http://localhost:8080';
const path = '/boards'

export const getBoards = async () => {
    const boards = await fetch(`${localhost}${path}`)
        .then(e => {
            return e.json()
        })
        .catch(e => {
            return null;
        });
  
    return boards;
}