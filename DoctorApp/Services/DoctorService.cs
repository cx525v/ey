using DoctorApp.Context;
using DoctorApp.Model;
using DoctorApp.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DoctorApp.Services
{
    public class DoctorService: IDoctorService
    {
        public IEnumerable<Doctor> GetDoctorList()
        {
            using (var context = new AppDBContext())
            {
                var result = context.Doctors
                    .Include(d => d.DoctorSpecialties)
                      .ThenInclude(ds=>ds.Specialty)
                    .Include(d=>d.PatientRatings);

                return result.ToList();
            }
        }

        public Doctor GetDoctorDetails(int Id)
        {
            using (var context = new AppDBContext())
            {
                var result = context.Doctors.Where(d=>d.Id == Id)
                    .Include(d => d.Language)
                    .Include(d => d.MedicalSchool)
                    .Include(d => d.DoctorSpecialties)
                      .ThenInclude(ds => ds.Specialty)
                    .Include(d => d.PatientRatings);

                return result.FirstOrDefault();
            }
        }
    }
}
