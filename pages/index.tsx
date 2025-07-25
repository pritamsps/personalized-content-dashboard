import DarkModeToggle from '@/components/DarkModeToggle'
import PreferencesPanel from '@/components/PreferencesPanel'
import DashboardLayout from '@/components/Layout/DashboardLayout';
import NewsFeed from '@/components/NewsFeed';

export default function Home() {
  return (
   <DashboardLayout>
      <div className="flex flex-col items-center justify-center py-8"> 
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard!</h1>
        <div className="mt-8 w-full max-w-lg px-4">
          <PreferencesPanel />
        </div>
            <div className="mt-8 w-full max-w-4xl px-4"> 
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Your Personalized Feed</h2>
                <NewsFeed />
            </div>
        </div>
    </DashboardLayout>
    
  );
}
