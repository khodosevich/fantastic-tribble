import axios from "axios";


let instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "0324ee1c-77a4-42ba-b072-51841a95f51c"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getUsers = async (currentPage = 1 , pageSize = 10) => {
   return await instance.get(  `users?page=${currentPage}&count=${pageSize}`).then(r => r.data)
}

export const unFollow = async (userId) => {
   return await instance.delete(  `follow/${userId}`).then(r => r.data)
}

export const follow = async (userId) => {
   return await instance.post( `follow/${userId}` ).then(r => r.data)
}

export const getUserById = async (profileId) => {
  return await instance.get( `profile/${profileId}`)
      .then(r => r.data)
}

export const authMe = async () => {
    return await instance.get( "auth/me", ).then(r => r.data)
}