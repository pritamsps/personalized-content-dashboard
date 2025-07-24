import DarkModeToggle from '@/components/DarkModeToggle'
import PreferencesPanel from '@/components/PreferencesPanel'


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center transition-all">
      <h1 className="text-2xl mt-4 mb-8">Personalized Content Dashboard</h1>
      <DarkModeToggle />
      <div className='mt-8 w-full max-w-lg px-4'>
        <PreferencesPanel/>
      </div>
    </div>
    
  )
}
