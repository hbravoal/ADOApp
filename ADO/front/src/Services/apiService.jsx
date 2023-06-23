import axios from 'axios';

export const  GET =  async (url,action,headers={})  => {
    try {
        const {data}=   await axios.get(`${url}/${action}`,headers);    
        return {
            Data:data,
            Error:false
        }
    } catch (error) {
        return {
            ErrorMessage:'Ocurrió un error inesperado',
            Error:true            
        }
    }
}


export const  POST =  async (url,baseapi,action,dataBody,headers,initialState={})  => {
      try {
        const result= await axios.post(`${url}/${baseapi}/${action}`,dataBody,{headers})        
        if(!result || !result.status){
            return  {
                Error:true,
                ErrorMessage:'Ha ocurrido un error de conexión, por favor intente más tarde.'
            }
        }
        if(result.status===200){
            return  {
                Error:false,
                Data:result.data
            }
        }
      } catch (error) {
        if(!error.response){
            return {
                Error:true,
                ErrorMessage:'Ha ocurrido un error inesperado, por favor intente mas tarde.'
                
            }
        } 
            return {
                Error:true,
                ErrorMessage:'Ha ocurrido un error.',
                StatusCode:parseInt(error.response.status)
            }
        
          
      }
}