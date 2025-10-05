"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import forexChartImage from "@/assets/forex-chart-pricepro.png";

export const ChartDemo = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-2 md:mb-4 px-4">
              Veja o <span className="text-gradient">Copy Trader</span> funcionando<br />
              <span className="text-3xl md:text-4xl lg:text-[6rem] font-bold mt-1 leading-none text-gradient">
                em tempo real
              </span><br />
              <span className="text-xl md:text-2xl lg:text-3xl font-normal text-text-muted">
                no gráfico
              </span>
            </h1>
          </>
        }
      >
        <img
          src={forexChartImage}
          alt="Copy Trader PricePro em ação no gráfico mostrando operações sendo copiadas"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};