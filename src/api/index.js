/*
    包含n个前端需要发送的请求函数
    每个函数都是返回promise对象（fetch、axios 都是返回promise对象，通过promise链得到服务器返回的数据）
 */

import ajax from "./ajax";
export const reqRegister = (user) => ajax('http://127.0.0.1:8080/user/register',user,'POST')
export const reqLogin = (user) => ajax('http://127.0.0.1:8080/user/login',user,'POST')
export const reqShowList_Selected = (param) => ajax('http://127.0.0.1:8080/category/selected',param,'GET')
export const reqShowList_Delicious = (param) => ajax('http://127.0.0.1:8080/category/delicious',param,'GET')
export const reqShowList_Recommend = (param) => ajax('http://127.0.0.1:8080/category/recommend',param,'POST')
export const reqGet_Detail = (data) => ajax('http://127.0.0.1:8080/getSelectDetail',data,'GET')
export const reqGet_Del_Detail = (data) => ajax('http://127.0.0.1:8080/getDeliciousDetail',data,'GET')
export const reqAdd_Comment = (data) => ajax('http://127.0.0.1:8080/addComment',data,'POST')
export const reqAdd_DelComment = (data) => ajax('http://127.0.0.1:8080/addDelComment',data,'POST')
export const reqGet_CommentByTid = (data) => ajax('http://127.0.0.1:8080/getCommentByTid',data,'GET')
export const reqGet_DelCommentById = (data) => ajax('http://127.0.0.1:8080/getDelCommentByFid',data,'GET')
export const reqAdd_Trip_TravelNote = (data) => ajax('http://127.0.0.1:8080/addTripTravelNote',data,'POST')
export const reqGet_Trip_TravelNote = () => ajax('http://127.0.0.1:8080/getTripTravelNote',{},'GET')
export const reqGet_Trip_TravelNote_ID = (data) => ajax('http://127.0.0.1:8080/getTripTravelNoteById',data,'GET')