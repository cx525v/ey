using System.ComponentModel.DataAnnotations;

namespace DoctorApp.Model
{
    public class Language
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(128)]
        public string Name { get; set; }
    }
}
