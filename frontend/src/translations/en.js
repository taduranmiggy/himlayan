const en = {
  // Common
  common: {
    welcome: 'Welcome',
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh',
    viewAll: 'View All',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    confirm: 'Confirm',
    close: 'Close',
    yes: 'Yes',
    no: 'No',
    or: 'or',
    and: 'and',
    all: 'All',
    none: 'None',
    noResults: 'No results found',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
  },

  // Navigation
  nav: {
    home: 'Home',
    dashboard: 'Dashboard',
    burialRecords: 'Burial Records',
    plots: 'Plots',
    map: 'Cemetery Map',
    search: 'Search',
    services: 'Services',
    contact: 'Contact Us',
    profile: 'My Profile',
    settings: 'Settings',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
  },

  // Landing Page
  landing: {
    title: 'Smart Cemetery Navigation',
    subtitle: 'Himlayang Pilipino Memorial Park',
    tagline: 'Digital Plot Management System',
    description: 'A modern solution for cemetery management featuring GIS mapping, QR code integration, and comprehensive burial records.',
    cta: 'Get Started',
    learnMore: 'Learn More',
    features: {
      title: 'Our Features',
      gisMapping: 'GIS Mapping',
      gisMappingDesc: 'Interactive map navigation to easily locate burial plots',
      qrCode: 'QR Code Integration',
      qrCodeDesc: 'Scan QR codes on gravesites for instant information access',
      records: 'Digital Records',
      recordsDesc: 'Comprehensive burial records management system',
      navigation: 'Smart Navigation',
      navigationDesc: 'Turn-by-turn directions to any gravesite',
    },
  },

  // Auth
  auth: {
    login: 'Login',
    loginTitle: 'Welcome Back',
    loginSubtitle: 'Sign in to your account',
    register: 'Register',
    registerTitle: 'Create Account',
    registerSubtitle: 'Join Himlayan Memorial Park',
    email: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Full Name',
    phone: 'Phone Number',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot Password?',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    loginError: 'Invalid email or password',
    registerError: 'Registration failed. Please try again.',
    logoutSuccess: 'You have been logged out',
  },

  // Dashboard
  dashboard: {
    title: 'Dashboard',
    welcome: 'Welcome to Himlayan Cemetery Management System',
    plotOverview: 'Plot Overview',
    burialStats: 'Burial Statistics',
    recentBurials: 'Recent Burials',
    activityFeed: 'Activity Feed',
    systemInfo: 'System Information',
    totalPlots: 'Total Plots',
    available: 'Available',
    occupied: 'Occupied',
    reserved: 'Reserved',
    totalBurials: 'Total Burials',
    thisMonth: 'This Month',
    thisYear: 'This Year',
    occupancyRate: 'Occupancy Rate',
    monthlyBurials: 'Monthly Burials',
    plotStatus: 'Plot Status Distribution',
    capacityWarning: 'Capacity nearly full',
    moderateOccupancy: 'Moderate occupancy',
    goodAvailability: 'Good availability',
  },

  // Burial Records
  burial: {
    title: 'Burial Records',
    addNew: 'Add New Record',
    deceasedName: 'Deceased Name',
    birthDate: 'Date of Birth',
    deathDate: 'Date of Death',
    burialDate: 'Burial Date',
    plotNumber: 'Plot Number',
    section: 'Section',
    block: 'Block',
    lot: 'Lot',
    causeOfDeath: 'Cause of Death',
    nextOfKin: 'Next of Kin',
    contactNumber: 'Contact Number',
    remarks: 'Remarks',
    status: 'Status',
    active: 'Active',
    transferred: 'Transferred',
    exhumed: 'Exhumed',
  },

  // Plots
  plots: {
    title: 'Plot Management',
    addNew: 'Add New Plot',
    plotDetails: 'Plot Details',
    location: 'Location',
    size: 'Size',
    price: 'Price',
    status: 'Status',
    available: 'Available',
    reserved: 'Reserved',
    occupied: 'Occupied',
    maintenance: 'Under Maintenance',
    owner: 'Owner',
    purchaseDate: 'Purchase Date',
    expiryDate: 'Expiry Date',
  },

  // Map
  map: {
    title: 'Cemetery Map',
    searchPlot: 'Search for a plot...',
    directions: 'Get Directions',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    myLocation: 'My Location',
    satellite: 'Satellite View',
    terrain: 'Terrain View',
  },

  // Member Pages
  member: {
    dashboard: 'Member Dashboard',
    searchGrave: 'Search for a Grave',
    searchPlaceholder: 'Enter name of deceased...',
    viewMap: 'View on Map',
    services: 'Memorial Services',
    contactUs: 'Contact Us',
    myPlots: 'My Plots',
    myRecords: 'My Records',
  },

  // Services
  services: {
    title: 'Memorial Services',
    maintenance: 'Plot Maintenance',
    maintenanceDesc: 'Regular cleaning and upkeep of burial plots',
    flowers: 'Flower Arrangements',
    flowersDesc: 'Beautiful floral tributes for your loved ones',
    memorial: 'Memorial Services',
    memorialDesc: 'Commemoration and anniversary services',
    transfer: 'Transfer Services',
    transferDesc: 'Exhumation and transfer arrangements',
    inquire: 'Inquire Now',
  },

  // Contact
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with Himlayang Pilipino',
    name: 'Your Name',
    email: 'Email Address',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    address: 'Address',
    phone: 'Phone',
    hours: 'Operating Hours',
    hoursValue: 'Monday - Sunday: 6:00 AM - 6:00 PM',
  },

  // Activity Types
  activity: {
    burial: 'New burial record added',
    plot_reserved: 'Plot reserved',
    user_registered: 'New member registered',
    payment: 'Payment received',
    maintenance: 'Maintenance completed',
    transfer: 'Record transferred',
  },

  // Time
  time: {
    justNow: 'Just now',
    minutesAgo: '{count} minute(s) ago',
    hoursAgo: '{count} hour(s) ago',
    daysAgo: '{count} day(s) ago',
    weeksAgo: '{count} week(s) ago',
    monthsAgo: '{count} month(s) ago',
  },

  // Errors
  errors: {
    somethingWrong: 'Something went wrong',
    tryAgain: 'Please try again',
    notFound: 'Not found',
    unauthorized: 'Unauthorized access',
    serverError: 'Server error',
    networkError: 'Network error',
    loadFailed: 'Failed to load data',
  },

  // Footer
  footer: {
    copyright: '© 2026 Himlayang Pilipino Memorial Park. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
};

export default en;
