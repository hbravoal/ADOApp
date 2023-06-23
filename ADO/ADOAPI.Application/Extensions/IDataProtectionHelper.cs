namespace ADOAPI.Application.Extensions
{
    public interface IDataProtectionHelper
    {
        string Decrypt(string cipherText);
        string Encrypt(string textToEncrypt);
    }
}