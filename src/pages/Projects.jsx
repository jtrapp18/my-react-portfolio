import { Card } from "semantic-ui-react";
import ProjectListing from "./ProjectListing";
import data from "../data"

const Projects = () => {
    const projects = data.projects;

    return (
        <Card.Group itemsPerRow={3}>
            {projects.map(project=>
                <ProjectListing
                    {...project}
                />)}
        </Card.Group>
    );
}

export default Projects;
