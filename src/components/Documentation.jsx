import React from 'react';

const Documentation = () => {
  return (
    <div className="p-8 text-white bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold">Website Enhancement Documentation</h1>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
          <p className="text-lg">
            Welcome to the documentation of the exciting new features we are adding to our website. These enhancements are designed to improve user experience, engagement, and functionality. We are implementing these features using ReactJS and Tailwind CSS for a dynamic and visually appealing user interface.These are the points we wish to add in the website but due to short time we had to quit early.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Features</h2>
          <ul className="ml-6 text-lg list-disc">
            <li className="mb-4">
              <strong className='text-slate-400'>1. AI Live Chat and Support</strong>
              <p>
                We are introducing AI-powered live chat support to provide real-time assistance to our users. This feature will enable users to interact with our AI chatbot for quick responses to their queries.
              </p>
            </li>
            <li className="mb-4">
              <strong className='text-slate-400'>2. Live Chat with Team Members</strong>
              <p>
                In addition to AI chat, we are incorporating live chat with our team members. Users can now have direct conversations with our support team for personalized assistance.
              </p>
            </li>
            <li className="mb-4">
              <strong className='text-slate-400'>3. Health Monitor</strong>
              <p>
                We are working on implementing a health monitor feature. While this feature is currently incomplete, we are making efforts to complete it before the scheduled release date. The health monitor will help users track and manage their well-being.
              </p>
            </li>
            <li className="mb-4">
              <strong className='text-slate-400'>4. Tab Management</strong>
              <p>
                Our website will now offer enhanced tab management capabilities. Users can organize their open tabs, making it easier to navigate through the site efficiently.
              </p>
            </li>
            <li className="mb-4">
              <strong className='text-slate-400'>5. Tab Tracking</strong>
              <p>
                To improve the user experience, we are introducing tab tracking. This feature will keep a record of how many times a tab was closed and switched, helping users keep track of their browsing history.
              </p>
            </li>
            <li className="mb-4">
              <strong className='text-slate-400'>6. More Exciting Features</strong>
              <p>
                Stay tuned for additional features and improvements that will enhance your experience on our website. We are continuously working to provide the best possible user experience.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Conclusion</h2>
          <p className="text-lg">
            These website enhancements are part of our commitment to providing an exceptional user experience. We hope you find these additions valuable and enjoyable. Thank you for your continued support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
