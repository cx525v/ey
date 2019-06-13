using System;
using System.Threading.Tasks;
using DoctorApp.Services;
using DoctorApp.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DoctorApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private string CORSPolicy = "DefaultPolicy";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IDoctorService, DoctorService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            ConfigureCORS(services);
        }

        private void ConfigureCORS(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(CORSPolicy,
                    builder => {
                        builder
                        .SetIsOriginAllowedToAllowWildcardSubdomains()
                        .WithOrigins("*")
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                        builder.SetIsOriginAllowed(origin => true);
                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.Use(async (HttpContext context, Func<Task> next) =>
            {
                await next.Invoke();

                if (context.Response.StatusCode == 404 && !context.Request.Path.Value.Contains("/api"))
                {
                    context.Request.Path = new PathString("/index.html");
                    await next.Invoke();
                }
            });


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
        
            //DBHelper.CreateTable();
           
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseCors();
            app.UseMvc();

        }
    }
}
