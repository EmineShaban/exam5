import * as api from "./api.js"

export const login = api.login
export const register = api.register
export const logout = api.logoutB

export async function getAllMemes(){
    return api.get('/data/memes?sortBy=_createdOn%20desc')
}

export async function getMemById(id){
    return api.get('/data/memes/' +id)
}

export async function getMyMems(userId){
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function createMem(pet){
    return api.post('/data/memes', pet)
}

export async function editMem(id, toy){
    return api.put('/data/memes/' + id, toy)
}

export async function deleteMem(id){
    return api.del('/data/memes/' + id)
}

export async function likeToy(bookId){
    return api.post('/data/likes/', {
    bookId
    })
}

export async function searchToy(query){
    return api.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
}


export async function donationPet(petId) {
    return await api.post(`/data/donation`, petId);
}

export async function getTotalDonationCount(petId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}


export async function didUserDonation(petId, userId){
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}