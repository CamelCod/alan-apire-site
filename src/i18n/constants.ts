// Centralized technical figures, units, standards, licence numbers, and contact data.
// Referenced across all locales to prevent discrepancy.

export const TECHNICAL_CONSTANTS = {
  // Legal entity & licensing (authoritative IFZA/DIEZ)
  companyLegalName: 'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO',
  companyShortName: 'Alanpire',
  licenceNumber: '88988',
  licenceAuthority: 'DIEZA / IFZA, Dubai Silicon Oasis',
  licenceValidity: '09 June 2026 – 08 June 2027',
  licenceActivities: [
    'Management Consultancies',
    'Project Management Services',
    'Architectural Prospective Drawings',
  ],

  // Authoritative Contact Data
  email: 'info@alanapire.ae',
  phone: '+971558286328',
  address: 'Dubai Integrated Economic Zones Authority (DIEZ), Dubai, United Arab Emirates',
  canonicalDomain: 'https://alanpire.ae',

  // Prior Reference Entity
  priorEntityName: 'OOO "Energodiagnostika"',

  // Reference 1: Koltsovo Thermal Main Upgrade
  koltsovo: {
    title: '2×DN500 High-Pressure District Heating Main',
    location: 'Koltsovo, Novosibirsk Oblast, Russia',
    pipeDiameter: '2 × DN500',
    pipeSpec: 'Ø530×9.0 mm',
    routeLength: '1,704 m',
    designPressure: '20.0 bar',
    thermalCapacity: '101.7 MWth',
    gcalEquivalent: '87.55 Gcal/h',
    operatingTemp: '150 °C',
    flowmeterType: 'RUS-1-400 ultrasonic flowmeters',
    heatCalculator: 'SPT 961.2 heat energy calculator',
    steelGrade: 'C255-5',
    standards: 'SP 124.13330.2012',
    volumesCount: '11 volumes',
    sheetsCount: '853 pages',
    approvalRecord: 'State Expert Examination Positive Conclusion No. 66-1-1-3-028194-2026',
  },

  // Reference 2: Karpinsk Autonomous Boiler Plant
  karpinsk: {
    title: 'Autonomous 10.5 MWth Industrial Boiler Facility',
    location: 'Karpinsk, Sverdlovsk Oblast, Russia',
    thermalCapacity: '10.5 MWth',
    fuelTypes: 'Natural gas with standby diesel fuel',
    gosexpertizaNumber: '66-1-1-3-028194-2026',
    gosexpertizaDate: '18 June 2026',
    documentationFilesCount: '107 design-documentation files',
    surveyReportsCount: '4 survey reports',
    approvalRecord: 'Gosexpertiza Positive Conclusion No. 66-1-1-3-028194-2026, dated 18 June 2026',
  },

  // Accreditations & Registry
  sroDesignAccreditation: 'P-161-005611025054-2471',
  sroDesignAssociation: 'Association "Mezhregionproekt"',
  sroSurveyAccreditation: '5611025054-20250325-0804',
  leadDesignerNopriz: 'PI-114432',

  // Mandatory Reference Attribution Block
  mandatoryAttribution: 'These references reflect prior engineering work by Alanpire team members through OOO Energodiagnostika in Russia. They were not contracts awarded to Alanpire\'s UAE entity.',
} as const;
