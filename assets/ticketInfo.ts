export type Ticket = {
  type: 'standard' | 'vip' | 'platinum';
  value: number;
};

export type TicketsSimulation = Ticket & {
  amount: number;
};

export type ConcertCardInfo = {
  bandName: string;
  country: string;
  city: string;
  date: Date;
};

export type TicketInfoProps = {
  bandName: string;
  country: string;
  city: string;
  date: Date;
  tickets: Ticket[];
  ticketsSimulation: TicketsSimulation[];
};

export const ticketsInfo: TicketInfoProps[] = [
  {
    bandName: 'Brainstorm',
    country: 'Latvia',
    city: 'Riga',
    date: new Date(),
    tickets: [
      {
        type: 'standard',
        value: 100,
      },

      {
        type: 'vip',
        value: 200,
      },

      {
        type: 'platinum',
        value: 400,
      },
    ],
    ticketsSimulation: [
      {
        type: 'standard',
        value: 100,
        amount: 0,
      },

      {
        type: 'vip',
        value: 200,
        amount: 0,
      },

      {
        type: 'platinum',
        value: 400,
        amount: 0,
      },
    ],
  },
  {
    bandName: 'Malo',
    country: 'France',
    city: 'Paris',
    date: new Date(),
    tickets: [
      {
        type: 'standard',
        value: 50,
      },

      {
        type: 'vip',
        value: 80,
      },

      {
        type: 'platinum',
        value: 120,
      },
    ],
    ticketsSimulation: [
      {
        type: 'standard',
        value: 50,
        amount: 0,
      },

      {
        type: 'vip',
        value: 80,
        amount: 0,
      },

      {
        type: 'platinum',
        value: 120,
        amount: 0,
      },
    ],
  },
  {
    bandName: 'LUNA',
    country: 'Poland',
    city: 'Krakow',
    date: new Date(),
    tickets: [
      {
        type: 'standard',
        value: 80,
      },

      {
        type: 'vip',
        value: 150,
      },

      {
        type: 'platinum',
        value: 250,
      },
    ],
    ticketsSimulation: [
      {
        type: 'standard',
        value: 80,
        amount: 0,
      },

      {
        type: 'vip',
        value: 150,
        amount: 0,
      },

      {
        type: 'platinum',
        value: 250,
        amount: 0,
      },
    ],
  },
  {
    bandName: 'La Pegatina',
    country: 'Spain',
    city: 'Barcelona',
    date: new Date(),
    tickets: [
      {
        type: 'standard',
        value: 120,
      },

      {
        type: 'vip',
        value: 220,
      },

      {
        type: 'platinum',
        value: 420,
      },
    ],
    ticketsSimulation: [
      {
        type: 'standard',
        value: 120,
        amount: 0,
      },

      {
        type: 'vip',
        value: 220,
        amount: 0,
      },

      {
        type: 'platinum',
        value: 420,
        amount: 0,
      },
    ],
  },
  {
    bandName: 'Konstrakta',
    country: 'Serbia',
    city: 'Novi Sad',
    date: new Date(),
    tickets: [
      {
        type: 'standard',
        value: 75,
      },

      {
        type: 'vip',
        value: 125,
      },

      {
        type: 'platinum',
        value: 200,
      },
    ],
    ticketsSimulation: [
      {
        type: 'standard',
        value: 75,
        amount: 0,
      },

      {
        type: 'vip',
        value: 125,
        amount: 0,
      },

      {
        type: 'platinum',
        value: 200,
        amount: 0,
      },
    ],
  },
  {
    bandName: 'Subwolfer',
    country: 'Norway',
    city: 'Oslo',
    date: new Date(),
    tickets: [
      {
        type: 'standard',
        value: 150,
      },

      {
        type: 'vip',
        value: 300,
      },

      {
        type: 'platinum',
        value: 450,
      },
    ],
    ticketsSimulation: [
      {
        type: 'standard',
        value: 150,
        amount: 0,
      },

      {
        type: 'vip',
        value: 300,
        amount: 0,
      },

      {
        type: 'platinum',
        value: 450,
        amount: 0,
      },
    ],
  },
];
