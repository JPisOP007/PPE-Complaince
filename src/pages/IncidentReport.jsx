
import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import StatusBadge from "../components/StatusBadge";
import ChartLineGraph from "../components/ChartLineGraph";

const recentReports = [
  { name: "Warehouse Entry", status: "Under Review" },
  { name: "Oil Rig Slips", status: "Resolved" },
  { name: "Unauthorized Access", status: "Under Review" },
];

const incidents = [
  {
    timestamp: "2025-01-01 10:00",
    location: "Main Gate",
    event: "Unauthorized Access",
    personnel: "John Smith",
    status: "Resolved"
  },
  {
    timestamp: "2025-01-01 09:30",
    location: "Warehouse Entry",
    event: "Suspicious Activity",
    personnel: "Jane Doe",
    status: "Under Review"
  },
  {
    timestamp: "2025-01-01 08:45",
    location: "Parking Lot",
    event: "Theft Detected",
    personnel: "Michael Brown",
    status: "Resolved"
  },
  {
    timestamp: "2025-01-01 07:20",
    location: "Control Room",
    event: "System Alert",
    personnel: "Emily Davis",
    status: "Under Review"
  },
  {
    timestamp: "2025-01-01 06:50",
    location: "Back Gate",
    event: "Unauthorized Access",
    personnel: "Chris Johnson",
    status: "Resolved"
  }
];

const IncidentReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [cameraId, setCameraId] = useState("");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Incident Report</h1>

      {/* Filter Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Select start date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Select end date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Select location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Camera ID</label>
          <input
            type="text"
            placeholder="camera ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1"
            value={cameraId}
            onChange={(e) => setCameraId(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Recent Report */}
        <div className="w-full md:w-2/5 bg-[#F8F5EC] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Recent Report</h2>
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{report.name}</span>
                <StatusBadge status={report.status} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Filter Options */}
        <div className="w-full md:w-3/5 flex flex-wrap gap-2">
          <button className="flex items-center gap-1 px-4 py-2 rounded-md border bg-white">
            Incident Type <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 px-4 py-2 rounded-md border bg-white">
            Tags <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 px-4 py-2 rounded-md border bg-white">
            Status <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 px-4 py-2 rounded-md border bg-white">
            Personnel <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Incidents Table */}
      <div className="overflow-x-auto bg-white rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#9F8D64] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Timestamp</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Camera Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Event Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Assigned Personnel</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidents.map((incident, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.timestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.event}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.personnel}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={incident.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center gap-2">
          Download Report
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md">
          Schedule Report
        </button>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Incident Trends */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Incident Trends</h2>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold">50 incidents</div>
              <div className="text-green-600 text-sm">
                Last 7 Days +10%
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border h-32 flex items-end">
            <div className="h-20 w-1/3 bg-[#F8F5EC] relative mx-1">
              <div className="absolute -top-6 w-full text-center text-xs">Unauthorized Access</div>
            </div>
            <div className="h-12 w-1/3 bg-[#F8F5EC] relative mx-1">
              <div className="absolute -top-6 w-full text-center text-xs">Oil Spill</div>
            </div>
            <div className="h-16 w-1/3 bg-[#F8F5EC] relative mx-1">
              <div className="absolute -top-6 w-full text-center text-xs">System Alert</div>
            </div>
          </div>
        </div>
        
        {/* Camera Activity */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Camera Activity Levels</h2>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold">120 hours</div>
              <div className="text-red-600 text-sm">
                Last 30 Days -5%
              </div>
            </div>
          </div>
          
          <ChartLineGraph className="bg-white p-4 rounded-lg border" />
          
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <div>Main Gate</div>
            <div>Parking Lot</div>
            <div>Warehouse</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentReport;
