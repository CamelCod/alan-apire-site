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

  // Reference 1: District Heating Network Upgrade
  thermalNetwork: {
    title: 'District Heating Network Upgrade',
    location: 'Industrial Research Campus, Eurasia',
    pipeDiameter: '2 × DN500',
    pipeSpec: 'Ø530×9.0 mm',
    routeLength: '1,704 m',
    designPressure: '20.0 bar',
    thermalCapacity: '101.7 MWth',
    gcalEquivalent: '87.55 Gcal/h',
    operatingTemp: '150 °C',
    flowmeterType: 'Ultrasonic flowmeters',
    heatCalculator: 'Heat energy calculator',
    steelGrade: 'C255-5',
    standards: 'SP 124.13330.2012',
    volumesCount: '11 volumes',
    sheetsCount: '853 pages',
    approvalRecord: 'State Expert Examination Positive Conclusion',
  },
  // Backward compatibility alias
  get koltsovo() { return this.thermalNetwork; },

  // Reference 2: Industrial Boiler Facility Design
  boilerFacility: {
    title: 'Industrial Boiler Facility Design',
    location: 'Municipal Utility, Eurasia',
    thermalCapacity: '10.5 MWth',
    fuelTypes: 'Natural gas with standby diesel fuel',
    gosexpertizaNumber: 'Positive Conclusion',
    gosexpertizaDate: 'Design Stage',
    documentationFilesCount: '107 design-documentation files',
    surveyReportsCount: '4 survey reports',
    approvalRecord: 'State Expert Examination Positive Conclusion covering 107 design files and 4 surveys',
  },
  // Backward compatibility alias
  get karpinsk() { return this.boilerFacility; },

  // Accreditations & Registry
  sroDesignAccreditation: 'P-161-005611025054-2471',
  sroDesignAssociation: 'Association "Mezhregionproekt"',
  sroSurveyAccreditation: '5611025054-20250325-0804',
  leadDesignerNopriz: 'PI-114432',

  // Mandatory Reference Attribution Block
  mandatoryAttribution: 'These references reflect prior engineering work by Alanpire team members through OOO Energodiagnostika in Russia. They were not contracts awarded to Alanpire\'s UAE entity.',
} as const;
