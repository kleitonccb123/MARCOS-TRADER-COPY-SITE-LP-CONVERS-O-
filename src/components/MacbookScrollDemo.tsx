import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const Badge = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} bg-accent-cyan rounded-full p-2 flex items-center justify-center`}>
      <span className="text-primary-foreground font-bold text-xs">PRICE PRO</span>
    </div>
  );
};

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <MacbookScroll
        title={
          <span className="text-text-primary">
            Veja o Copy Trader funcionando <br /> 
            <span className="text-accent-cyan">em tempo real no gráfico</span>
          </span>
        }
        badge={
          <Badge className="h-12 w-12 -rotate-12 transform" />
        }
        src="/analytics-chart.png"
        showGradient={false}
      />
    </div>
  );
}