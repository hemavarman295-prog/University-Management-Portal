import React from "react";
import "./Schedule.css";
import { FaEye, FaDownload } from "react-icons/fa";

export default function Schedule() {
  return (

    <div className='staff-schedule'>
        <a href='/uploads/timetable.pdf' target='_blank' rel= "noopener noreferrer">
            <div className='stt'>
                TIME TABLE
            </div>
        </a>
        <a href='/uploads/academic_calendar.pdf' target='_blank' rel= "noopener noreferrer">
            <div className='sac'>
                ACADEMIC CALENDER
            </div>
        </a>
    </div>
  );
}

