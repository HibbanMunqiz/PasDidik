import { Component, Paintbrush, Rocket, Search, Wrench, User } from 'lucide-react';

export const sidebarNav = [
  {
    title: "Papan Pemuka",
    icon: <Rocket className="h-5 w-5" />,
    href: "/docs/introduction",
    defaultOpen: true,
    pages: [] 
  },
  {
    title: "Pelajar",
    icon: <User className="h-5 w-5" />,
    href: "/docs/pelajar",
    defaultOpen: true,
    pages: [
      {
        title: 'Pelajar Semasa',
        href: '/docs/pelajar',
      },
      {
        title: 'Senarai Induk Pelajar',
        href: '/docs/pelajar/senarai-induk-pelajar',
      },
      {
        title: 'Ibu Bapa',
        href: '/docs/pelajar/ibu-bapa',
      },
    ] 
  },
  {
    title: 'Search Bar',
    icon: <Search className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/search-bar',
    pages: [],
  },
];
