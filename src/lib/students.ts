import { Student } from '@/types';

export const students: Student[] = [
  { 
    id: 'MTH029STU', 
    name: 'Okeowo Anjola', 
    class: 'JSS 2', 
    email: 'sodim@school.edu',
    subjects: [ 'science', 'history', 'cca', 'crs', 'business', 'scs']
  },
  { 
    id: 'MTH030STU', 
    name: 'Olaokun Desire', 
    class: 'JSS 2', 
    email: 'salam@school.edu',
    subjects: [ 'science', 'history', 'cca', 'crs', 'business', 'social-studies']
  },
  { 
    id: 'MTH031STU', 
    name: 'Erinosho Olarenwaju', 
    class: 'JSS 2', 
    email: 'alamuy@school.edu',
    subjects: [ 'science', 'history', 'cca', 'crs', 'business', 'social-studies']
  },
  
{ 
    id: 'MTH0027STU', 
    name: 'Wale Seun', 
    class: 'BASIC VI', 
    email: 'jsy@school.edu',
    subjects: [ 'science', 'history', 'cca', 'crs', 'business', 'social-studies']
  },
  { 
    id: 'MTH0028STU', 
    name: 'Kay Will', 
    class: 'JSS 2', 
    email: 'jsy@school.edu',
    subjects: ['science', 'history', 'cca', 'crs', 'business', 'social-studies']
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