
import { ProposalHeader } from "@/components/ProposalHeader";
import { ObjectiveSection } from "@/components/ObjectiveSection";
import { MethodologySection } from "@/components/MethodologySection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { PaymentSection } from "@/components/PaymentSection";
import { ROISection } from "@/components/ROISection";
import { StepsSection } from "@/components/StepsSection";
import { ContinuitySection } from "@/components/ContinuitySection";
import { FAQSection } from "@/components/FAQSection";
import { ProposalFooter } from "@/components/ProposalFooter";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7FB' }}>
      <ProposalHeader />
      <main className="container mx-auto px-4 py-12 space-y-12 max-w-6xl">
        <ObjectiveSection />
        <MethodologySection />
        <InvestmentSection />
        <PaymentSection />
        <ROISection />
        <StepsSection />
        <ContinuitySection />
        <FAQSection />
      </main>
      <ProposalFooter />
    </div>
  );
};

export default Index;
