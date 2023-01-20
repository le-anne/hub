import React from 'react';
import { useState } from 'react';
import './welcome.css';


// TODO: fix Timing Input jsx
function TimingInput() {
  const [timing, setTiming] = useState(0);

  const handleChange = (event) => {
    setTiming(event.target.value);
    document.documentElement.style.setProperty('--timing', event.target.value + "s");
  }

  return (
    <div>
    <main>
        <div className="welcome-circle"></div>
    </main>
    <section>
        <p>✨ take a deep breath in as the circle expands. </p> 
        <p>✨  exhale as it becomes smaller. ✨ </p> 

        <a href="www.google.com">enter mental health hub</a>
     

        {/* <label for="number">adjust timing: </label>
        <input
      type="number"
      value={timing}
      onChange={handleChange}
    /> */}
    </section>

    </div>
  );
}

export default TimingInput;