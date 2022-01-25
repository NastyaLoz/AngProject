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
  power_level: string;
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

export interface SessionList {
  sessionId: number;
  dt: string;
  start: string;
  stop:string;
  soc_inittial: number;
  soc_final: number;
  battery_size:number;
  chargepoleId: number;
  smart:boolean;
  power: number;
  much_charge: number;
  control_applyed: boolean;
}
