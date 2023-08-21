import axios from "axios";

const customApi = axios.create();

// customApi.interceptors.request.use((req)=>{
//      return req;
// },(error)=>{
//     return new Promise((resolve,reject)=>{
//         reject(error);
//     })
// })

//  customApi.interceptors.response.use((res)=>{
//     console.log(`hello this my status ${res.status}`);
//     return res;
//   },(error)=>{
//       return new Promise((resolve,reject)=>{
//           reject(error);
//       })
//   })

  export default customApi;