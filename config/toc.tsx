type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

// Your TocData object with the correct types
export const TocData: TocData = {
  'introduction': [
    {
    title: 'Selamat Datang ke eSRITI',
    href: '/docs/introduction#pengenalan',
    pages: [
      {
        title: 'Papan Pemuka',
        href: '/docs/introduction#papan-pemuka'
      },
      {
        title: 'Fitur Tersedia',
        href: '/docs/introduction#fitur-tersedia'
      }
    ]
  }
  ],

  'pelajar/pelajar-semasa': [
    {
      title: 'Laman Pelajar eSRITI',
      href: '/docs/pelajar/pelajar-semasa#laman-pelajar-esriti',
      pages: [
        {
          title: 'Mengendali Data Pelajar',
          href: '/docs/pelajar/pelajar-semasa#mengendali-data-pelajar',
        }
      ]
    },
  ],
  'pelajar/senarai-induk': [
    {
      title: 'Senarai Induk Pelajar',
      href: '/docs/pelajar/senarai-induk#senarai-induk-pelajar',
      pages: []
    }
  ],
  'pelajar/ibu-bapa': [
    {
      title: 'Ibu Bapa',
      href: '/docs/pelajar/ibu-bapa#ibu-bapa',
      pages: [
        {
          title: 'Mengendali Data Ibu Bapa',
          href: '/docs/pelajar/ibu-bapa#mengendali-data-ibu-bapa',
        }
      ]
    }
  ]


};
