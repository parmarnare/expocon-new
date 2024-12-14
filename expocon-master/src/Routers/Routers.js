import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import Hero from "../Pages/Home/Hero";
import Badgeprinting from "../Pages/Badgeprinting/Badgeprinting";
import Scanlist from "../Pages/SingleSacn/Scanlist";
import Scantype from "../Pages/SingleSacn/Scantype";
import ScanbyHardware from "../Pages/SingleSacn/ScanbyHardware";
import ManualSearch from "../Pages/SingleSacn/ManualSearch";
import ManualSearch2 from "../Pages/MultiScan/ManualSearch";
import ScanbyWebsite from "../Pages/SingleSacn/ScanbyWebsite";
import Selectcamera from "../Pages/SingleSacn/Selectcamera";
import Stopscanning from "../Pages/SingleSacn/Stopscanning";
import EntryList from "../Pages/MultiScan/EntryList";
import MultiScan from "../Pages/MultiScan/MultiScan";
import ScanQRHardware from "../Pages/MultiScan/ScanQRHardware";
import RequestPermission from "../Pages/MultiScan/RequestPermission";
import SelectCamera from "../Pages/MultiScan/SelectCamera";
import Scanning from "../Pages/MultiScan/Scanning";
import CertificatePrintingList from "../Pages/CertificatePrintingList/CertificatePrintingList";
import CertificatePrintingSearchBar from "../Pages/CertificatePrintingList/CertificatePrintingSearchBar";
import SelfBadgePrintingKiosk from "../Pages/SelfBadgePrintingKiosk/SelfBadgePrintingKiosk";
import SelfCertificatePrintingKiosk from "../Pages/SelfCertificatePrintingKiosk/SelfCertificatePrintingKiosk";
import VisitorRegistrationKiosk from "../Pages/VisitorRegistrationKiosk/VisitorRegistrationKiosk";
import AttandanceScanningList from "../Pages/AttandanceScanningList/AttandanceScanningList";
import AttendanceScanningKiosk from "../Pages/AttandanceScanningList/Attendance-Scanning-Kiosk";
import AddRegistration from "../Pages/AddRegistration/AddRegistration";
import BadgeCategory from "../Pages/BadgeCategory/BadgeCategory";
import Scancategory from "../Pages/Scancategory/Scancategory";
import Certificatecategory from "../Pages/Certificatecategory/Certificatecategory";
import Homefooter from "../Componets/Homefooter";
import Setting from "../Pages/Setting/Setting";
import DownloadReport from "../Pages/Setting/DownloadReport";
import Graphicsetting from "../Pages/Setting/Graphicsetting";
import UploadData from "../Pages/Setting/UploadData";
import UserPrivateRoutes from "../middleware/Authenticated";
import BadgeSetup from "../Pages/Setting/BadgeSetup";
import UploadAttendee from "../Componets/UploadAttendee";
import UploadUser from "../Componets/UploadUser";

const Routers = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      <div className="pt-15">
        <Routes>
          <Route exact path="/" element={<Login />} />

          {/* <Route path="/" element={<UserPrivateRoutes />}> */}
          <Route exact path="/hero" element={<Hero />} />
          {/* </Route> */}
          <Route exact path="/padge-printing" element={<Badgeprinting />} />
          {/* single scan  rout  */}
          <Route exact path="/scan-list" element={<Scanlist />} />
          <Route exact path="/scan-type/:id" element={<Scantype />} />
          <Route
            exact
            path="/scanby-hardware/:id"
            element={<ScanbyHardware />}
          />
          <Route exact path="/manual-search/:id" element={<ManualSearch />} />
          <Route
            exact
            path="/scan-by-website/:id"
            element={<ScanbyWebsite />}
          />
          <Route exact path="/select-camera/:id" element={<Selectcamera />} />
          <Route exact path="/stops-canning/:id" element={<Stopscanning />} />
          {/* Multi scan list ronts  */}
          <Route exact path="/entryList" element={<EntryList />} />
          <Route exact path="/entryscan/:id" element={<MultiScan />} />
          <Route
            exact
            path="/scan-qr-hardware/:id"
            element={<ScanQRHardware />}
          />
          <Route
            exact
            path="/multi-manualsearch/:id"
            element={<ManualSearch2 />}
          />
          <Route
            exact
            path="/request-permission/:id"
            element={<RequestPermission />}
          />
          <Route
            exact
            path="/multiselect-camera/:id"
            element={<SelectCamera />}
          />
          <Route exact path="/Scanning/:id" element={<Scanning />} />
          {/* ------------------------Certificate Printing List------------------------------ */}
          <Route
            exact
            path="/certificate-printing-list"
            element={<CertificatePrintingList />}
          />
          <Route
            exact
            path="/certificate-printing-search"
            element={<CertificatePrintingSearchBar />}
          />
          {/* SelfBadgePrintingKiosk */}
          <Route
            exact
            path="/self-badg-perinting-kiosk"
            element={<SelfBadgePrintingKiosk />}
          />
          <Route
            exact
            path="/self-certificate-perinting-kiosk"
            element={<SelfCertificatePrintingKiosk />}
          />
          {/* VisitorRegistrationKiosk */}
          <Route
            exact
            path="/visitor-registration-kiosk"
            element={<VisitorRegistrationKiosk />}
          />
          <Route
            exact
            path="/attandance-scanning-list"
            element={<AttandanceScanningList />}
          />
          <Route
            exact
            path="/attendance-scanning-kiosk"
            element={<AttendanceScanningKiosk />}
          />
          <Route exact path="/add-registration" element={<AddRegistration />} />
          <Route exact path="/badge-category" element={<BadgeCategory />} />
          <Route exact path="/scan-category" element={<Scancategory />} />
          <Route
            exact
            path="/Certificate-category"
            element={<Certificatecategory />}
          />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/download-report" element={<DownloadReport />} />
          <Route exact path="/badge-setup" element={<BadgeSetup />} />
          <Route exact path="/graphic-setting" element={<Graphicsetting />} />
          <Route exact path="/upload-data" element={<UploadData />} />
          <Route exact path="/upload-data/attendee" element={<UploadAttendee />} />
          <Route exact path="/upload-data/user" element={<UploadUser />} />
        </Routes>
      </div>

      {location.pathname !== "/hero" && <Footer />}
      {location.pathname === "/hero" && <Homefooter />}
    </div>
  );
};

export default Routers;
