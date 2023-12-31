﻿using ADOAPI.Domain.Enums;
using ADOAPI.Identity.Models;
using Microsoft.AspNetCore.Identity;

namespace ADOAPI.Identity.Seeds;

public static class DefaultSuperAdmin
{
    public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        //Seed Default User
        var defaultUser = new ApplicationUser
        {
            UserName = "superadmin",
            Email = "admin@gmail.com",
            FirstName = "Henry",
            Provider="Default",
            LastName = "Bravo",
            EmailConfirmed = true,
            PhoneNumberConfirmed = true
        };
        if (userManager.Users.All(u => u.Id != defaultUser.Id))
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "123Pa$$word!");
                await userManager.AddToRoleAsync(defaultUser, Roles.Basic.ToString());                    
                await userManager.AddToRoleAsync(defaultUser, Roles.Admin.ToString());
                await userManager.AddToRoleAsync(defaultUser, Roles.SuperAdmin.ToString());
            }

        }
    }
}