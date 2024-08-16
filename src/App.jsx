import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjetcSelected from "./components/NoProjetcSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevProjects) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProjects,
        projects: [...prevProjects.projects, newProject],
      };
    });
  };

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject save={handleAddProject} />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjetcSelected onStartProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen m-auto my-8 flex gap-8 ">
      <SideBar onStartProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
