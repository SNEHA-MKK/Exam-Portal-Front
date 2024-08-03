import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI = async(reqbody)=>{
     return await commonAPI('POST',`${serverUrl}/user/register`,reqbody,"")
}

//login
export const loginApi = async(reqbody)=>{
     return await commonAPI('POST',`${serverUrl}/user/login`,reqbody,"")
}

//add admin profile
export const addAdminProfileApi = async(reqbody,reqHeader)=>{
     return await commonAPI('POST',`${serverUrl}/adminProfile`,reqbody,reqHeader)
}

//get admin profile
export const getAdminProfileApi = async()=>{
     return await commonAPI('GET',`${serverUrl}/admin-details`,"","")
}

//addCatogary - admin
export const addAdCategoryApi  = async(reqbody,reqHeader)=>{
     return await commonAPI('POST',`${serverUrl}/admin-category`,reqbody,reqHeader)
 }

 //get all category - admin
export const getAllAdmCategory = async(reqHeader)=>{
     return await commonAPI('GET',`${serverUrl}/admin-getcategory`,"",reqHeader)
 }

 //delete a category -admin

export const deleteACategoryApi = async(id,reqHeader)=>{
     return await commonAPI('DELETE',`${serverUrl}/delete-category/${id}`,{},reqHeader)
 }

 //update category-admin
export const updateCategoryApi = async(id,reqbody,reqHeader)=>{
     return await commonAPI('PUT',`${serverUrl}/update-AdmCategory/${id}`,reqbody,reqHeader)
 }

 //addQuizzes - admin
export const addAdmQuizApi  = async(reqbody,reqHeader,id)=>{
     return await commonAPI('POST',`${serverUrl}/admin-quizz/${id}`,reqbody,reqHeader)
 }
 
 //get all quizzes - admin
export const getAllAdmQuiz = async(id,reqHeader)=>{
     return await commonAPI('GET',`${serverUrl}/admin-getquiz/${id}`,"",reqHeader)
 }

 
 //addQuestions - admin
export const addQueApi  = async(reqbody,reqHeader,id)=>{
     return await commonAPI('POST',`${serverUrl}/admin-question/${id}`,reqbody,reqHeader)
 }
 