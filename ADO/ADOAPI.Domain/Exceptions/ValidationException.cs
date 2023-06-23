using System;
using System.Collections.Generic;
using ADOAPI.Domain.Enums;
using FluentValidation.Results;

namespace ADOAPI.Domain.Exceptions
{
    public class ValidationException : Exception
    {
        public ValidationException() : base("One or more validation failures have occurred.")
        {
            Errors = new List<ErrorDetail>();
        }
        public List<ErrorDetail> Errors { get; }
        public ValidationException(IEnumerable<ValidationFailure> failures)
            : this()
        {
            foreach (var failure in failures)
            {
                Errors.Add(new ErrorDetail { 
                ErrorCode= ErrorCode.RequestError,
                    ErrorMessage= failure.ErrorMessage
                });
            }
        }
        public ValidationException(IEnumerable<ErrorDetail> failures)
         : this()
        {
            foreach (var failure in failures)
            {
                Errors.Add(failure);
            }
        }
        public ValidationException(ErrorCode errorCode,string errorMessage)
         : this()
        {
            
                Errors.Add(new ErrorDetail { 
                ErrorCode=errorCode,
                ErrorMessage=errorMessage
                });
            
        }
    }
}
