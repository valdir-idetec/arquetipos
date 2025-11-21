import React from 'react';

export interface Archetype {
  id: string;
  group: string;
  groupColor: string; // Expected to contain Tailwind classes e.g., "bg-yellow-100 text-yellow-800"
  name: string;
  icon: React.ReactNode;
  motto: string;
  focus: string;
  colors: string[];
  voice: string;
  contentIdeas: string[];
  brand: string;
}