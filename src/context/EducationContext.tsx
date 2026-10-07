'use client';

import React, { createContext, useContext, useState } from 'react';

interface EducationContextType {
  isEducationMode: boolean;
  toggleEducationMode: () => void;
  completedQuizzes: string[];
  markQuizCompleted: (quizId: string) => void;
}

const EducationContext = createContext<EducationContextType | undefined>(undefined);

export function EducationProvider({ children }: { children: React.ReactNode }) {
  const [isEducationMode, setIsEducationMode] = useState<boolean>(true); // Default enabled for educational impact
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

  const toggleEducationMode = () => {
    setIsEducationMode((prev) => !prev);
  };

  const markQuizCompleted = (quizId: string) => {
    setCompletedQuizzes((prev) => (prev.includes(quizId) ? prev : [...prev, quizId]));
  };

  return (
    <EducationContext.Provider
      value={{
        isEducationMode,
        toggleEducationMode,
        completedQuizzes,
        markQuizCompleted,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
}

export function useEducation() {
  const context = useContext(EducationContext);
  if (!context) {
    throw new Error('useEducation must be used within an EducationProvider');
  }
  return context;
}
