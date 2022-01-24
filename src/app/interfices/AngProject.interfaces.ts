export interface Session {
  sessionId: number;
  dt: string;
  start: string;
  stop:string;
  chargePole: ChargePole;
  smart:boolean;
}

export interface ChargePole {
  chargepoleId: number;
  power_source: string;
  power_level: number;
  cost_optimization:string;
  charging_time:string;
  name:string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
