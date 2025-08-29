import { Search, User, LayoutDashboard, Clipboard, School, FileUser, Settings } from 'lucide-react';

export const sidebarNav = [
  {
    title: "Papan Pemuka",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/docs/introduction",
    defaultOpen: true,
    pages: [] 
  },
  {
    title: "Pelajar",
    icon: <User className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Pelajar Semasa',
        href: '/docs/pelajar/pelajar-semasa',
      },
      {
        title: 'Senarai Induk Pelajar',
        href: '/docs/pelajar/senarai-induk',
      },
      {
        title: 'Ibu Bapa',
        href: '/docs/pelajar/ibu-bapa',
      },
    ] 
  },
  {
    title: 'Senarai Kakitangan',
    icon: <School className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/senarai-kakitangan',
    pages: [],
  },
  {
    title: 'Dokumen',
    icon: <Clipboard className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/dokumen',
    pages: []
  },
  {
    title: 'Profil Sekolah',
    icon: <FileUser className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/profile-sekolah',
    pages: []
  },
  {
    title: 'Tetapan',
    icon: <Settings className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/tetapan',
    pages: []
  },
  {
    title: 'Search Bar',
    icon: <Search className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/search-bar',
    pages: [],
  },
];
