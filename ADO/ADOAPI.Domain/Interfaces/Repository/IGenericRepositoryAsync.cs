using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ADOAPI.Domain.Interfaces.Repository
{
    public interface IGenericRepositoryAsync<T> where T : class
    {
        Task<T> GetByIdAsync(int id);
        IQueryable<T> GetById(Expression<Func<T, bool>> match, params Expression<Func<T, object>>[] includeProperties);
        Task<IReadOnlyList<T>> GetAllAsync();
        Task<IReadOnlyList<T>> GetPagedResponseAsync(int pageNumber, int pageSize);
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        IQueryable<T> GetPagedResponseAsync(int pageNumber, int pageSize, Expression<Func<T, bool>> match, params Expression<Func<T, object>>[] includeProperties);
        IQueryable<T> GetPagedResponseAsync(int pageNumber, int pageSize, params Expression<Func<T, object>>[] includeProperties);
        IQueryable<T> GetByFilters(int pageNumber, int pageSize, Expression<Func<T, bool>> match);
        IQueryable<T> GetByFilters(Expression<Func<T, bool>> match);
    }
}
