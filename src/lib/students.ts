import { Student } from '@/types';

export const students: Student[] = [
  { 
    id: 'MTH0STU', 
    name: 'Oyenola Paul', 
    class: 'JSS 1', 
    email: 'sodim@school.edu',
    subjects: [ 'science', 'history', 'cca', 'crs', 'scs', 'phe', 'ict', 'business']
  },
  
{ 
    id: 'MTH0027STU', 
    name: 'Wale Seun', 
    class: 'BASIC VI', 
    email: 'jsy@school.edu',
    subjects: [ 'science', 'history', 'cca', 'crs', 'scs', 'phe', 'ict', 'business']
  },
  { 
    id: 'MTH0028STU', 
    name: 'Kay Will', 
    class: 'JSS 2', 
    email: 'jsy@school.edu',
    subjects: ['science', 'history', 'cca', 'crs', 'scs', 'phe', 'ict', 'business']
  },
  
  // Add more students...
];

export const getStudentById = (id: string): Student | undefined => {
  return students.find(student => student.id === id);
};

export const getStudentByName = (name: string): Student | undefined => {
  return students.find(student => 
    student.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const validateStudent = (id: string, name: string): { isValid: boolean; student?: Student } => {
  const student = getStudentById(id);
  if (student && student.name.toLowerCase() === name.toLowerCase()) {
    return { isValid: true, student };
  }
  return { isValid: false };
};