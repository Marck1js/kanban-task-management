const localhost = 'http://localhost:6600';
const path = '/boards'

export const getBoards = async () => {
    const boards = await fetch(`${localhost}`, {
        cache: 'no-cache',
        next: {
            tags: ['board']
        }
    })
        .then(e => {
    
            return e.json()
        })
        .catch(e => {
            return null;
        });
    return boards;
}   

export const setSubtasksComplete = async(id) => {

    console.log('---')
}