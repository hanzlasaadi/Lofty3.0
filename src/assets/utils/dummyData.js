export const dummyRoomDetails = {
  roomDetail: {
    adId: 99,
    partnerId: 99,
    noOfBed: 1,
    noOfPerson: 1,
    price: 9999,
    basePrice: 9999,
    roomType: "Room Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mauris nisl. Praesent elementum mollis sem, at iaculis metus gravida id. Vestibulum scelerisque lacus ac elit hendrerit ultricies.",
    hotelName: "Hotel Name",
    location: "Hotel Location",
    isFavourite: false,
    latitude: 80,
    longitude: 80,
    roomNo: 69,
  },
  facilityList: [
    {
      facilityName: "Facility",
      image: "https://placehold.co/100x100",
      count: 0,
    },
    {
      facilityName: "Facility",
      image: "https://placehold.co/100x100",
      count: 0,
    },
    {
      facilityName: "Facility",
      image: "https://placehold.co/100x100",
      count: 0,
    },
    {
      facilityName: "Facility",
      image: "https://placehold.co/100x100",
      count: 0,
    },
  ],
  roomImages: [
    "https://placehold.co/600x400/EEE/31343C",
    "https://placehold.co/600x400/EEE/31343C",
    "https://placehold.co/600x400/EEE/31343C",
    "https://placehold.co/600x400/EEE/31343C",
  ],
  reservedDates: [],
};

export const favDummyData = {
  adId: 0,
  noOfBed: 0,
  noOfPerson: 0,
  adImage1: "https://placehold.co/600x400/EEE/31343C",
  price: 0,
  basePrice: 0,
  roomType: "Room Name",
};

export const partnerDummyData = {
  partnerProfile: {
    partnerId: 26,
    firstName: "firstName",
    lastName: "lastName",
    email: "email@example.com",
    phone: "123456789",
    address: "hotel Address",
    adId: null,
    hotelName: "Hotel Name",
  },
  review: [],
  partnerAds: [
    {
      adId: 0,
      noOfBed: 0,
      noOfPerson: 0,
      price: 0,
      roomType: "Room Type",
      adImage1: "https://placehold.co/100x100",
    },
  ],
};

export const dummyBookRoomDetails = {
  roomDetail: {
    adId: 0,
    price: 0,
    roomType: "Room Type",
    hotelName: "Hotel Name",
    location: "Hotel Address",
  },
  facilityList: [
    {
      facilityName: "Central Air conditioning",
      image: "https://placehold.co/100x100",
      count: 0,
    },
  ],
  roomImages: ["https://placehold.co/100x100"],
};

export const dummyCityData = [
  {
    id: 1,
    cityName: "Lahore",
  },
  {
    id: 6,
    cityName: "Murree",
  },
];

export const dummyWalletData = {
  depositHistoy: [
    {
      customerName: "Name",
      amount: 5000,
      referenceNumber: "100001394201825564",
      status: 1,
      createdDate: "2023-10-11T21:01:51.66502",
    },
    {
      customerName: "Name",
      amount: 1000,
      referenceNumber: "100001394280707303",
      status: 1,
      createdDate: "2023-10-18T10:17:42.977513",
    },
    {
      customerName: "Name",
      amount: 500,
      referenceNumber: "100001394285799965",
      status: 1,
      createdDate: "2023-10-19T00:38:28.697143",
    },
    {
      customerName: "Name",
      amount: 1000,
      referenceNumber: "100001394207039033",
      status: 1,
      createdDate: "2023-10-19T00:54:04.893408",
    },
  ],
  walletHistory: [
    {
      customerName: "Name",
      amount: 1000,
      createdDate: "2023-10-19T02:02:07.454703",
    },
  ],
};
