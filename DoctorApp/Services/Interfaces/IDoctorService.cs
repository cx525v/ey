using System.Collections.Generic;
using DoctorApp.Model;

namespace DoctorApp.Services.Interfaces
{
    /// <summary>
    /// interface of service
    /// </summary>
    public interface IDoctorService
    {
        IEnumerable<Doctor> GetDoctorList();
        Doctor GetDoctorDetails(int Id);
    }
}
