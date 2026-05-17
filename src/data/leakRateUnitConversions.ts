export interface ConversionGroup {
  id: string;
  label: string;
  description: string;
  defaultInput: string;
  defaultFrom: string;
  defaultTo: string;
  units: string[];
  factors: Record<string, Record<string, number>>;
}

export const leakRateUnitConversionGroups: ConversionGroup[] = [
  {
    id: 'leak-rate-tightness',
    label: 'Leak Rate / Tightness',
    description: 'Common helium and vacuum leak rate units.',
    defaultInput: '1E-06',
    defaultFrom: 'Pa.m3/s',
    defaultTo: 'mbar.l/s',
    units: ['atm.cc/s', 'mbar.l/s', 'torr.l/s', 'Pa.m3/s', 'sccm'],
    factors: {
      'atm.cc/s': {
        'atm.cc/s': 1,
        'mbar.l/s': 1.01325,
        'torr.l/s': 0.76,
        'Pa.m3/s': 0.101325,
        sccm: 60,
      },
      'mbar.l/s': {
        'atm.cc/s': 0.986923,
        'mbar.l/s': 1,
        'torr.l/s': 0.750062,
        'Pa.m3/s': 0.1,
        sccm: 59.2154,
      },
      'torr.l/s': {
        'atm.cc/s': 1.31579,
        'mbar.l/s': 1.33322,
        'torr.l/s': 1,
        'Pa.m3/s': 0.133322,
        sccm: 78.9474,
      },
      'Pa.m3/s': {
        'atm.cc/s': 9.86923,
        'mbar.l/s': 10,
        'torr.l/s': 7.50062,
        'Pa.m3/s': 1,
        sccm: 592.154,
      },
      sccm: {
        'atm.cc/s': 0.0166667,
        'mbar.l/s': 0.0168875,
        'torr.l/s': 0.0126667,
        'Pa.m3/s': 0.00168875,
        sccm: 1,
      },
    },
  },
  {
    id: 'pressure',
    label: 'Pressure',
    description: 'Vacuum and pressure unit conversions used around leak testing systems.',
    defaultInput: '1',
    defaultFrom: 'Torr',
    defaultTo: 'Pa',
    units: ['Torr', 'mbar', 'Pa', 'mTorr', 'psi', 'atm (bar)'],
    factors: {
      Torr: {
        Torr: 1,
        mbar: 1.33,
        Pa: 133,
        mTorr: 1000,
        psi: 0.0193,
        'atm (bar)': 0.00132,
      },
      mbar: {
        Torr: 0.751,
        mbar: 1,
        Pa: 100,
        mTorr: 750,
        psi: 0.014,
        'atm (bar)': 0.0009,
      },
      Pa: {
        Torr: 0.00751,
        mbar: 0.01,
        Pa: 1,
        mTorr: 7.5,
        psi: 0.00014,
        'atm (bar)': 0.000009,
      },
      mTorr: {
        Torr: 0.001,
        mbar: 0.0013,
        Pa: 0.13,
        mTorr: 1,
        psi: 0.000019,
        'atm (bar)': 0.0000013,
      },
      psi: {
        Torr: 51.72,
        mbar: 68.96,
        Pa: 6896,
        mTorr: 51710,
        psi: 1,
        'atm (bar)': 0.07,
      },
      'atm (bar)': {
        Torr: 760,
        mbar: 1013,
        Pa: 101300,
        mTorr: 760000,
        psi: 14.7,
        'atm (bar)': 1,
      },
    },
  },
  {
    id: 'pumping-speed',
    label: 'Pumping Speed',
    description: 'Flow-capacity conversions for vacuum pumps and test fixtures.',
    defaultInput: '9',
    defaultFrom: 'm3/hr',
    defaultTo: 'l/sec',
    units: ['cfm', 'l/min', 'l/sec', 'm3/hr'],
    factors: {
      cfm: {
        cfm: 1,
        'l/min': 28.32,
        'l/sec': 0.472,
        'm3/hr': 1.6977,
      },
      'l/min': {
        cfm: 0.035,
        'l/min': 1,
        'l/sec': 0.016,
        'm3/hr': 0.06,
      },
      'l/sec': {
        cfm: 2.12,
        'l/min': 60,
        'l/sec': 1,
        'm3/hr': 3.6,
      },
      'm3/hr': {
        cfm: 0.589,
        'l/min': 16.67,
        'l/sec': 0.27,
        'm3/hr': 1,
      },
    },
  },
  {
    id: 'volume',
    label: 'Volume',
    description: 'Chamber, fixture, and part-volume conversion reference.',
    defaultInput: '1',
    defaultFrom: 'm3',
    defaultTo: 'ft3',
    units: ['inch3', 'ft3', 'litr', 'cm3', 'm3'],
    factors: {
      inch3: {
        inch3: 1,
        ft3: 0.00056,
        litr: 0.0163,
        cm3: 16.38,
        m3: 0.000016,
      },
      ft3: {
        inch3: 1728,
        ft3: 1,
        litr: 28.316,
        cm3: 28316,
        m3: 0.0283,
      },
      litr: {
        inch3: 61.02,
        ft3: 0.035,
        litr: 1,
        cm3: 1000,
        m3: 0.001,
      },
      cm3: {
        inch3: 0.061,
        ft3: 0.00003,
        litr: 0.001,
        cm3: 1,
        m3: 0.000001,
      },
      m3: {
        inch3: 61023,
        ft3: 35.33,
        litr: 1000,
        cm3: 1000000,
        m3: 1,
      },
    },
  },
];
