import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { Plusicon } from "./Icons/Plusicon"
import { Shareicon } from "./Icons/Shareicon"
import { CreatContentModel } from "./components/CreateContentModel"
import { useState } from "react"
import { Sidebar } from "./components/Sidebar"



function App() {
    const[modalopen , setModalOpen] = useState(false);
 return <div>
    <Sidebar/>
    <div className="p-6 ml-72 min-h-screen bg-gray-100 border-0 shadow-sm">
    <CreatContentModel open={modalopen} onClose={() => {
        setModalOpen(false);
    }} />
    <div className="flex justify-end gap-4">
<Button onCLick={()=>{setModalOpen(true)}} variant="primary" text="Add Content" startIcon={<Plusicon />}></Button>
<Button variant="secondary" text="Share" startIcon={<Shareicon />}></Button>
</div>

<div className="flex gap-4">
<Card type="twitter" link="https://x.com/shujanshaikh/status/1824866931985490148"  title="Tweet"/>
<Card type="youtube" link="https://www.youtube.com/watch/936xby90qbk"  title="Youtube Video"/>
</div>
</div>
 
 </div> 
 
 
}

export default App
