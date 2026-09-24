// Mock data for CrokoTech clone - all content in French
// This data will later be replaced/augmented by backend endpoints (see contracts.md)

export const company = {
  name: "CrokoTech",
  tagline: "Bretagne, bits et crocos : l'alliance parfaite !",
  phone: "06 27 79 14 26",
  email: "crokotech.info@gmail.com",
  founder: "Corentin Leriche",
  location: "Nantes & tout le 44",
  yearsExp: 5,
};

export const heroImage =
  "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxzZXJ2ZXIlMjByb29tfGVufDB8fHx8MTc5MDIzNTE2MXww&ixlib=rb-4.1.0&q=85";

export const pillars = [
  {
    icon: "Flame",
    title: "Passionné",
    text: "Chez CrokoTech, on est tellement passionné d'informatique qu'on code même en rêve ! Nos crocos sont là pour vous offrir des services aussi affûtés que leurs dents — et on ne mord que dans les problèmes, jamais dans nos clients !",
  },
  {
    icon: "Award",
    title: "Professionnel",
    text: "Des services de qualité professionnelle avec un support de haute qualité. On prend vos enjeux au sérieux, sans jamais se prendre au sérieux.",
  },
  {
    icon: "Smile",
    title: "Sympathique",
    text: "Chez CrokoTech la sympathie est notre créneau, car nous savons que tout problème ou besoin peut être réglé avec le sourire. Croquez la vie à pleines dents !",
  },
];

export const localPoints = [
  "Déplacements gratuits sur Nantes et dans le 44",
  "Une entreprise Bretonne et fière de l'être (oui, Nantes est bretonne)",
  "Professionnel de l'informatique depuis 5 ans",
];

export const stats = [
  { value: "5+", label: "ans d'expérience" },
  { value: "120+", label: "missions réalisées" },
  { value: "44", label: "déplacements gratuits" },
  { value: "100%", label: "avec le sourire" },
];

// Reusable service images
const IMG = {
  serverRoom:
    "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxzZXJ2ZXIlMjByb29tfGVufDB8fHx8MTc5MDIzNTE2MXww&ixlib=rb-4.1.0&q=85",
  serverRoom2:
    "https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  cyber:
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc5MDIzNTE2MXww&ixlib=rb-4.1.0&q=85",
  cyber2:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc5MDIzNTE2MXww&ixlib=rb-4.1.0&q=85",
  network:
    "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzfGVufDB8fHx8MTc5MDIzNTE2MXww&ixlib=rb-4.1.0&q=85",
  network2:
    "https://images.pexels.com/photos/5087172/pexels-photo-5087172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  webdev:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3OTAyMzUxODd8MA&ixlib=rb-4.1.0&q=85",
  webdev2:
    "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3OTAyMzUxODd8MA&ixlib=rb-4.1.0&q=85",
  repair:
    "https://images.pexels.com/photos/4705636/pexels-photo-4705636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  repair2:
    "https://images.pexels.com/photos/4705603/pexels-photo-4705603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  camera:
    "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxzZWN1cml0eSUyMGNhbWVyYXxlbnwwfHx8fDE3OTAyMzUxODd8MA&ixlib=rb-4.1.0&q=85",
  phone:
    "https://images.unsplash.com/photo-1587560699334-bea93391dcef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwaG9uZXxlbnwwfHx8fDE3OTAyMzUxOTJ8MA&ixlib=rb-4.1.0&q=85",
};

// Full service catalogue. category: 'entreprise' | 'particulier' (can be both)
export const services = [
  {
    slug: "gestion-serveurs",
    title: "Gestion de vos serveurs",
    short: "Vos serveurs entre de bonnes pattes, Windows comme Linux.",
    icon: "Server",
    image: IMG.serverRoom,
    category: ["entreprise"],
    intro:
      "Création, gestion et maintien en condition opérationnelle de vos serveurs. On veille sur vos données comme un croco sur ses précieux snacks.",
    features: [
      "Serveurs Windows & Linux",
      "Virtualisation (Proxmox, VMware, Hyper-V)",
      "Active Directory, DNS, DHCP",
      "Mises à jour et durcissement",
      "Migration et consolidation",
    ],
  },
  {
    slug: "materiel-informatique",
    title: "Matériel informatique",
    short: "Le bon matériel, au bon prix, sans mode d'emploi de 200 pages.",
    icon: "Cpu",
    image: IMG.repair2,
    category: ["entreprise", "particulier"],
    intro:
      "Conseil, fourniture et installation de matériel informatique adapté à vos besoins réels (pas au dernier gadget à la mode).",
    features: [
      "PC fixes & portables",
      "Serveurs, NAS et stockage",
      "Périphériques & imprimantes",
      "Composants et upgrades",
      "Installation et configuration",
    ],
  },
  {
    slug: "reseaux",
    title: "Réseaux",
    short: "Sécurisez votre réseau et vos différents sites.",
    icon: "Network",
    image: IMG.network,
    category: ["entreprise"],
    intro:
      "Des solutions de sécurité professionnelles pour un réseau solide : routeurs, switchs, pare-feu, points d'accès Wifi et bien plus.",
    features: [
      "Routeurs & switchs managés",
      "Pare-feu et VPN inter-sites",
      "Wifi professionnel",
      "Segmentation & VLAN",
      "Optimisation des performances",
    ],
  },
  {
    slug: "demenagement-cablage",
    title: "Déménagement de bureaux & câblage",
    short: "On déménage votre informatique sans casser d'œufs (ni de serveurs).",
    icon: "Cable",
    image: IMG.network2,
    category: ["entreprise"],
    intro:
      "Un déménagement de bureaux, c'est stressant. Confiez-nous le câblage et le transfert de votre infrastructure pour repartir du bon pied.",
    features: [
      "Câblage réseau structuré",
      "Baie de brassage & étiquetage",
      "Déménagement du parc",
      "Remise en service testée",
      "Zéro perte de données",
    ],
  },
  {
    slug: "infogerance",
    title: "Infogérance",
    short: "Tout votre parc supervisé et entretenu, l'esprit léger.",
    icon: "Settings2",
    image: IMG.serverRoom2,
    category: ["entreprise"],
    intro:
      "CrokoTech intervient sur l'ensemble de votre parc informatique (Mac, PC, Linux, serveurs, imprimantes, routeurs, switchs...).",
    features: [
      "Gestion complète du parc",
      "Mises à jour et sauvegardes",
      "Support inclus",
      "Reporting régulier",
      "Contrat sur mesure",
    ],
  },
  {
    slug: "cybersecurite",
    title: "Cybersécurité",
    short: "L'informatique sans sécurité, c'est une voiture sans freins.",
    icon: "ShieldCheck",
    image: IMG.cyber,
    category: ["entreprise"],
    intro:
      "Des solutions de cybersécurité à la pointe pour dormir sur vos deux oreilles (et garder vos données bien au chaud).",
    features: [
      "Antivirus & EDR",
      "Audit de sécurité (Serveurs, SI)",
      "Sensibilisation des équipes",
      "Formations",
      "Plan de remédiation",
    ],
  },
  {
    slug: "sous-traitance",
    title: "Sous-traitance informatique",
    short: "Focalisez-vous sur votre métier, on gère le complexe.",
    icon: "Handshake",
    image: IMG.webdev2,
    category: ["entreprise"],
    intro:
      "Faites appel à CrokoTech pour ne pas perdre de temps sur des sujets techniques complexes. On s'occupe du sale boulot, avec le sourire.",
    features: [
      "Renfort ponctuel ou régulier",
      "Interventions terrain",
      "Expertise systèmes & réseaux",
      "Confidentialité garantie",
      "Flexibilité totale",
    ],
  },
  {
    slug: "support",
    title: "Support",
    short: "Sous contrat ou à la demande, on répond présent.",
    icon: "LifeBuoy",
    image: IMG.repair,
    category: ["entreprise"],
    intro:
      "Sous contrat ou à la demande, nous assurons le support informatique de votre parc. Un souci ? Un croco arrive.",
    features: [
      "Support à distance & sur site",
      "Tickets et suivi",
      "Interventions prioritaires",
      "Assistance utilisateurs",
      "Délais garantis",
    ],
  },
  {
    slug: "supervision",
    title: "Supervision",
    short: "On repère la panne avant même qu'elle ne vous embête.",
    icon: "Activity",
    image: IMG.serverRoom,
    category: ["entreprise"],
    intro:
      "La supervision nous permet d'être averti d'une panne avant même qu'elle ne vous empêche de travailler, et d'intervenir au plus vite.",
    features: [
      "Monitoring 24/7",
      "Alertes en temps réel",
      "Tableaux de bord",
      "Détection proactive",
      "Rapports de disponibilité",
    ],
  },
  {
    slug: "sauvegardes",
    title: "Sauvegardes",
    short: "Un SI sans sauvegardes, c'est de la moto sans casque.",
    icon: "DatabaseBackup",
    image: IMG.serverRoom2,
    category: ["entreprise"],
    intro:
      "Demandez une vraie solution de sauvegardes selon vos besoins. Parce que perdre ses données, ça ne fait rire personne (même pas un croco).",
    features: [
      "Veeam",
      "Sauvegarde des postes de travail",
      "Sauvegarde des serveurs",
      "Sauvegarde sur Cloud",
      "Tests de restauration",
    ],
  },
  {
    slug: "pra-pca",
    title: "PRA et PCA",
    short: "Reprise et continuité d'activité, quoi qu'il arrive.",
    icon: "RefreshCw",
    image: IMG.cyber2,
    category: ["entreprise"],
    intro:
      "Plan de Reprise (PRA) et Plan de Continuité (PCA) d'activité : anticipez le pire pour garantir le meilleur, même en cas de sinistre.",
    features: [
      "Analyse des risques",
      "Stratégie de reprise",
      "Réplication et redondance",
      "Tests réguliers",
      "Documentation complète",
    ],
  },
  {
    slug: "telephonie-ip",
    title: "Téléphonie IP",
    short: "L'informatique, c'est aussi la téléphonie.",
    icon: "Phone",
    image: IMG.phone,
    category: ["entreprise"],
    intro:
      "Des solutions de téléphonie IP modernes : téléphones IP, IPBX, 3CX... Communiquez sans limites et sans prise de tête.",
    features: [
      "Téléphones IP",
      "IPBX & 3CX",
      "Standard virtuel",
      "Numéros et forfaits",
      "Intégration mobile",
    ],
  },
  {
    slug: "video-surveillance",
    title: "Vidéo Surveillance",
    short: "Gardez un œil partout, même quand vous n'y êtes pas.",
    icon: "Cctv",
    image: IMG.camera,
    category: ["entreprise", "particulier"],
    intro:
      "Installation de systèmes de vidéosurveillance professionnels pour sécuriser vos locaux et votre domicile. Discret et efficace.",
    features: [
      "Caméras HD & IP",
      "Vision nocturne",
      "Accès à distance (mobile)",
      "Enregistrement NVR",
      "Installation & maintenance",
    ],
  },
  {
    slug: "site-web",
    title: "Développement Web",
    short: "On transforme les pixels en sourires !",
    icon: "Code2",
    image: IMG.webdev,
    category: ["entreprise", "particulier"],
    intro:
      "À la recherche d'un site internet ou d'une appli web ? Allons-y comme des pros ! Chez CrokoTech, on crée du beau ET du fonctionnel.",
    features: [
      "Sites vitrines & e-commerce",
      "Applications web sur mesure",
      "Design responsive & moderne",
      "Référencement (SEO)",
      "Hébergement & maintenance",
    ],
  },
  {
    slug: "assistance-informatique",
    title: "Assistance Informatique",
    short: "Un pépin ? Un croco à votre rescousse à domicile.",
    icon: "Headset",
    image: IMG.repair,
    category: ["particulier"],
    intro:
      "Assistance informatique pour les particuliers : dépannage, configuration, conseils... On parle français, promis, pas martien.",
    features: [
      "Dépannage à domicile",
      "Configuration PC & box",
      "Nettoyage & optimisation",
      "Suppression de virus",
      "Conseils personnalisés",
    ],
  },
  {
    slug: "reparation-montage-upgrade",
    title: "Réparation, Montage & Upgrade",
    short: "On répare, on monte, on booste votre machine.",
    icon: "Wrench",
    image: IMG.repair2,
    category: ["particulier"],
    intro:
      "Service de réparation, montage de PC sur mesure et upgrade de vos composants pour une machine plus rapide qu'un croco à l'heure du goûter.",
    features: [
      "Diagnostic complet",
      "Montage PC sur mesure",
      "Upgrade RAM, SSD, GPU",
      "Réparation matérielle",
      "Récupération de données",
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const entrepriseServices = () =>
  services.filter((s) => s.category.includes("entreprise"));
export const particulierServices = () =>
  services.filter((s) => s.category.includes("particulier"));

export const testimonials = [
  {
    name: "Julie M.",
    role: "Gérante, TPE Nantes",
    text: "Réactif, clair et de bonne humeur. CrokoTech a remis notre réseau d'aplomb en une matinée. On recommande les yeux fermés !",
    rating: 5,
  },
  {
    name: "Thomas D.",
    role: "Particulier",
    text: "Mon PC était plus lent qu'un escargot. Après l'upgrade SSD, c'est une fusée. Merci le croco !",
    rating: 5,
  },
  {
    name: "Sophie & Marc",
    role: "Restaurant, 44",
    text: "Installation vidéosurveillance impeccable et explications simples. Enfin quelqu'un qui parle français !",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Intervenez-vous chez les particuliers ET les entreprises ?",
    a: "Oui ! Que vous soyez un particulier en quête de tranquillité numérique ou une entreprise en mission digitale, CrokoTech est là.",
  },
  {
    q: "Les déplacements sont-ils payants ?",
    a: "Les déplacements sont gratuits sur Nantes et dans tout le département du 44.",
  },
  {
    q: "Proposez-vous des contrats d'infogérance ?",
    a: "Absolument, sur mesure selon la taille de votre parc et vos besoins. Contactez-nous pour un devis.",
  },
  {
    q: "Faites-vous aussi des sites web ?",
    a: "Oui, sites vitrines, e-commerce et applications web. Du beau ET du fonctionnel, on transforme les pixels en sourires !",
  },
];
