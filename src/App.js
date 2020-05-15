import React from 'react';
import './App.css';
import n1 from './assets/1.mp3' 
import n2 from './assets/2.mp3' 
import n3 from './assets/3.mp3' 
import n4 from './assets/4.mp3' 
import n5 from './assets/5.mp3' 
import n6 from './assets/6.mp3' 
import n7 from './assets/7.mp3' 
import n8 from './assets/8.mp3' 
import n9 from './assets/9.mp3' 
import n10 from './assets/10.mp3' 
import n11 from './assets/11.mp3' 
import n12 from './assets/12.mp3' 

import n13 from './assets/13.mp3' 
import n14 from './assets/14.mp3' 
import n15 from './assets/15.mp3' 
import n16 from './assets/16.mp3' 
import n17 from './assets/17.mp3' 
import n18 from './assets/18.mp3' 
import n19 from './assets/19.mp3' 
import n20 from './assets/20.mp3' 
import n21 from './assets/21.mp3' 
import n22 from './assets/22.mp3' 
import n23 from './assets/23.mp3' 
import n24 from './assets/24.mp3' 

function App() {
    const handleClick = (opcion) => {
        let a
        switch(opcion){
            case 1:
                a = n1
                break;
            case 2:
                a = n2
                break 
            case 3:
                a = n3
                break 
            case 4:
                a = n4
                break
            case 5:
                a = n5
                break 
            case 6:
                a = n6
                break 
            case 7:
                a = n7
                break 
            case 8:
                a = n8
                break 
            case 9:
                a = n9
                break 
            case 10:
                a = n10
                break 
            case 11:
                a = n11
                break 
            case 12:
                a = n12
                break 
            case 13:
                a = n13
                break 
            case 14:
                a = n14
                break 
            case 15:
                a = n15
                break 
            case 16:
                a = n16
                break 
            case 17:
                a = n17
                break 
            case 18:
                a = n18
                break 
            case 19:
                a = n19
                break 
            case 20:
                a = n20
                break 
            case 21:
                a = n21
                break 
            case 22:
                a = n22
                break 
            case 23:
                a = n23
                break 
            case 24:
                a = n24
                break 
            
        }
        let audio = new Audio(a)
        audio.play()
        console.log(a)
    }
    return (
        <ul className="set">
           
           <li className="white e" onClick={() => handleClick(1)}></li>
            <li className="black ds" onClick={() => handleClick(2)}></li>
            <li className="white d" onClick={() => handleClick(3)}></li>
            <li className="black cs" onClick={() => handleClick(4)}></li>
            <li className="white c" onClick={() => handleClick(5)}></li>
            <li className="white b" onClick={() => handleClick(6)}></li>
            <li className="black as" onClick={() => handleClick(7)}></li>
            <li className="white a" onClick={() => handleClick(8)}></li>
            <li className="black gs" onClick={() => handleClick(9)}></li>
            <li className="white g" onClick={() => handleClick(10)}></li>
            <li className="black fs" onClick={() => handleClick(11)}></li>
            <li className="white f" onClick={() => handleClick(12)}></li>
            <li className="white e" onClick={() => handleClick(13)}></li>
            <li className="black ds" onClick={() => handleClick(14)}></li>
            <li className="white d" onClick={() => handleClick(15)}></li>
            <li className="black cs" onClick={() => handleClick(16)}></li>
            <li className="white c" onClick={() => handleClick(17)}></li>
            <li className="white b" onClick={() => handleClick(18)}></li>
            <li className="black as" onClick={() => handleClick(19)}></li>
            <li className="white a" onClick={() => handleClick(20)}></li>
            <li className="black gs" onClick={() => handleClick(21)}></li>
            <li className="white g" onClick={() => handleClick(22)}></li>
            <li className="black fs" onClick={() => handleClick(23)}></li>
            <li className="white f" onClick={() => handleClick(24)}></li>
        </ul>
    );
}

export default App;
