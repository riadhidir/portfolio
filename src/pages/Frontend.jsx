import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Progress from '../components/Progress'
import Do from '../components/Do'
import do_1 from "../assets/do_1.png"
import do_2 from "../assets/do_2.png"
import do_3 from "../assets/do_3.png"
function Frontend() {
  return (
    <>
    <Navbar/>
    <Heading title="Front-end skills"/>
    <div className='bg-[#222222]   h-[55.7vh] bg-red-0 grid grid-cols-2 gap-20 py-5'>

<div className="bg-[#222222] px-10 overflow-auto ">
    <p className='text-white font-bold text-lg mb-1 sticky top-0 bg-[#222222] '>What i Do?</p>
    <div className='flex flex-col  gap-5'>

        <Do title="UI/UX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum, orci et tincidunt consectetur, massa dui scelerisque magna, sit   non consectetur. Sed ac eros ultricies, pharetra eros a, viverra velit. Sed id venenatis turpis, eget blandit lectus. Quisque non euismod dui, sit amet imperdiet nisi." img={do_1}/>
        <Do title="HTML, CSS, JavaScript" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum, orci et tincidunt consectetur, massa dui scelerisque magna, sit   non consectetur. Sed ac eros ultricies, pharetra eros a, viverra velit. Sed id venenatis turpis, eget blandit lectus. Quisque non euismod dui, sit amet imperdiet nisi." img={do_2}/>
        <Do title="Lorem" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum, orci et tincidunt consectetur, massa dui scelerisque magna, sit   non consectetur. Sed ac eros ultricies, pharetra eros a, viverra velit. Sed id venenatis turpis, eget blandit lectus. Quisque non euismod dui, sit amet imperdiet nisi." img={do_3}/>
    </div>
</div>
<div className="bg-blue-20 px-10 overflow-auto">
    <p className='text-white font-bold text-lg mb-1 sticky top-0 bg-[#222222] '>Coding Skills</p>
    <div className='flex flex-col  gap-3'>
        <Progress title="Html" percentage={100}/>
        <Progress title="Css" percentage={50}/>
        <Progress title="JavaScript" percentage={50}/>
        <Progress title="React" percentage={50}/>
        <Progress title="TailWind" percentage={50}/>
        
    </div>
</div>
    {/* <Progress title="html" percentage={80}/> */}


    </div>
    <Footer/>
    </>
  )
}

export default Frontend