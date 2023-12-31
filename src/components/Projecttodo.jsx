import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Projecttodo = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [editingProject, setEditingProject] = useState(null);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [incompleteProjects, setIncompleteProjects] = useState([]);
  const [projectDescriptions, setProjectDescriptions] = useState({});
  const [projectDueDates, setProjectDueDates] = useState({});
  const [sortCriteria, setSortCriteria] = useState('name'); // Default sorting by name

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/v1/projects'); // Replace with your API endpoint
      setProjects(response.data); // Assuming the response contains an array of projects
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const createProject = async () => {
    try {
      const newProjectData = {
        // ... Construct your project data here ...
      };
      const response = await axios.post('/api/v1/projects', newProjectData); // Replace with your API endpoint
      setProjects([...projects, response.data]); // Assuming the response contains the created project
      setNewProject('');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const updateProject = async (updatedProject) => {
    try {
      const response = await axios.put(`/api/v1/projects/${updatedProject._id}`, updatedProject); // Replace with your API endpoint
      const updatedProjects = projects.map((project) =>
        project._id === updatedProject._id ? response.data : project
      );
      setProjects(updatedProjects);
      setEditingProject(null);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const deleteProject = async (projectToDelete) => {
    try {
      await axios.delete(`/api/v1/projects/${projectToDelete._id}`); // Replace with your API endpoint
      const updatedProjects = projects.filter((project) => project._id !== projectToDelete._id);
      setProjects(updatedProjects);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const addProject = () => {
    if (newProject.trim() !== '') {
      const newProjectData = {
        name: newProject,
        timer: 0, // Initialize the timer to 0
        status: 'Incomplete',
        description: projectDescriptions[newProject] || '',
        dueDate: projectDueDates[newProject] || '',
      };
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
        ? {
            ...project,
            status: project.status === 'Incomplete' ? 'Completed' : 'Incomplete',
          }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleAddProject = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    addProject();
  };

  // Timer logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment timers for incomplete projects
      const updatedProjects = projects.map((project) =>
        project.status === 'Incomplete'
          ? { ...project, timer: project.timer + 1 }
          : project
      );
      setProjects(updatedProjects);
    }, 1000); // Update timer every 1 second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [projects]);

  // Sorting the projects based on the selected sorting criteria
  useEffect(() => {
    const sortedProjects = [...projects];

    switch (sortCriteria) {
      case 'name':
        sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'status':
        sortedProjects.sort((a, b) => a.status.localeCompare(b.status));
        break;
      case 'dueDate':
        sortedProjects.sort((a, b) => {
          const dateA = new Date(a.dueDate);
          const dateB = new Date(b.dueDate);
          return dateA - dateB;
        });
        break;
      default:
        // Default sorting by name
        sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setProjects(sortedProjects);
  }, [sortCriteria, projects]);

  useEffect(() => {
    const completed = projects.filter((project) => project.status === 'Completed');
    const incomplete = projects.filter((project) => project.status === 'Incomplete');
    setCompletedProjects(completed);
    setIncompleteProjects(incomplete);
  }, [projects]);

  return (
    <>
    <Header/>
    <div className='bg-black h-[94vh] mt-0' >
      <div className="container p-4 mx-auto mt-0 text-white bg-black">
        <h1 className="mb-4 text-2xl font-semibold text-center">Project Management</h1>
        <form onSubmit={handleAddProject}>
          <div className="flex">
            <input
              type="text"
              className="w-full p-2 text-white bg-purple-800 border rounded-l"
              placeholder="Add a project..."
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
            />
            <button type="submit" className="p-2 bg-purple-500 rounded-r">
              Add
            </button>
          </div>
          <div className="mt-2">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Add description..."
              value={projectDescriptions[newProject] || ''}
              onChange={(e) =>
                setProjectDescriptions({
                  ...projectDescriptions,
                  [newProject]: e.target.value,
                })
              }
              className="w-full p-2 text-white bg-purple-800 border rounded"
            />
          </div>
          <div className="mt-2">
            <label>Due Date:</label>
            <input
              type="date"
              value={projectDueDates[newProject] || ''}
              onChange={(e) =>
                setProjectDueDates({
                  ...projectDueDates,
                  [newProject]: e.target.value,
                })
              }
              className="w-full p-2 text-white bg-purple-800 border rounded"
            />
          </div>
        </form>
        <div className="mt-4">
          <h2 className="mb-2 text-xl font-semibold">Incomplete Projects</h2>
          <div className="mb-2">
            <label>Sort By:</label>
            <select
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="p-1 ml-2 text-white bg-purple-800 rounded"
            >
              <option value="name">Name</option>
              <option value="status">Status</option>
              <option value="dueDate">Due Date</option>
            </select>
          </div>
          {incompleteProjects.map((project) => (
            <div
              key={project.name}
              className={`flex items-center justify-between p-3 m-2 bg-purple-600 rounded-lg ${
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
                    className="w-full px-2 border rounded"
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
                  <div className="w-full">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className='p-2'>Timer: {project.timer} seconds</p>
                    <p className="p-2 mb-2 border rounded">Description: {project.description}</p>
                    <p className="p-2 border rounded">Due Date: {project.dueDate}</p>
                  </div>
                  <div>
                    <button
                      className="p-1 mb-2 ml-2 text-white bg-purple-500 rounded hover:bg-purple-700"
                      onClick={() => editProject(project)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-1 ml-2 text-white bg-red-500 rounded hover:bg-red-700"
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
          <h2 className="mb-2 text-xl font-semibold">Completed Projects</h2>
          {completedProjects.map((project) => (
            <div
              key={project.name}
              className={`flex items-center justify-between p-3 m-2 bg-purple-600 rounded-lg ${
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
                    className="w-full px-2 border rounded"
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
                  <div className="w-full">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p>Timer: {project.timer} seconds</p>
                    <p className="p-2 mb-2 border rounded">Description: {project.description}</p>
                    <p className="p-2 border rounded">Due Date: {project.dueDate}</p>
                  </div>
                  <div>
                    <button
                      className="p-1 text-white bg-purple-500 rounded hover:bg-purple-700"
                      onClick={() => editProject(project)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-1 ml-2 text-white bg-red-500 rounded hover:bg-red-700"
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
        <Link
          to="/Loginpage"
          className="block mt-4 text-center text-purple-200 transition duration-300 hover:text-blue-600"
        >
          Go to Login Page
        </Link>
      </div>
    </div>
    </>
  );
};

export default Projecttodo;
