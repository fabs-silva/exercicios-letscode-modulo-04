export type Ticket = {
  type: 'standard' | 'vip' | 'platinum';
  value: number;
};

export type TicketsSimulation = Ticket & {
  id: number;
  amount: number;
};

export type ConcertCardInfo = {
  id: number;
  bandName: string;
  country: string;
  city: string;
  date: Date;
};

export type TicketInfoProps = {
  id: number;
  bandName: string;
  country: string;
  city: string;
  date: Date;
  ticketsSimulation: TicketsSimulation[];
};

export const ticketsInfo: TicketInfoProps[] = [
  {
    id: 1,
    bandName: 'Brainstorm',
    country: 'Latvia',
    city: 'Riga',
    date: new Date(),
    ticketsSimulation: [
      {
        id: 0,
        type: 'standard',
        value: 100,
        amount: 0,
      },

      {
        id: 1,
        type: 'vip',
        value: 200,
        amount: 0,
      },

      {
        id: 2,
        type: 'platinum',
        value: 400,
        amount: 0,
      },
    ],
  },
  {
    id: 2,
    bandName: 'Malo',
    country: 'France',
    city: 'Paris',
    date: new Date(),
    ticketsSimulation: [
      {
        id: 0,
        type: 'standard',
        value: 50,
        amount: 0,
      },

      {
        id: 1,
        type: 'vip',
        value: 80,
        amount: 0,
      },

      {
        id: 2,
        type: 'platinum',
        value: 120,
        amount: 0,
      },
    ],
  },
  {
    id: 3,
    bandName: 'LUNA',
    country: 'Poland',
    city: 'Krakow',
    date: new Date(),
    ticketsSimulation: [
      {
        id: 0,
        type: 'standard',
        value: 80,
        amount: 0,
      },

      {
        id: 1,
        type: 'vip',
        value: 150,
        amount: 0,
      },

      {
        id: 2,
        type: 'platinum',
        value: 250,
        amount: 0,
      },
    ],
  },
  {
    id: 4,
    bandName: 'La Pegatina',
    country: 'Spain',
    city: 'Barcelona',
    date: new Date(),
    ticketsSimulation: [
      {
        id: 0,
        type: 'standard',
        value: 120,
        amount: 0,
      },

      {
        id: 1,
        type: 'vip',
        value: 220,
        amount: 0,
      },

      {
        id: 2,
        type: 'platinum',
        value: 420,
        amount: 0,
      },
    ],
  },
  {
    id: 5,
    bandName: 'Konstrakta',
    country: 'Serbia',
    city: 'Novi Sad',
    date: new Date(),
    ticketsSimulation: [
      {
        id: 0,
        type: 'standard',
        value: 75,
        amount: 0,
      },

      {
        id: 1,
        type: 'vip',
        value: 125,
        amount: 0,
      },

      {
        id: 2,
        type: 'platinum',
        value: 200,
        amount: 0,
      },
    ],
  },
  {
    id: 6,
    bandName: 'Subwolfer',
    country: 'Norway',
    city: 'Oslo',
    date: new Date(),
    ticketsSimulation: [
      {
        id: 0,
        type: 'standard',
        value: 150,
        amount: 0,
      },

      {
        id: 1,
        type: 'vip',
        value: 300,
        amount: 0,
      },

      {
        id: 2,
        type: 'platinum',
        value: 450,
        amount: 0,
      },
    ],
  },
];
