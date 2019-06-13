using System.ComponentModel.DataAnnotations;

namespace DoctorApp.Model
{
    public class DoctorSpecialty
    {
        [Key]
        public int Id { get; set; }

        [Required]        
        public int DoctorId { get; set; }

        [Required]
        public int SpecialtyId { get; set; }

        //public Doctor Doctor { get; set; }

        public Specialty Specialty { get; set; }
    }
}

