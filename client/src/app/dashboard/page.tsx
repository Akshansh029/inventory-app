import React from "react";
import CardPopularProducsts from "./CardPopularProducsts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import CardExpenseSummary from "./CardExpenseSummary";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducsts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <div className="md:row-span-3 xl:row-span-2 bg-gray-500"></div>
      <div className="md:row-span-3 xl:row-span-2 bg-gray-500"></div>
      <div className="md:row-span-3 xl:row-span-2 bg-gray-500"></div>
    </div>
  );
};

export default Dashboard;
