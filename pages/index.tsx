import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center transition-all">
      <DarkModeToggle />
      <h1 className="text-2xl mt-4">Dark Mode Working?</h1>
    </div>
    
  )
}
