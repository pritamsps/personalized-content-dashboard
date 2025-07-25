import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
 const TrendingPage=()=>{
    return (
            <DashboardLayout>
              <div className="flex flex-col items-center justify-center py-8">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Trending Content</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  This section will display top trending items based on categories.
                </p>
                <div className="mt-8 w-full max-w-4xl px-4 h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400">
                    Trending Content Placeholder
                </div>
              </div>
            </DashboardLayout>
          );
 };
 export default TrendingPage;