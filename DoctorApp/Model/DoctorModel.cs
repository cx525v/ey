using System.Linq;
using System.Text;

namespace DoctorApp.Model
{
    public partial class Doctor
    {
        public string Specialties
        {
            get
            {
                var sb = new StringBuilder();
                foreach (var ds in DoctorSpecialties)
                {

                    sb.Append(ds.Specialty.Name);
                    sb.Append(",");

                }

                return sb.ToString().Trim(',');
            }

        }

        public string AverageRating
        {
            get
            {
                return PatientRatings.Average(x => x.Rating).ToString("0.##");
            }
        }

        public bool IsSuperStar
        {
            get
            {
                int total = PatientRatings.Count();
                if (total == 0)
                    return false;
                int fiveStars = PatientRatings.Where(x => x.Rating == 5).Count();

                return (decimal)fiveStars / total > 0.85m;
            }

        }
    }
}
