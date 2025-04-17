import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 ">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
            <img className="w-10 h-8 mr-2 rounded-sm" src="eclipse.jpg" alt="logo"/>
            <h1 className="text-3xl font-bold text-white">AfterHours Mumbai</h1>

        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login / Signup
        </button>
      </header>

      {/* Nearby Clubs Section */}
      <section className="mb-8">
        <h2 className=" text-white text-2xl font-semibold mb-4">Clubs Near You</h2>
        {/* Placeholder for GPS-based club data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Bastian", "ToyRoom", "Escobar"].map((club) => (
            <div
              key={club}
              className="text-white p-4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:bg-gray-800 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2"> {club}</h3>
              <img className="w-full h-50 object-cover rounded-md mb-2" src={`/${club}.jpg`} alt="" />
              <p className="text-white">Distance: {Math.floor(Math.random() * 5) + 1} km</p>
              <div className="mt-2 text-white">
                <span className="text-white ">Crowd Meter:</span>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${30 + Math.random() * 60}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mumbai Events Section */}
<section className="mb-8">
  <h2 className="text-white text-2xl font-semibold mb-4">Upcoming Events in Mumbai</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { 
        name: "EDM Night", 
        date: "April 20, 2025", 
        venue: "AntiSocial, Lower Parel",
        image: "/edm-night.jpg"
      },
      { 
        name: "Bollywood Bash", 
        date: "April 22, 2025", 
        venue: "Kitty Su, Andheri",
        image: "/bollywood-bash.jpg"
      },
      { 
        name: "Techno Underground", 
        date: "April 25, 2025", 
        venue: "Razzberry Rhinoceros, Juhu",
        image: "/techno-underground.jpg"
      }
    ].map((event) => (
      <div
        key={event.name}
        className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-48 flex items-end"
      >
        {/* Event background image */}
        <img 
          src={event.image}
          alt={event.name} 
          className="absolute inset-0 w-full h-full object-cover" 
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{event.name}</h3>
          <p className="text-sm">Date: {event.date}</p>
          <p className="text-sm">Venue: {event.venue}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* QR Entry & Discounts */}
      <section className="mb-8">
        <h2 className="text-2xl text-white font-semibold mb-4">Fast Entry & Coupons</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 bg-white rounded-2xl shadow flex-1 text-center">
            <h3 className="text-lg font-bold mb-2">Your QR Pass</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YourClubEntryCode123"
              alt="QR Code"
              className="mx-auto"
            />
            <p className="text-sm mt-2 text-gray-600">Scan at the entrance for faster check-in!</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow flex-1 text-center">
            <h3 className="text-lg font-bold mb-2">Food & Drinks Coupons</h3>
            <p className="text-sm text-gray-600 mb-2">Flat 20% off on beverages</p>
            <p className="text-sm text-gray-600">Valid until: April 30, 2025</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Claim Coupon
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} AfterHours Mumbai. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
