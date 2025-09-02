const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About PostCraft</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          PostCraft is a modern web application built with React, Redux Toolkit, and Express.js.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          This application demonstrates a full-stack setup with:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React with Vite for fast development</li>
          <li>Redux Toolkit for state management</li>
          <li>Tailwind CSS for styling</li>
          <li>Axios for API communication</li>
          <li>React Router for navigation</li>
          <li>Express.js backend with MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
