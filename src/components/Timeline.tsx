import React from 'react'
import Head from 'next/head';

export default function Timeline() {
  return (
    <>
    <div id="timeline-content">
  <h1 id='schedule' className='textAbout'>Schedule</h1>

  <ul className="timeline">
    <li className="event" data-date="Day 1 - 8:00am">
      <h3 className='sm:text-3xl text-base'>Teams finish checking in.</h3>
      {/* <p>somwthing</p> */}
    </li>
    <li className="event" data-date="Day 1 - 8:15am">
      <h3 className='sm:text-3xl text-base'>Theme is announced!</h3>
      {/* <p>Test</p>     */}
    </li>
    <li className="event" id="date" data-date="Day 1 - 4:00pm">
      <h3 className='sm:text-3xl text-base'>Progress Check #1</h3>
      {/* <p>Test</p>     */}
    </li>
    
    <li className="event" data-date="Day 1 - 9:00pm">
      <h3 className='sm:text-3xl text-base'>Progress Check #2</h3>
      {/* <p>test</p> */}
    </li>

    <li className="event" data-date="">
      <h3 className='sm:text-3xl text-base'>Be sure to get some rest here!</h3>
    </li>

    <li className="event" data-date="Day 2 - 11:00 - 11:45am">
      <h3 className='sm:text-3xl text-base'>In person check-in.</h3>
    </li>
    
    <li className="event" data-date="Day 2 - 11:45pm">
      <h3 className='sm:text-3xl text-base'>Progress Check #3</h3>
    </li>

    <li className="event" data-date="Day 2 - 12:30pm">
      <h3 className='sm:text-3xl text-base'>Lunch time!</h3>
    </li>

    <li className="event" data-date="Day 2 - 1:00 - 1:30pm">
      <h3 className='sm:text-3xl text-base'>Cup Stacking</h3>
    </li>

    <li className="event" data-date="Day 2 - 4:00 - 4:30pm">
      <h3 className='sm:text-3xl text-base'>Judges Discuss / GimKit Time!</h3>
    </li>

    <li className="event" data-date="Day 2 - 4:30 - 4:45pm">
      <h3 className='sm:text-3xl text-base'>Awards Ceremony</h3>
    </li>
  </ul>
</div>
</>
  )
}
