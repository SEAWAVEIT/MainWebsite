import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Pages/UserAuthentication/AuthProvider";
import Navbar from "./components/Header/Navbar";
import Admin from "./components/Admin/Admin";
import AdminBlogPostAllowance from "./components/Pages/Blog/AdminBlogPostAllowance";
import AdminCareerPostAllowance from "./components/Pages/Careers/AdminCareerPostAllowance";
import Footer from "./components/Footer/Footer";
import ServiceFooter from "./components/Footer/ServiceFooter";
import SwitchFooter from "./components/Footer/SwitchFooter";
import DisplayPage from "./components/Main/HeroDisplayPage";
import Main1 from "./components/Main/Hero01";
import Main2 from "./components/Main/Hero02";
import Main3 from "./components/Main/Hero03";
import Main4 from "./components/Main/Hero04";
import Main5 from "./components/Main/Hero05";
import Main6 from "./components/Main/Hero06";
import Main7 from "./components/Main/Hero07";
import Main8 from "./components/Main/Hero08";
import Main9 from "./components/Main/Hero09";
import Main10 from "./components/Main/Hero10";
import CustomClearance from "./components/Pages/Services/CustomClearance";
import FreightForwarding from "./components/Pages/Services/FreightForwarding";
import Transportation from "./components/Pages/Services/Transportation";
import EximConsultancy from "./components/Pages/Services/EximConsultancy";
import Warehousing from "./components/Pages/Services/Warehousing";
import LogisticsDesign from "./components/Pages/Services/LogisticsDesign";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import AllBlog from "./components/Pages/Blog/AllBlogs";
import SingleBlog from "./components/Pages/Blog/SingleBlog";
import SignIn from "./components/Pages/UserAuthentication/SignIn";
import Career from "./components/Pages/Careers/Career";
import UserCareerInputField from "./components/Pages/Careers/UserInputCareerField";
import AllApplicants from "./components/Pages/Careers/ViewApplicants";
import ApplicantDetails from "./components/Pages/Careers/ApplicantDetail";
import JobDetails from "./components/Pages/Careers/JobDetails";
import HeroMissionCard from "./components/Main/HeroMissionCard";

import FreeQuote from "./components/Pages/FreeQuote/FreeQuote";
import QuoteDetails from "./components/Pages/FreeQuote/QuoteDetails";
import ViewQuoteResquests from "./components/Pages/FreeQuote/ViewQuoteResquests";



import ScrollToTopButton from "./components/Items/ScrollToTopButton"
import ChatButton from "./components/Items/ChatButton"
import HeroContact from "./components/Main/HeroContact";
import EditBlogs from "./components/Pages/Blog/EditBlogs";
import EditSingleBlog from "./components/Pages/Blog/EditSingleBlog";
import AdminCareerEditAllowance from "./components/Pages/Careers/AdminCareerEditAllowance";




import ProtectedRoute from "./components/Admin/ProtectedRoute";
import CSR from "./components/Pages/CSR/CSR";
import HeroAbout from "./components/Main/HeroAbout";



function Home() {
  return (
    <div>
      <DisplayPage />
      <Main1 />
      <Main2 />
      <HeroAbout />
      <HeroMissionCard />
      <Main3 />
      {/* <Main4 /> */}
      <Main5 />
      <Main6 />
      <Main7 />
      <Main8 />
      <Main9 />
      <Contact />
      {/* <HeroContact /> */}
      <Main10 />
    </div>
  );
}

function App() {
  return (
    <AuthProvider >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<HeroAbout />} />
        <Route path="/getafreequote" element={<FreeQuote />} />
        <Route path="/quoteDetails/:quoteId" element={<QuoteDetails />} />
        <Route path="/customclearance" element={<CustomClearance />} />
        <Route path="/freightforwarding" element={<FreightForwarding />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/warehousing" element={<Warehousing />} />
        <Route path="/eximconsultancy" element={<EximConsultancy />} />
        <Route path="/logisticsdesign" element={<LogisticsDesign />} />
        <Route path="/allblogs" element={<AllBlog />} />
        <Route path="/csr" element={<CSR />} />


        <Route
          path="/adminblogpostallowance"
          element={
            <ProtectedRoute element={<AdminBlogPostAllowance />} />
          }
        />
        <Route path="/adminviewquoterequests"
          element={
            <ProtectedRoute element={<ViewQuoteResquests />} />
          }
        />
        <Route
          path="/admincareerpostallowance"
          element={
            <ProtectedRoute element={<AdminCareerPostAllowance />} />
          }
        />
        <Route
          path="/admincareereditallowance"
          element={
            <ProtectedRoute element={<AdminCareerEditAllowance />} />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/admineditblogs"
          element={<ProtectedRoute element={<EditBlogs />} />} />
        <Route
          path="/blogedit/:postId"
          element={<ProtectedRoute element={<EditSingleBlog />} />} />

        <Route
          path="/blog/:postId"
          element={<SingleBlog />} />

        <Route path="/careers" element={<Career />} />
        <Route path="/careerinputfield" element={<UserCareerInputField />} />
        <Route
          path="/jobdetails/:jobId"
          element={<JobDetails />}
        />
        <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
        <Route path="/adminallapplicants" element={<ProtectedRoute element={<AllApplicants />} />} />
        <Route
          path="/applicantDetail/:applicantId"
          element={<ProtectedRoute element={<ApplicantDetails />} />}

        />
      </Routes>
      <ScrollToTopButton />
      <ChatButton />
      <SwitchFooter />

    </AuthProvider>
  );
}

export default App;
