import React, { useState, useEffect } from 'react';

const Healthmonitor = () => {
  const [screenTime, setScreenTime] = useState(0);
  const [healthFacts, setHealthFacts] = useState([
    "Did you know that drinking plenty of water can improve your skin's complexion?",
    "Regular exercise can boost your mood and reduce stress.",
    "A good night's sleep is essential for overall health and well-being.",
    "Eating a balanced diet with lots of fruits and vegetables can improve your immune system.",
    "Laughing can reduce stress and increase the production of feel-good hormones.",
  ]);
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    // You can implement screen time tracking logic here
    // For simplicity, I'm using a timer to simulate screen time
    const timer = setInterval(() => {
      setScreenTime((prevScreenTime) => prevScreenTime + 1);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Generate a random health fact when the component mounts
    const randomIndex = Math.floor(Math.random() * healthFacts.length);
    setRandomFact(healthFacts[randomIndex]);
  }, [healthFacts]);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-semibold">Health Monitor</h1>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Developer Profile</h2>
        <div className="mb-4">
          <strong>Name:</strong> Breeze jod
        </div>
        <div className="mb-4">
          <strong>Email:</strong> Im.breeze.wtf@example.com
        </div>
        <div className="mb-4">
          <strong>Screen Time:</strong> {screenTime} seconds
        </div>
        <div className="mb-4">
          <strong>Random Health Fact:</strong> {randomFact}
        </div>
        {/* You can add more information and features here */}
      </div>
    </div>
  );
};

export default Healthmonitor;
