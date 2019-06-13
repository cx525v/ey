using System.ComponentModel.DataAnnotations;

namespace DoctorApp.Model
{
    public class PatientRating
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int DoctorId { get; set; }

        [MaxLength(128)]
        public string Comments { get; set; }

        [Required]
        public int Rating { get; set; }
    }
}
