import React, { useState, useEffect } from 'react';

const Healthmonitor = () => {
  const [screenTime, setScreenTime] = useState(0);
  const [tabChanges, setTabChanges] = useState(0);
  const [tabData, setTabData] = useState([]);
  const [isTabTrackingEnabled, setIsTabTrackingEnabled] = useState(false);
  const [healthFacts, setHealthFacts] = useState([
    "Did you know that drinking plenty of water can improve your skin's complexion?",
    "Regular exercise can boost your mood and reduce stress.",
    "A good night's sleep is essential for overall health and well-being.",
    "Eating a balanced diet with lots of fruits and vegetables can improve your immune system.",
    "Laughing can reduce stress and increase the production of feel-good hormones.",
  ]);
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    // Code for screen time tracking
    const timer = setInterval(() => {
      setScreenTime((prevScreenTime) => prevScreenTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Code for generating random health facts
    const randomIndex = Math.floor(Math.random() * healthFacts.length);
    setRandomFact(healthFacts[randomIndex]);
  }, [healthFacts]);

  useEffect(() => {
    if (isTabTrackingEnabled) {
      // Code for tab tracking
      const handleTabChange = () => {
        setTabChanges((prevTabChanges) => prevTabChanges + 1);

        const searchData = window.location.href;
        setTabData((prevTabData) => [
          ...prevTabData,
          {
            tabNumber: tabChanges + 1,
            focusTime: new Date().toLocaleTimeString(),
            search: searchData,
          },
        ]);
      };

      window.addEventListener('blur', handleTabChange);
      window.addEventListener('focus', handleTabChange);

      return () => {
        window.removeEventListener('blur', handleTabChange);
        window.removeEventListener('focus', handleTabChange);
      };
    }
  }, [isTabTrackingEnabled, tabChanges]);

  return (
    <div className="h-screen p-4 text-white bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-purple-500">Health Monitor</h1>
        <div className="p-6 bg-purple-800 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Developer Profile</h2>
          <div className="mb-4">
            <strong>Name:</strong> Breeze Jod
          </div>
          <div className="mb-4">
            <strong>Email:</strong> im.breeze.wtf@example.com
          </div>
          <div className="mb-4">
            <strong>Screen Time:</strong> {screenTime} seconds
          </div>
          <div className="mb-4">
            <strong>Tab Changes:</strong> {tabChanges} times
          </div>
          <div className="mb-4">
            <strong>Random Health Fact:</strong> {randomFact}
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isTabTrackingEnabled}
                onChange={() => setIsTabTrackingEnabled(!isTabTrackingEnabled)}
                className="mr-2"
              />
              Enable Tab Tracking
            </label>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Tab Data:</h3>
            <ul className="pl-6 list-disc">
              {tabData.map((tab, index) => (
                <li key={index}>
                  <span className="text-purple-500">
                    Tab {tab.tabNumber} focused at {tab.focusTime}
                  </span>. Searched for:{' '}
                  <a
                    href={tab.search}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    {tab.search}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthmonitor;
