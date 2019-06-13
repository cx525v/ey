using DoctorApp.Context;
using DoctorApp.Model;
using System.Linq;

namespace DoctorApp
{
    public class DBHelper
    {
        public static void CreateTable()
        {
            string dbName = AppConfig.DatabaseName;

            using (var dbContext = new AppDBContext())
            {
               if (dbContext.Doctors != null && !dbContext.Doctors.Any())
                {
                    dbContext.Specialties.AddRange(new Specialty[]
                   {
                        new Specialty {Id =1, Name ="ALLERGY & IMMUNOLOGY"},
                        new Specialty {Id =2, Name ="ANESTHESIOLOGY"},
                        new Specialty {Id =3, Name ="DERMATOLOGY"},
                        new Specialty {Id =4, Name ="DIAGNOSTIC RADIOLOGY"},
                        new Specialty {Id =5, Name ="EMERGENCY MEDICINE"},
                   });

                    dbContext.Languages.AddRange(new Language[] {
                         new Language{Id = 1, Name ="English"},
                         new Language{Id = 2, Name ="Spanish"}

                    });

                    dbContext.MedicalSchools.AddRange(new MedicalSchool[]
                    {
                        new MedicalSchool {Id =1, Name = "Gerogia Medical School"},
                        new MedicalSchool {Id =2, Name = "Emory Medical School"},
                        new MedicalSchool {Id =3, Name = "Carolina Medical School"},
                    });

                    dbContext.Doctors.AddRange(new Doctor[]
                        {
                             new Doctor{  Id =1,  Name="John LastName1", Gender="Male", LanguageId =1, MedicalSchoolId =1 },
                             new Doctor{  Id =2,  Name="Scott LastName2", Gender="Male", LanguageId =2, MedicalSchoolId =2  },
                             new Doctor{  Id =3,  Name="Alycia LastName3", Gender="Female", LanguageId =2, MedicalSchoolId =1  },
                             new Doctor{  Id =4,  Name="Jennifer LastName4", Gender="Female", LanguageId =2, MedicalSchoolId =2  },
                             new Doctor{  Id =5,  Name="Matt LastName5", Gender="Male", LanguageId =1, MedicalSchoolId =2  },
                             new Doctor{  Id =6,  Name="William LastName6", Gender="Male", LanguageId =2, MedicalSchoolId =1  },
                        });

                    dbContext.DoctorSpecialties.AddRange(new DoctorSpecialty[]
                        {
                             new DoctorSpecialty{  Id =1,  DoctorId =1, SpecialtyId =1 },
                             new DoctorSpecialty{  Id =2,  DoctorId =1, SpecialtyId =2 },
                             new DoctorSpecialty{  Id =3,  DoctorId =2, SpecialtyId =1 },
                             new DoctorSpecialty{  Id =4,  DoctorId =2, SpecialtyId =3 },
                             new DoctorSpecialty{  Id =5,  DoctorId =3, SpecialtyId =1 },
                             new DoctorSpecialty{  Id =6,  DoctorId =4, SpecialtyId =1 },
                             new DoctorSpecialty{  Id =7,  DoctorId =4, SpecialtyId =3 },
                             new DoctorSpecialty{  Id =8,  DoctorId =5, SpecialtyId =1 },
                             new DoctorSpecialty{  Id =9,  DoctorId =5, SpecialtyId =2 },
                             new DoctorSpecialty{  Id =10, DoctorId =5, SpecialtyId =3 },
                             new DoctorSpecialty{  Id =11, DoctorId =6, SpecialtyId =2 },
                             new DoctorSpecialty{  Id =12, DoctorId =6, SpecialtyId =3 },
                        });

                    dbContext.PatientRatings.AddRange(new PatientRating[]
                    {
                        new PatientRating{Id = 1, Comments ="Wonderful", DoctorId =1, Rating = 5},
                        new PatientRating{Id = 2, Comments ="excellent", DoctorId =1, Rating = 5},
                        new PatientRating{Id = 3, Comments ="very good", DoctorId =1, Rating = 5},
                        new PatientRating{Id = 4, Comments ="good", DoctorId =1, Rating = 5},
                        new PatientRating{Id = 5, Comments ="very good", DoctorId =1, Rating = 5},

                        new PatientRating{Id = 6, Comments ="Wonderful", DoctorId =2, Rating = 5},
                        new PatientRating{Id = 7, Comments ="excellent", DoctorId =2, Rating = 5},
                        new PatientRating{Id = 8, Comments ="very good", DoctorId =2, Rating = 5},
                        new PatientRating{Id = 9, Comments ="good", DoctorId =2, Rating = 5},
                        new PatientRating{Id = 10, Comments ="very good", DoctorId =2, Rating = 4},

                        new PatientRating{Id = 11, Comments ="Wonderful", DoctorId =3, Rating = 5},
                        new PatientRating{Id = 12, Comments ="excellent", DoctorId =3, Rating = 5},
                        new PatientRating{Id = 13, Comments ="very good", DoctorId =3, Rating = 5},

                        new PatientRating{Id = 14, Comments ="excellent", DoctorId =4, Rating = 5},
                        new PatientRating{Id = 15, Comments ="very good", DoctorId =4, Rating = 5},

                        new PatientRating{Id = 16, Comments ="excellent", DoctorId =5, Rating = 5},
                        new PatientRating{Id = 17, Comments ="ok", DoctorId =5, Rating = 4},

                         new PatientRating{Id = 18, Comments ="Wonderful", DoctorId =6, Rating = 5},
                        new PatientRating{Id = 19, Comments ="excellent", DoctorId =6, Rating = 5},
                        new PatientRating{Id = 20, Comments ="very good", DoctorId =6, Rating = 4},

                    });

                    dbContext.SaveChanges();
                }

            }
        }
    }
}
