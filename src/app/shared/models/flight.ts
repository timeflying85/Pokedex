export interface FlightDTO {
  id: number;
  departure: AirportDTO;
  destination: AirportDTO;
  departureTime: Date;
  arrivalTime: Date;
  captain: pilotDTO;
  firstOfficer: pilotDTO;
  plane: PlaneDTO;
  company: CompanyDTO;
}

export interface CompanyDTO {
  id: number;
  name: string;
  originCountry: string;
}

export interface AirportDTO {
  id: number;
  name: string;
  location: string;
  planeParking: number;
}

export interface PlaneDTO {
  id: number;
  callSign: string;
  capacity: number;
}

export interface PilotDTO {
  id: number;
  firstName: string;
  lastName: string;
  license: string;
}

export interface pilotDTO{
  id : number,
  name : string
}

export interface FlightInsertForm {
  id: number;
  departureTime: Date;
  arrivalTime: Date;
  captain: pilotDTO;
  firstOfficer: pilotDTO;
  departure: AirportDTO;
  destination: AirportDTO;
  plane: PlaneDTO;
  company: CompanyDTO;
}

export interface FlightCreate{
  id: number;
  departureTime: Date;
  arrivalTime: Date;
  captain: string;
  firstOfficer: string;
  departureAirportId: string;
  arrivalAirportId: string;
  plane: string;
  company: string;
}
