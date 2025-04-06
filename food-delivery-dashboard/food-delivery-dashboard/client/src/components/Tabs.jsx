const tabs = [
    "Dashboard",
    "Orders",
    "Customers",
    "Analytics",
    "Inventory",
    "Settings",
    "Profile",
  ];
  
  export default function Tabs({ activeTab, setActiveTab }) {
    return (
      <div className="bg-white shadow-md">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-3 px-6 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  }
  