using DoctorApp.Model;
using Microsoft.EntityFrameworkCore;

namespace DoctorApp.Context
{
    public class AppDBContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<DoctorSpecialty> DoctorSpecialties { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<MedicalSchool> MedicalSchools { get; set; }
        public DbSet<PatientRating> PatientRatings { get; set; }
        public DbSet<Specialty> Specialties { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($"Data Source={AppConfig.DatabaseName}");
        }      
        
    }
}