using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;

namespace ADOAPI.Persistence.Repositories
{
    public class GenericRepositoryAsync<T> : IGenericRepositoryAsync<T> where T : class
    {
        private readonly ApplicationDbContext _dbContext;

        public GenericRepositoryAsync(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IQueryable<T> GetByFilters(int pageNumber, int pageSize, Expression<Func<T, bool>> match)
        {
            IQueryable<T> queryable = _dbContext
                .Set<T>()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .Where(match)
                .AsNoTracking();
            
            return queryable;
        }
        public IQueryable<T> GetByFilters( Expression<Func<T, bool>> match)
        {
            IQueryable<T> queryable = _dbContext
                .Set<T>()                
                .Where(match)
                .AsNoTracking();

            return queryable;
        }

        public  IQueryable<T> GetPagedResponseAsync(int pageNumber, int pageSize,Expression<Func<T, bool>> match,params Expression<Func<T, object>>[] includeProperties)
        {
            IQueryable<T> queryable =  _dbContext
                .Set<T>()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .Where(match)
                .AsNoTracking();
                
            foreach (Expression<Func<T, object>> includeProperty in includeProperties)
            {
                queryable = queryable.Include<T, object>(includeProperty);
            }
            return queryable;
        }
        public  IQueryable<T> GetPagedResponseAsync(int pageNumber, int pageSize,params Expression<Func<T, object>>[] includeProperties)
        {
            IQueryable<T> queryable =  _dbContext
                .Set<T>()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .AsNoTracking();
                
            foreach (Expression<Func<T, object>> includeProperty in includeProperties)
            {
                queryable = queryable.Include<T, object>(includeProperty);
            }
            return queryable;
        }


        public   IQueryable<T> GetById(Expression<Func<T, bool>> match,params Expression<Func<T, object>>[] includeProperties)
        {
            var query = _dbContext.Set<T>()  .Where(match).AsQueryable();

            foreach (var prop in includeProperties)
            {
                query = query.Include(prop);
            }
            return query;
        }
        public virtual async Task<T> GetByIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }
        public async Task<IReadOnlyList<T>> GetPagedResponseAsync(int pageNumber, int pageSize)
        {
            return await _dbContext
                .Set<T>()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateAsync(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity) 
        {
            entity.GetType().GetProperty("Active")?.SetValue(entity, false);
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _dbContext
                 .Set<T>()
                 .ToListAsync();
        }
    }
}
