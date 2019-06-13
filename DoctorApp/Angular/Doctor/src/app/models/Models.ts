export class Doctor{
    Id: number;
    Name: string;
    Gender: string;
    MedicalSchoolId: number;
    LanguageId: number;
    Language: Language;
    MedicalSchool: MedicalSchool;
    DoctorSpecialties: DoctorSpecialty[];
    PatientRatings: PatientRating[];
    Specialties: string;
    IsSuperStar: boolean;
}

export class Language{
    Id: number;
    Name: string;
}

export class MedicalSchool{
    Id: number;
    Name: string;
}

export class Specialty{
    Id: number;
    Name: string;
}

export class DoctorSpecialty{
    Id: number;
    DoctorId: number;
    SpecialtyId: number;
    Specialtyme: Specialty;
}

export class PatientRating{
    Id: number;
    DoctorId: number;
    Rating: number;
    Comments: string;
}