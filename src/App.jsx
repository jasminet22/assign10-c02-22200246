import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Panel from './component/Panel'

function App() {
  
  return(
    <div className='h-screen w-screen bg-indigo-100 flex justify-center items-center p-2'>
      <div>
        <h1 className  ="text-3xl font-bold text-center mb-4">react calculator</h1>
        <Panel />
      </div>
    </div>
  )
}

export default App
