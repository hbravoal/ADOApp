﻿using System;
using System.Globalization;

namespace ADOAPI.Domain.Exceptions
{
    public class AuthException : Exception
    {
        public AuthException() : base() { }

        public AuthException(string message) : base(message) { }

        public AuthException(string message, params object[] args)
            : base(String.Format(CultureInfo.CurrentCulture, message, args))
        {
        }
    }
}
