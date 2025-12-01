import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
// Vehicle Page Imports - DENAGO (5 models)
import DenagoEvNomad from "@/pages/vehicles/DenagoEvNomad";
import DenagoEvNomadXL from "@/pages/vehicles/DenagoEvNomadXL";
import DenagoEVRoverXL from "@/pages/vehicles/DenagoEVRoverXL";
import DenagoEvRoverXL6 from "@/pages/vehicles/DenagoEvRoverXL6";
import DenagoEvRoverXXL from "@/pages/vehicles/DenagoEvRoverXXL";
// Vehicle Page Imports - EVOLUTION CARRIER (2 models)
import EvolutionCarrier6Plus from "@/pages/vehicles/EvolutionCarrier6Plus";
import EvolutionCarrier8Plus from "@/pages/vehicles/EvolutionCarrier8Plus";
// Vehicle Page Imports - EVOLUTION CLASSIC (4 models)
import EvolutionClassic2Plus from "@/pages/vehicles/EvolutionClassic2Plus";
import EvolutionClassic4Plus from "@/pages/vehicles/EvolutionClassic4Plus";
import EvolutionClassic2Pro from "@/pages/vehicles/EvolutionClassic2Pro";
import EvolutionClassic4Pro from "@/pages/vehicles/EvolutionClassic4Pro";
// Vehicle Page Imports - EVOLUTION D-MAX (4 models)
import EvolutionD6MaxGT4 from "@/pages/vehicles/EvolutionD6MaxGT4";
import EvolutionD6MaxGT6 from "@/pages/vehicles/EvolutionD6MaxGT6";
import EvolutionD6MaxXT4 from "@/pages/vehicles/EvolutionD6MaxXT4";
import EvolutionD6MaxXT6 from "@/pages/vehicles/EvolutionD6MaxXT6";
// Vehicle Page Imports - EVOLUTION D5-MAVERICK (7 models)
import EvolutionD5Maverick22 from "@/pages/vehicles/EvolutionD5Maverick22";
import EvolutionD5Maverick22Plus from "@/pages/vehicles/EvolutionD5Maverick22Plus";
import EvolutionD5Maverick4 from "@/pages/vehicles/EvolutionD5Maverick4";
import EvolutionD5Maverick4Plus from "@/pages/vehicles/EvolutionD5Maverick4Plus";
import EvolutionD5Maverick42Plus from "@/pages/vehicles/EvolutionD5Maverick42Plus";
import EvolutionD5Maverick6 from "@/pages/vehicles/EvolutionD5Maverick6";
import EvolutionD5Maverick6Plus from "@/pages/vehicles/EvolutionD5Maverick6Plus";
// Vehicle Page Imports - EVOLUTION D5-RANGER (7 models)
import EvolutionD5Ranger22 from "@/pages/vehicles/EvolutionD5Ranger22";
import EvolutionD5Ranger22Plus from "@/pages/vehicles/EvolutionD5Ranger22Plus";
import EvolutionD5Ranger4 from "@/pages/vehicles/EvolutionD5Ranger4";
import EvolutionD5Ranger4Plus from "@/pages/vehicles/EvolutionD5Ranger4Plus";
import EvolutionD5Ranger42Plus from "@/pages/vehicles/EvolutionD5Ranger42Plus";
import EvolutionD5Ranger6 from "@/pages/vehicles/EvolutionD5Ranger6";
import EvolutionD5Ranger6Plus from "@/pages/vehicles/EvolutionD5Ranger6Plus";
// Vehicle Page Imports - EVOLUTION FORESTER (2 models)
import EvolutionForester4Plus from "@/pages/vehicles/EvolutionForester4Plus";
import EvolutionForester6Plus from "@/pages/vehicles/EvolutionForester6Plus";
// Vehicle Page Imports - EVOLUTION TURMAN (3 models)
import EvolutionTurman200Plus from "@/pages/vehicles/EvolutionTurman200Plus";
import EvolutionTurman800Plus from "@/pages/vehicles/EvolutionTurman800Plus";
import EvolutionTurman1000Plus from "@/pages/vehicles/EvolutionTurman1000Plus";
// Legacy imports (for backward compatibility)
import DenagoEvCity from "@/pages/vehicles/DenagoEvCity";
import EvolutionTurfman1000 from "@/pages/vehicles/EvolutionTurfman1000";
// Blog Pages
import BlogIndexPage from "@/pages/BlogIndexPage";
import BestNEVCityCommuting from "@/pages/blog/BestNEVCityCommuting";
import NEVManufacturersUS from "@/pages/blog/NEVManufacturersUS";
import FindNEVDealerships from "@/pages/blog/FindNEVDealerships";
import NEVPriceRange from "@/pages/blog/NEVPriceRange";
import NEVTaxCredits from "@/pages/blog/NEVTaxCredits";
import NEVvsElectricCars from "@/pages/blog/NEVvsElectricCars";
import CargoDeliveryNEVs from "@/pages/blog/CargoDeliveryNEVs";
import LeaseNEVOptions from "@/pages/blog/LeaseNEVOptions";
import BuyUsedNEVs from "@/pages/blog/BuyUsedNEVs";
import NEVWarrantyComparison from "@/pages/blog/NEVWarrantyComparison";
// New PTV Blog Posts (20 new articles)
import PTVsForSaleNationwide from "@/pages/blog/PTVsForSaleNationwide";
import BuyPTVsOnline from "@/pages/blog/BuyPTVsOnline";
import TopPTVs2025 from "@/pages/blog/TopPTVs2025";
import AffordablePTVs from "@/pages/blog/AffordablePTVs";
import ElectricPTVs from "@/pages/blog/ElectricPTVs";
import PTVsForAdults from "@/pages/blog/PTVsForAdults";
import FamilyFriendlyPTVs from "@/pages/blog/FamilyFriendlyPTVs";
import StreetLegalPTVs from "@/pages/blog/StreetLegalPTVs";
import HighPerformancePTVs from "@/pages/blog/HighPerformancePTVs";
import CompactPTVs from "@/pages/blog/CompactPTVs";
import LuxuryPTVs from "@/pages/blog/LuxuryPTVs";
import PTVBuyersGuide from "@/pages/blog/PTVBuyersGuide";
import CustomizablePTVs from "@/pages/blog/CustomizablePTVs";
import PTVFinancingOptions from "@/pages/blog/PTVFinancingOptions";
import RecreationalPTVs from "@/pages/blog/RecreationalPTVs";
import BestValuePTVs from "@/pages/blog/BestValuePTVs";
import PTVsForSeniors from "@/pages/blog/PTVsForSeniors";
import DailyCommuterPTVs from "@/pages/blog/DailyCommuterPTVs";
import OffRoadPTVs from "@/pages/blog/OffRoadPTVs";
import YourSourcePTVs from "@/pages/blog/YourSourcePTVs";
// Location Pages (States and Countries)
import DynamicLocationPage from "@/pages/DynamicLocationPage";

const queryClient = new QueryClient();

function App() {
  // Global scroll-to-top on route changes
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Analytics />
        <Navigation />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
            {/* DENAGO Vehicle Pages (5 models) */}
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomad} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXL} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEVRoverXL} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXL6} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXXL} />
            
            {/* EVOLUTION CARRIER Vehicle Pages (2 models) */}
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6Plus} />
            <Route path="/vehicles/evolution-carrier-8-plus" component={EvolutionCarrier8Plus} />
            
            {/* EVOLUTION CLASSIC Vehicle Pages (4 models) */}
            <Route path="/vehicles/evolution-classic-2-plus" component={EvolutionClassic2Plus} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4Plus} />
            <Route path="/vehicles/evolution-classic-2-pro" component={EvolutionClassic2Pro} />
            <Route path="/vehicles/evolution-classic-4-pro" component={EvolutionClassic4Pro} />
            
            {/* EVOLUTION D-MAX Vehicle Pages (4 models) */}
            <Route path="/vehicles/evolution-d6-max-gt4" component={EvolutionD6MaxGT4} />
            <Route path="/vehicles/evolution-d6-max-gt6" component={EvolutionD6MaxGT6} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXT4} />
            <Route path="/vehicles/evolution-d6-max-xt6" component={EvolutionD6MaxXT6} />
            
            {/* EVOLUTION D5-MAVERICK Vehicle Pages (7 models) */}
            <Route path="/vehicles/evolution-d5-maverick-2-2" component={EvolutionD5Maverick22} />
            <Route path="/vehicles/evolution-d5-maverick-2-2-plus" component={EvolutionD5Maverick22Plus} />
            <Route path="/vehicles/evolution-d5-maverick-4" component={EvolutionD5Maverick4} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4Plus} />
            <Route path="/vehicles/evolution-d5-maverick-4-2-plus" component={EvolutionD5Maverick42Plus} />
            <Route path="/vehicles/evolution-d5-maverick-6" component={EvolutionD5Maverick6} />
            <Route path="/vehicles/evolution-d5-maverick-6-plus" component={EvolutionD5Maverick6Plus} />
            
            {/* EVOLUTION D5-RANGER Vehicle Pages (7 models) */}
            <Route path="/vehicles/evolution-d5-ranger-2-2" component={EvolutionD5Ranger22} />
            <Route path="/vehicles/evolution-d5-ranger-2-2-plus" component={EvolutionD5Ranger22Plus} />
            <Route path="/vehicles/evolution-d5-ranger-4" component={EvolutionD5Ranger4} />
            <Route path="/vehicles/evolution-d5-ranger-4-plus" component={EvolutionD5Ranger4Plus} />
            <Route path="/vehicles/evolution-d5-ranger-4-2-plus" component={EvolutionD5Ranger42Plus} />
            <Route path="/vehicles/evolution-d5-ranger-6" component={EvolutionD5Ranger6} />
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6Plus} />
            
            {/* EVOLUTION FORESTER Vehicle Pages (2 models) */}
            <Route path="/vehicles/evolution-forester-4-plus" component={EvolutionForester4Plus} />
            <Route path="/vehicles/evolution-forester-6-plus" component={EvolutionForester6Plus} />
            
            {/* EVOLUTION TURMAN Vehicle Pages (3 models) */}
            <Route path="/vehicles/evolution-turman-200-plus" component={EvolutionTurman200Plus} />
            <Route path="/vehicles/evolution-turman-800-plus" component={EvolutionTurman800Plus} />
            <Route path="/vehicles/evolution-turman-1000-plus" component={EvolutionTurman1000Plus} />
            
            {/* Legacy Routes (backward compatibility) */}
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCity} />
            <Route path="/vehicles/evolution-turfman-1000" component={EvolutionTurfman1000} />
            <Route path="/vehicles/evolution-d5-ranger-22-plus" component={EvolutionD5Ranger22Plus} />
            
            {/* Blog Routes */}
            <Route path="/blog" component={BlogIndexPage} />
            <Route path="/blog/best-neighborhood-electric-vehicles-city-commuting" component={BestNEVCityCommuting} />
            <Route path="/blog/neighborhood-electric-vehicle-manufacturers-us" component={NEVManufacturersUS} />
            <Route path="/blog/find-neighborhood-electric-vehicle-dealerships-near-me" component={FindNEVDealerships} />
            <Route path="/blog/neighborhood-electric-vehicle-price-range-cost" component={NEVPriceRange} />
            <Route path="/blog/neighborhood-electric-vehicle-tax-credits-incentives" component={NEVTaxCredits} />
            <Route path="/blog/neighborhood-electric-vehicles-vs-regular-electric-cars-comparison" component={NEVvsElectricCars} />
            <Route path="/blog/top-rated-neighborhood-electric-vehicles-cargo-delivery" component={CargoDeliveryNEVs} />
            <Route path="/blog/lease-neighborhood-electric-vehicle-options" component={LeaseNEVOptions} />
            <Route path="/blog/buy-used-neighborhood-electric-vehicles-online" component={BuyUsedNEVs} />
            <Route path="/blog/neighborhood-electric-vehicle-warranty-coverage-comparison" component={NEVWarrantyComparison} />
            
            {/* New PTV Blog Routes (20 new articles) */}
            <Route path="/blog/personal-transportation-vehicles-for-sale-nationwide" component={PTVsForSaleNationwide} />
            <Route path="/blog/buy-personal-transportation-vehicles-online" component={BuyPTVsOnline} />
            <Route path="/blog/top-personal-transportation-vehicles-2025" component={TopPTVs2025} />
            <Route path="/blog/affordable-personal-transportation-vehicles" component={AffordablePTVs} />
            <Route path="/blog/electric-personal-transportation-vehicles" component={ElectricPTVs} />
            <Route path="/blog/best-personal-transportation-vehicles-for-adults" component={PTVsForAdults} />
            <Route path="/blog/family-friendly-personal-transportation-vehicles" component={FamilyFriendlyPTVs} />
            <Route path="/blog/street-legal-personal-transportation-vehicles" component={StreetLegalPTVs} />
            <Route path="/blog/high-performance-personal-transportation-vehicles" component={HighPerformancePTVs} />
            <Route path="/blog/compact-personal-transportation-vehicles" component={CompactPTVs} />
            <Route path="/blog/luxury-personal-transportation-vehicles" component={LuxuryPTVs} />
            <Route path="/blog/personal-transportation-vehicles-buyers-guide" component={PTVBuyersGuide} />
            <Route path="/blog/customizable-personal-transportation-vehicles" component={CustomizablePTVs} />
            <Route path="/blog/personal-transportation-vehicles-financing-options" component={PTVFinancingOptions} />
            <Route path="/blog/recreational-personal-transportation-vehicles" component={RecreationalPTVs} />
            <Route path="/blog/best-value-personal-transportation-vehicles-under-5000" component={BestValuePTVs} />
            <Route path="/blog/personal-transportation-vehicles-for-seniors" component={PTVsForSeniors} />
            <Route path="/blog/daily-commuter-personal-transportation-vehicles" component={DailyCommuterPTVs} />
            <Route path="/blog/off-road-personal-transportation-vehicles" component={OffRoadPTVs} />
            <Route path="/blog/your-source-for-personal-transportation-vehicles" component={YourSourcePTVs} />
            
            {/* Dynamic Location Pages (All States and Countries) */}
            <Route path="/:slug" component={DynamicLocationPage} />
            
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
