import React from 'react';
import './Clock.css';

class Clock extends React.Component {

    render() {

        let rotations = [0, 0, 0]; // [seconds, minutes, hours]
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;

        if (seconds === 0) {
            rotations[0]++;
        }

        if (minutes === 0 && seconds === 0) {
            rotations[1]++;
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
            rotations[2]++;
        }

        const minutesDeg = (minutes / 60 * 360) + (rotations[1] * 360);
        const hoursDeg = (hours / 12 * 360) + (minutes / 60 * 30) + (rotations[2] * 360);

        const minuteHandStyle = {
            transform: `rotate(${minutesDeg}deg)`
        };
        const hourHandStyle = {
            transform: `rotate(${hoursDeg}deg)`
        };

        let marks = [];
        for(let index =1; index <= 12; index++) {
            marks.push (
                <line key={`mark-${index}`} className={`mark mark-${index}`} x1="50" y1="5" x2="50" y2="10" style={{transform: `rotate(${index*30}deg)`}}></line>
            );
        }

        return (
            <svg className="clock" id='clock' viewBox="0 0 100 100">
                <g className="marks">
                    {marks}
                </g>
                <line className="hand hand-hour" x1="50" y1="25" x2="50" y2="50" style={hourHandStyle}></line>
                <line className="hand hand-minute" x1="50" y1="10" x2="50" y2="50" style={minuteHandStyle}></line>
                <circle cx="50" cy="50" r="3"></circle>
            </svg>
        );
    }
}

export default Clock;