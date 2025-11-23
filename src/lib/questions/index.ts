import { Question, Subject } from '@/types';
import { historyQuestions } from './history';
import { ccaQuestions } from './cca';
import { scienceQuestions } from './science';
import { scsQuestions } from './scs';
import { businessQuestions } from './business';
import { crsQuestions } from './crs';
import {pheQuestions} from './phe';
import {ictQuestions} from './ict';

export const getQuestionsBySubject = (subject: Subject): Question[] => {
  switch (subject) {
    case 'history':
      return historyQuestions;
      case 'business':
      return businessQuestions;
    case 'cca':
      return ccaQuestions;
      case 'phe':
      return pheQuestions;
      case 'ict':
      return ictQuestions;
      case 'scs':
      return scsQuestions;
      case 'crs':
      return crsQuestions;
    case 'science':
      return scienceQuestions;
    
    default:
      return historyQuestions;
  }
};

export const getExamDurationBySubject = (subject: Subject): number => {
  // All subjects have 60-minute duration
  return 60; // 60 minutes in minutes
};

export const getSubjectDisplayName = (subject: Subject): string => {
  switch (subject) {
    case 'history':
      return 'History';
      case 'phe':
      return 'Physical and Health Education';
      case 'ict':
      return 'Information and Communication Technology';
    case 'cca':
      return 'CCA';
      case 'crs':
      return 'CRS';
      case 'scs':
      return 'Socila and Citizenship Studies';
      case 'business':
      return 'Business Studies';
    case 'science':
      return 'Basic Science and Technology';
    
    default:
      return 'CCA';
  }
};

export const getAllSubjects = (): Subject[] => {
  return ['history', 'cca', 'crs', 'science', 'business', 'scs', 'phe', 'ict'];
};