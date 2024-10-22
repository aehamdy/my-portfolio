export const personalInfo = {
    firstName: 'Benjamin',
    lastName: 'Ryan',
    title: 'Frontend Developer',
    email: 'ae.hamdy91@gmail.com',
    residence: 'Egypt',
    location: 'Cairo, Egypt',
    languages: ['English', 'Arabic',],
    bio: 'A passionate frontend developer with experience in building responsive and accessible web applications using React, Tailwind CSS, and more.',
    hiringStatus: true,
}

export const aboutMeList = [
    {residence: personalInfo.residence},
    {location: personalInfo.location},
    {languages: personalInfo.languages},
]


export const getInTouchList = [
    {address: personalInfo.location},
    {email: personalInfo.email},
    {freelance: personalInfo.hiringStatus},
]