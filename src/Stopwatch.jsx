import React, {useState, useEffect, useRef} from 'react';

function Stopwatch() {
    const [isRunning, setIsRnning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(() => {
        
    }, [isRunning]);


    function start(){};

    function stop(){};
    
    function formatTime(){
        return "0:0:00";
    };

    function reset(){};
    
    
    return(<div className = "stopwatch">
            <div className= 'display'>{formatTime()}</div>
        
        </div>);
}
export default Stopwatch;