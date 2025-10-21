export interface Question {
  id: number;
  title: string;
  description: string;
  code?: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
}
