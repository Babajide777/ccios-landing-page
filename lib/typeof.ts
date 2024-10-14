import { ReactNode } from "react";

export interface ClientProviderProps {
  children: ReactNode;
}

export interface HeroProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  postalCode: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: "Yes" | "No" | null;
  optionSelect: string;
  handleGroceriesPlantClick: (event: any) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePostalCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMarathanMapClick: (event: any) => void;
}
