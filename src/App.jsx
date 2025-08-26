import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCard from "./components/StatsCard";
import LineChartCard from "./components/LineChartCard";
import WebsiteTraffic from "./components/WebsiteTraffic";
import DeviceTraffic from "./components/DeviceTraffic";
import LocationTraffic from "./components/LocationTraffic";
import Notifications from "./components/Notifications";
import Activities from "./components/Activities";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-12 gap-6">
          {/* Stats */}
          <StatsCard title="Views" value="721K" change="+11.02%" positive />
          <StatsCard title="Visits" value="367K" change="-0.03%" />
          <StatsCard title="New Users" value="1,156" change="+15.03%" positive />
          <StatsCard title="Active Users" value="239K" change="+6.08%" positive />

          {/* Charts */}
          <LineChartCard />
          <WebsiteTraffic />
          <DeviceTraffic />
          <LocationTraffic />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 bg-white border-l p-4 flex flex-col">
        <Notifications />
        <Activities />
        <Contacts />
      </div>
    </div>
  );
}
