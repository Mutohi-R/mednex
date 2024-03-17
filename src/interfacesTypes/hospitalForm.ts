import { type Comment } from "./comment";

export type Time = {
  hours: number | string;
  minutes: number | string;
  seconds?: number | string;
};

export type HospitalForm = {
  id?: string;
  isFavourite?: boolean;
  isExpanded?: boolean;
  comments?: Comment[];
  accessibility: boolean;
  accessibilityFeatures: string[];
  accommodation: boolean;
  accommodationDetails: string;
  address: string;
  appointment: string;
  departments: string[];
  email: string;
  extraInfo: string;
  emergencyCare: boolean;
  emergencyCareDetails: string;
  facilities: boolean;
  facilitiesDetails: string[];
  insurance: boolean;
  insuranceProviders: string[];
  languageServices: string;
  location: string;
  name: string;
  operatingFrom: Time;
  operatingTo: Time;
  paymentMethods: string[];
  telephone: string;
  visitFrom: Time;
  visitTo: Time;
  visitGuide: string;
  website: string;
};
