import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const [projects, setProjects] = useState([])

  const projectClick = (project) => {
      setSelectedProject(project)
    }

    useEffect(()=>{
        getProjects()
    }, [])

    const getProjects = async ()=>{
        try{
            const result = await axios.get('https://api.github.com/users/Kenneth-Rakentine/repos')

            const specificRepos = ['Ghost-Hunter-Game', 'Employee-Directory-REACT','Netflix-Functions-Mockup', 'Api-Call-Practice', 'PerScholas-Responsive-Site', 'PerScholasReactGP']

            const filteredProjects = result.data.filter((project) =>
        specificRepos.includes(project.name)
      )

      const updatedProjects = filteredProjects.map((project) => {
        switch (project.name) {
          case 'Ghost-Hunter-Game':
            return { ...project, image_url: 'https://i.ibb.co/51fx5WP/gh-1.jpg' };
          case 'Employee-Directory-REACT':
            return { ...project, image_url: 'https://i.ibb.co/kmPXqPs/gh2.png' };
          case 'Netflix-Functions-Mockup':
            return { ...project, image_url: 'https://i.ibb.co/SPRCp8R/gh3.png' };
          case 'Api-Call-Practice':
            return { ...project, image_url: 'https://i.ibb.co/xDnFqkr/Api-Call-Practice.png' };
          case 'PerScholas-Responsive-Site':
            return { ...project, image_url: 'https://i.ibb.co/qxYC1NM/gh5.png' };
          case 'PerScholasReactGP':
            return { ...project, image_url: 'https://i.ibb.co/hZZY5ky/gh6.png' };
          default:
            return { ...project, image_url: 'https://avatars.githubusercontent.com/u/41464290?v=4' };
        }
      })

        // const sixProjects = result.data.slice(0, 6)
        // setProjects(sixProjects)
        setProjects(updatedProjects)
    } catch (error) {
        console.error('Error Fetching Projects:', error)
    }

  

    }

  return (


    <div className='projectContainer'>
        <h1>Projects</h1>
        <div className='projects'>
        <div id="carousel">
          <h4>Select:</h4>
        {projects.map((project) => (
          <figure className='project'  key={project.id}>
            <ul onClick={() => projectClick(project)}>
            <a href={project.html_url} >
             <img className='projectImg' src={project.image_url} alt={project.name} /> 
            </a>
          </ul>
          </figure> 
        ))}
        </div>
        <div className='rightColumn'>
          {selectedProject && (
            <div>
              <h2>{selectedProject.name}</h2>
              <img className='projectImg' src={selectedProject.image_url} alt={selectedProject.name} /> 
              <p>{selectedProject.description}</p>
              <a href={selectedProject.html_url}>GitHub Link</a>
            </div>
          )}
        </div>
        </div>
        
    </div>
  )
}


export default Projects