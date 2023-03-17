export interface FlightDTO {
  id: number;
  departure: AirportDTO;
  destination: AirportDTO;
  captain: pilotDTO;
  firstOfficer: pilotDTO;
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

export interface pilotDTO{
  id : number,
  name : string
}
