import {Login as LoginService} from 'Services/authService';
import {GET,POST} from './apiService';
import {ERROR,RESET_FORM,PROPERTIES,LOADING,PROGRESS ,RESET_CLIENT,CLIENT_INFO,TRY_LOAD,CLIENT_INFO_REFRESH,PRODUCT_DETAIL,CLIENT_ATTRIBUTES,CLIENT_ATTRIBUTES_REFRESH,CATALOG_DONATION} from 'Types';
import {getToken} from 'Services/authService';

export const LoginConsume = async(email,passwd) => {
    // dispatch({type:RESET_CLIENT});
    let headers= {
        
        
    }
    let requestData= {email: email ,password:passwd};
    let dataResult =await POST(process.env.API_URL,process.env.API_URL_BASE,
        process.env.API_ACTION_LOGIN,requestData,headers);
        
        if(dataResult.Error){
            switch (dataResult.StatusCode){
                case 404:
                    console.log(404)
                    break;
                    case 400:
                    console.log(400)
                    break;
            }
            if(dataResult.StatusCode===401){                
                return false;
            }
         console.log(dataResult);
          return false;
        }
        var jwt= dataResult.Data.data.jwToken;
        LoginService(jwt);        
        return true;
}

export const GetPropertiesConsume = async(dispatch) => {
    // dispatch({type:RESET_CLIENT});
    let headers= {
        Authorization: 'Bearer '+getToken(),
    }
    dispatch({type:PROGRESS,data:30});
    let dataResult =await GET(`${process.env.API_URL}/${process.env.API_URL_BASE}`,
        `${process.env.API_ACTION_PROPERTIES}?PageNumber=1&PageSize=20`,headers);
        dispatch({type:PROGRESS,data:60});
        if(dataResult.Error){
            switch (dataResult.StatusCode){
                case 404:
                    console.log(404)
                    break;
                    case 400:
                    console.log(400)
                    break;
            }
            if(dataResult.StatusCode===401){                
                return false;
            }
         console.log(dataResult);
          return [];
        }
        console.log(dataResult)
        var data= dataResult.Data.data;
        dispatch({type:PROGRESS,data:90});
        dispatch({type:PROPERTIES,data});
        dispatch({type:PROGRESS,data:100});
        dispatch({type:LOADING,data:false});
        
        return data;
}