import { Component, Paintbrush, Rocket, Search, Wrench, User } from 'lucide-react';

export const sidebarNav = [
  {
    title: "Laman Utama",
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
    pages: [] 
  },
  {
    title: 'Getting Started',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Installation',
        href: '/docs/getting-started/installation',
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
      },
    ],
  },
  {
    title: 'Search Bar',
    icon: <Search className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/search-bar',
    pages: [],
  },
];
