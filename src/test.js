const data = [
    {   img: "https://i.ibb.co/v3XMK2F/seagull.jpg",
        name:"Seagull Hotel",
        location: "Sea Beach Soghundha Point,Hotel Motel Zone, Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Welcome to SEAGULL HOTEL where business and leisure blend together. Enjoying an unrivalled location, overlooking the Bay of Bengal (only 25 yards from the Bay water) and sitting in the laps of hills, we offer deluxe accommodation in 181 well appointed guest rooms and suites. The panoramic view of the ocean, the majestic hills and the natural beauty of the tamarisk trees are all wonderfully complemented by luxury facilities and Bangladeshi hospitality."
    },
    {   img: "https://i.ibb.co/Zf7qyZ6/220q0u000000jfm173-FB1-R-800-525.jpg",
        name:"Best western plus heritage",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: 'Heritage hotel is very conveniently located, just a few steps away from the sea and the coastline of Cox’s Bazar. Geographically because of it’s longest natural sandy beach Cox’s bazaar has become a place of interest for the travelers across the globe. With breath taking views of the sea from our balconies, the hotel today stands tall for its world class accommodation and facilities, which aligning itself with International hotel standards will surely add up to the cause of your exuberance of visiting the place.So whether it is a trip for leisure or honeymoon or celebrating a very special moment of your life or if it’s none of these but your work, we with our spacious rooms – biggest in town, delicious food by our experienced Chefs at our outlets, a well appreciated wide array of buffet breakfast consisting of local and international cuisine, free wi-fi and above all our young energetic team to serve you, will make your visit memorable one.'
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Hotel Diamond Palace, Cox's Bazar",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"The Cox Beach Resort",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description:"The Cox Beach Resort is a 3-star property located in Cox's Bazar, facing the beach. This 3-star hotel offers an ATM and ticket service. The property provides a 24-hour front desk, airport transportation, room service and free WiFi. The hotel has some units with sea views, and all rooms are equipped with a terrace. Guests at The Cox Beach Resort can enjoy an Asian breakfast."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Hotel Golden Hill",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Hotel Silver Shine",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Rain View Ressort",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Rain View Ressort",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Hotel Sea Cox",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
    {   img: "https://i.ibb.co/L98LB7v/16256-116514-f64878631-3xl.webp",
        name:"Hotel Al Salam",
        location: "Cox's Bazar,Cox's Bazar,Chittagong",
        description: "Close to the beach You'll be within half a mile (1 km) of Sugandha Beach and 2 miles (3 km) of Kolatoli Beach with a stay at this Cox's Bazar hotel. Cox's Bazar Lighthouse and Laboni Beach are also within half a mile (1 km).A restaurant is on site and the staff is available around-the-clock at the 24-hour front desk.Take advantage of the free self parking.Along with free WiFi, the 54 guestrooms offer room service and flat-screen TVs. Other amenities include safes and showers. Housekeeping is available on request."
    },
  
]


