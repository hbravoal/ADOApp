using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using ADOAPI.Application.Enums;
using ADOAPI.Application.Interfaces;
using ADOAPI.Application.Wrappers;
using AutoMapper.Configuration;
using Newtonsoft.Json;

namespace ADOAPI.Application.Extensions
{
    public class ApiService : IApiService
    {
        public ApiService(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
    
        public Response<T> Post<T>(string url, string action, Dictionary<string, string> headers, dynamic model, AuthenticationModule authentication)
        {
            Response<T> data = new Response<T>();
            try
            {
                HttpClient client = new HttpClient();

                // Add an Accept header for JSON format.
                client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Post,

                    RequestUri = new Uri(url + "/" + action),


                };
                if (model != null)
                {
                    request.Content = new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json");
                }
               
                // List data response.
                HttpResponseMessage response = client.SendAsync(request).Result; 
                if (response.IsSuccessStatusCode)
                {
                    var dataObjects = response.Content.ReadAsStringAsync().Result;
                    var result = JsonConvert.DeserializeObject<object>(dataObjects);
                }
                client.Dispose();


            }
            catch (System.Exception ex)
            {
                throw ex;
            }
            return data;
        }
    }
}