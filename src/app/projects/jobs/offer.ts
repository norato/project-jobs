export class Offer {
  name: string;
  description: string;
  nationality: string;
  gender: string;
  positions: number;
  factor: number;
  candidates: any[];

  constructor() {
    this.name = '';
    this.description = '';
    this.nationality = '';
    this.gender = '';
    this.positions = 1;
    this.factor = 1;
    this.candidates = [];

  }
}
