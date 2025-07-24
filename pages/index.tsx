import DarkModeToggle from '@/components/DarkModeToggle'
import PreferencesPanel from '@/components/PreferencesPanel'
import DashboardLayout from '@/components/Layout/DashboardLayout';

export default function Home() {
  return (
   <DashboardLayout> {/* <--- NEW LAYOUT USAGE */}
      <div className="flex flex-col items-center justify-center py-8"> {/* Adjusted styling for content within layout */}
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard!</h1>
        <div className="mt-8 w-full max-w-lg px-4">
          <PreferencesPanel />
        </div>
        {/* Placeholder for your content feeds */}
        <div className="mt-8 w-full max-w-2xl px-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Your Personalized Feed</h2>
            {/* Content cards will go here */}
            <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400">
                Content Feed Placeholder
            </div>
        </div>
      </div>
    </DashboardLayout>
    
  );
}
