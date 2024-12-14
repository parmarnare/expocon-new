import { Link } from "react-router-dom";
import Bnner from "../../Componets/Bnner";
import axios from "axios";
const DownloadReport = () => {

  const handleExport = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/attendee/export`, {
        responseType: 'blob', // Important
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'attendees.csv');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };


  return (
    <div className="font-sans antialiased">
      {/* Registration Banner */}
      <Bnner />

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <h2 className="text-center text-3xl font-semibold mb-5">
          Download Report
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </h2>

        <div className="space-y-4 md:px-20 px-2 ">
          <div 
            className="flex justify-between items-center my-3 bg-inputBg border border-gray-300 pl-5  rounded-lg"
          >
            <span>Attendee Report</span>
            <button onClick={handleExport} className="bg-print text-white px-5 py-3 rounded-lg hover:bg-print">
              Download
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DownloadReport;
