import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projecttodo = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [editingProject, setEditingProject] = useState(null);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [incompleteProjects, setIncompleteProjects] = useState([]);

  const addProject = () => {
    if (newProject.trim() !== '') {
      const newProjectData = { name: newProject, timer: 0, status: 'Incomplete' };
      setProjects([...projects, newProjectData]);
      setNewProject('');
    }
  };

  const removeProject = (e, projectToRemove) => {
    e.stopPropagation();
    const updatedProjects = projects.filter((project) => project.name !== projectToRemove.name);
    setProjects(updatedProjects);
  };

  const editProject = (projectToEdit) => {
    setEditingProject(projectToEdit);
  };

  const updateProjectName = (updatedName) => {
    const updatedProjects = projects.map((project) =>
      project === editingProject ? { ...project, name: updatedName } : project
    );
    setProjects(updatedProjects);
    setEditingProject(null);
  };

  const toggleProjectStatus = (projectToToggle) => {
    const updatedProjects = projects.map((project) =>
      project === projectToToggle
        ? { ...project, status: project.status === 'Incomplete' ? 'Completed' : 'Incomplete' }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleAddProject = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    addProject();
  };

  useEffect(() => {
    const projectTimers = {};

    projects.forEach((project) => {
      projectTimers[project.name] = setInterval(() => {
        setProjects((prevProjects) =>
          prevProjects.map((prevProject) =>
            prevProject.name === project.name
              ? { ...prevProject, timer: prevProject.timer + 1 }
              : prevProject
          )
        );
      }, 1000);
    });

    return () => {
      // Clear all timers when the component unmounts
      Object.values(projectTimers).forEach((timer) => clearInterval(timer));
    };
  }, [projects]);

  useEffect(() => {
    const completed = projects.filter((project) => project.status === 'Completed');
    const incomplete = projects.filter((project) => project.status === 'Incomplete');
    setCompletedProjects(completed);
    setIncompleteProjects(incomplete);
  }, [projects]);

  return (
    <div className="container p-4 mx-auto mt-8">
      <h1 className="mb-4 text-2xl font-semibold">Project Management</h1>
      <form onSubmit={handleAddProject}>
        <div className="flex">
          <input
            type="text"
            className="w-full p-2 border rounded-l"
            placeholder="Add a project..."
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
          <button type="submit" className="p-2 text-white bg-blue-500 rounded-r">
            Add
          </button>
        </div>
      </form>
      <div className="mt-4">
        <h2>Incomplete Projects</h2>
        {incompleteProjects.map((project) => (
          <div
            key={project.name}
            className={`flex items-center justify-between p-2 m-2 bg-gray-200 rounded-md ${
              editingProject === project ? 'bg-yellow-100' : ''
            }`}
            onClick={() => toggleProjectStatus(project)}
          >
            {editingProject === project ? (
              <>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => updateProjectName(e.target.value)}
                  onBlur={() => setEditingProject(null)}
                  className="px-2 border rounded"
                />
                <button
                  onClick={() => setEditingProject(null)}
                  className="p-1 bg-gray-400 rounded hover:bg-gray-500"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p>Timer: {project.timer} seconds</p>
                </div>
                <div>
                  <button
                    className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => editProject(project)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-1 ml-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={(e) => removeProject(e, project)}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2>Completed Projects</h2>
        {completedProjects.map((project) => (
          <div
            key={project.name}
            className={`flex items-center justify-between p-2 m-2 bg-green-200 rounded-md ${
              editingProject === project ? 'bg-yellow-100' : ''
            }`}
            onClick={() => toggleProjectStatus(project)}
          >
            {editingProject === project ? (
              <>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => updateProjectName(e.target.value)}
                  onBlur={() => setEditingProject(null)}
                  className="px-2 border rounded"
                />
                <button
                  onClick={() => setEditingProject(null)}
                  className="p-1 bg-gray-400 rounded hover:bg-gray-500"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p>Timer: {project.timer} seconds</p>
                </div>
                <div>
                  <button
                    className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => editProject(project)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-1 ml-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={(e) => removeProject(e, project)}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Link to="/Loginpage" className="block mt-4 text-blue-500">
        Go to Login Page
      </Link>
    </div>
  );
};

export default Projecttodo;
