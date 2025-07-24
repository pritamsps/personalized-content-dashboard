import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleCategories } from "@/features/preferences/preferencesSlice";
import { categories as allCategories } from "@/constants/categories";

const PreferencesPanel=()=>{
    const dispatch=useAppDispatch();
    const selectedCategories=useAppSelector(state=>state.preferences.categories);
    const handleCategoryToggle=(category:string)=>{
        dispatch(toggleCategories(category));
    };
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Content Preferences
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryToggle(category)}
            className={`
              p-3 rounded-lg text-sm font-medium transition-all duration-200
              ${selectedCategories.includes(category)
                ? 'bg-blue-600 text-white shadow-md' // Selected state
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600' // Unselected state
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
        Selected: {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'None'}
      </p>
    </div>
    );
};

export default PreferencesPanel;