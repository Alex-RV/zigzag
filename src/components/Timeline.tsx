import React from 'react'
import Head from 'next/head';

export default function Timeline() {
  return (
    <>
    <div id="timeline-content">
  <h1 id='schedule' className='textAbout'>Schedule</h1>

  <ul className="timeline">
    <li className="event" data-date="Day 1">
      <h3>First</h3>
      <p>somwthing</p>
    </li>
    <li className="event" data-date="Day 1">
      <h3>Second</h3>
      <p>Test</p>    
    </li>
    <li className="event" id="date" data-date="Day 2">
      <h3>Third</h3>
      <p>Test</p>    
    </li>
    
    <li className="event" data-date="Day 2">
      <h3>Fourth</h3>
      <p>test</p>
      
    </li>
  </ul>
</div>
</>
  )
}
