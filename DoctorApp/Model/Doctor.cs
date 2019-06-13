using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DoctorApp.Model
{
    /// <summary>
    /// doctor class
    /// </summary>
    public partial class Doctor
    {
        public Doctor()
        {
            this.DoctorSpecialties = new HashSet<DoctorSpecialty>();
            this.PatientRatings = new HashSet<PatientRating>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(128)]
        public string Name { get; set; }


        [Required]
        [MaxLength(10)]
        public string Gender { get; set; }
       
        public int MedicalSchoolId { get; set; }


        [Required]
        public int LanguageId { get; set; }

        [Required]
        public Language Language { get; set; }

        public MedicalSchool MedicalSchool { get; set; }

        public ICollection<DoctorSpecialty> DoctorSpecialties { get; set; }

        public ICollection<PatientRating> PatientRatings { get; set; }
    }
}
