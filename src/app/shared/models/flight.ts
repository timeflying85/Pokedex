export interface FlightDTO {
  id: number;
  departure: AirportDTO;
  destination: AirportDTO;
  captain: PilotDTO;
  firstOfficer: PilotDTO;
  plane: PlaneDTO;
}

export interface AirportDTO {
  id: number;
  name: string;
  location: string;
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
