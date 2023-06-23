using System.Collections.Generic;
using ADOAPI.Domain.Enums;
using ADOAPI.Domain.Wrappers;
using AutoMapper.Configuration;

namespace ADOAPI.Application.Interfaces
{
    public interface IApiService
    {
        IConfiguration Configuration { get; }

        //Response<T> Get<T>(string siteBase, string baseAPI, string action, Dictionary<string, string> headers);
        Response<T> Post<T>(string siteBase, string action, Dictionary<string, string> headers, dynamic model, AuthenticationModule authentication);
    }
}