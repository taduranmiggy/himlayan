const fil = {
  // Common
  common: {
    welcome: 'Maligayang Pagdating',
    loading: 'Naglo-load...',
    save: 'I-save',
    cancel: 'Kanselahin',
    delete: 'Burahin',
    edit: 'I-edit',
    add: 'Idagdag',
    search: 'Maghanap',
    filter: 'I-filter',
    refresh: 'I-refresh',
    viewAll: 'Tingnan Lahat',
    back: 'Bumalik',
    next: 'Susunod',
    submit: 'Isumite',
    confirm: 'Kumpirmahin',
    close: 'Isara',
    yes: 'Oo',
    no: 'Hindi',
    or: 'o',
    and: 'at',
    all: 'Lahat',
    none: 'Wala',
    noResults: 'Walang resulta',
    error: 'Error',
    success: 'Tagumpay',
    warning: 'Babala',
    info: 'Impormasyon',
  },

  // Navigation
  nav: {
    home: 'Bahay',
    dashboard: 'Dashboard',
    burialRecords: 'Mga Tala ng Libing',
    plots: 'Mga Lote',
    map: 'Mapa ng Sementeryo',
    search: 'Maghanap',
    services: 'Mga Serbisyo',
    contact: 'Makipag-ugnayan',
    profile: 'Aking Profile',
    settings: 'Mga Setting',
    logout: 'Mag-logout',
    login: 'Mag-login',
    register: 'Magparehistro',
  },

  // Landing Page
  landing: {
    title: 'Smart na Nabigasyon ng Sementeryo',
    subtitle: 'Himlayang Pilipino Memorial Park',
    tagline: 'Digital na Sistema ng Pamamahala ng Lote',
    description: 'Isang makabagong solusyon para sa pamamahala ng sementeryo na may GIS mapping, QR code integration, at komprehensibong mga tala ng libing.',
    cta: 'Magsimula',
    learnMore: 'Alamin Pa',
    features: {
      title: 'Aming Mga Feature',
      gisMapping: 'GIS Mapping',
      gisMappingDesc: 'Interactive na mapa para madaling mahanap ang mga lote',
      qrCode: 'QR Code Integration',
      qrCodeDesc: 'Mag-scan ng QR code sa mga puntod para sa instant na impormasyon',
      records: 'Digital na Mga Tala',
      recordsDesc: 'Komprehensibong sistema ng pamamahala ng mga tala ng libing',
      navigation: 'Smart na Nabigasyon',
      navigationDesc: 'Direksyon papunta sa anumang puntod',
    },
  },

  // Auth
  auth: {
    login: 'Mag-login',
    loginTitle: 'Maligayang Pagbabalik',
    loginSubtitle: 'Mag-sign in sa iyong account',
    register: 'Magparehistro',
    registerTitle: 'Gumawa ng Account',
    registerSubtitle: 'Sumali sa Himlayan Memorial Park',
    email: 'Email Address',
    password: 'Password',
    confirmPassword: 'Kumpirmahin ang Password',
    name: 'Buong Pangalan',
    phone: 'Numero ng Telepono',
    rememberMe: 'Tandaan ako',
    forgotPassword: 'Nakalimutan ang Password?',
    noAccount: 'Wala pang account?',
    hasAccount: 'May account na?',
    loginError: 'Mali ang email o password',
    registerError: 'Nabigo ang pagpaparehistro. Subukan ulit.',
    logoutSuccess: 'Ikaw ay na-logout na',
  },

  // Dashboard
  dashboard: {
    title: 'Dashboard',
    welcome: 'Maligayang pagdating sa Himlayan Cemetery Management System',
    plotOverview: 'Pangkalahatang-tanaw ng Lote',
    burialStats: 'Mga Estadistika ng Libing',
    recentBurials: 'Mga Kamakailang Libing',
    activityFeed: 'Mga Aktibidad',
    systemInfo: 'Impormasyon ng Sistema',
    totalPlots: 'Kabuuang Lote',
    available: 'Available',
    occupied: 'Okupado',
    reserved: 'Nakalaan',
    totalBurials: 'Kabuuang Libing',
    thisMonth: 'Ngayong Buwan',
    thisYear: 'Ngayong Taon',
    occupancyRate: 'Rate ng Okupasyon',
    monthlyBurials: 'Buwanang Libing',
    plotStatus: 'Distribusyon ng Status ng Lote',
    capacityWarning: 'Halos puno na ang kapasidad',
    moderateOccupancy: 'Katamtamang okupasyon',
    goodAvailability: 'Magandang availability',
  },

  // Burial Records
  burial: {
    title: 'Mga Tala ng Libing',
    addNew: 'Magdagdag ng Bagong Tala',
    deceasedName: 'Pangalan ng Namatay',
    birthDate: 'Petsa ng Kapanganakan',
    deathDate: 'Petsa ng Pagkamatay',
    burialDate: 'Petsa ng Libing',
    plotNumber: 'Numero ng Lote',
    section: 'Seksyon',
    block: 'Bloke',
    lot: 'Lote',
    causeOfDeath: 'Sanhi ng Pagkamatay',
    nextOfKin: 'Pinakamalapit na Kamag-anak',
    contactNumber: 'Contact Number',
    remarks: 'Mga Puna',
    status: 'Status',
    active: 'Aktibo',
    transferred: 'Inilipat',
    exhumed: 'Na-exhume',
  },

  // Plots
  plots: {
    title: 'Pamamahala ng Lote',
    addNew: 'Magdagdag ng Bagong Lote',
    plotDetails: 'Detalye ng Lote',
    location: 'Lokasyon',
    size: 'Sukat',
    price: 'Presyo',
    status: 'Status',
    available: 'Available',
    reserved: 'Nakalaan',
    occupied: 'Okupado',
    maintenance: 'Inaayos',
    owner: 'May-ari',
    purchaseDate: 'Petsa ng Pagbili',
    expiryDate: 'Petsa ng Expiry',
  },

  // Map
  map: {
    title: 'Mapa ng Sementeryo',
    searchPlot: 'Maghanap ng lote...',
    directions: 'Kumuha ng Direksyon',
    zoomIn: 'Mag-zoom In',
    zoomOut: 'Mag-zoom Out',
    myLocation: 'Aking Lokasyon',
    satellite: 'Satellite View',
    terrain: 'Terrain View',
  },

  // Member Pages
  member: {
    dashboard: 'Dashboard ng Miyembro',
    searchGrave: 'Maghanap ng Puntod',
    searchPlaceholder: 'Ilagay ang pangalan ng namatay...',
    viewMap: 'Tingnan sa Mapa',
    services: 'Mga Serbisyong Memorial',
    contactUs: 'Makipag-ugnayan',
    myPlots: 'Aking mga Lote',
    myRecords: 'Aking mga Tala',
  },

  // Services
  services: {
    title: 'Mga Serbisyong Memorial',
    maintenance: 'Maintenance ng Lote',
    maintenanceDesc: 'Regular na paglilinis at pag-aayos ng mga lote',
    flowers: 'Mga Bulaklak',
    flowersDesc: 'Magagandang arreglo ng bulaklak para sa iyong mga mahal sa buhay',
    memorial: 'Mga Serbisyong Memorial',
    memorialDesc: 'Pag-alala at serbisyo sa anibersaryo',
    transfer: 'Mga Serbisyo ng Paglilipat',
    transferDesc: 'Mga kaayusan para sa paglilipat at pag-exhume',
    inquire: 'Mag-inquire Ngayon',
  },

  // Contact
  contact: {
    title: 'Makipag-ugnayan',
    subtitle: 'Makipag-ugnayan sa Himlayang Pilipino',
    name: 'Iyong Pangalan',
    email: 'Email Address',
    subject: 'Paksa',
    message: 'Mensahe',
    send: 'Ipadala ang Mensahe',
    address: 'Address',
    phone: 'Telepono',
    hours: 'Oras ng Operasyon',
    hoursValue: 'Lunes - Linggo: 6:00 AM - 6:00 PM',
  },

  // Activity Types
  activity: {
    burial: 'Nagdagdag ng bagong tala ng libing',
    plot_reserved: 'Nakalaan ang lote',
    user_registered: 'Bagong miyembro ang nagparehistro',
    payment: 'Natanggap ang bayad',
    maintenance: 'Natapos ang maintenance',
    transfer: 'Inilipat ang tala',
  },

  // Time
  time: {
    justNow: 'Ngayon lang',
    minutesAgo: '{count} minuto na ang nakalipas',
    hoursAgo: '{count} oras na ang nakalipas',
    daysAgo: '{count} araw na ang nakalipas',
    weeksAgo: '{count} linggo na ang nakalipas',
    monthsAgo: '{count} buwan na ang nakalipas',
  },

  // Errors
  errors: {
    somethingWrong: 'May nangyaring mali',
    tryAgain: 'Subukan ulit',
    notFound: 'Hindi nahanap',
    unauthorized: 'Hindi awtorisado',
    serverError: 'Error sa server',
    networkError: 'Error sa network',
    loadFailed: 'Nabigong i-load ang data',
  },

  // Footer
  footer: {
    copyright: '© 2026 Himlayang Pilipino Memorial Park. Lahat ng karapatan ay nakalaan.',
    privacy: 'Patakaran sa Privacy',
    terms: 'Mga Tuntunin ng Serbisyo',
  },
};

export default fil;
