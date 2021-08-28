export interface IUser {
    email: string;
    displayName: string;
    token: string;

    foodAllergies: string;
    ageRange: string;
    covidVaccinated: string;
    outdoorExperience: number;
    mobility: number;
    cprCertified: boolean;
    roles: string[];
}