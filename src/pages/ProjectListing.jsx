import { useParams, useOutletContext } from "react-router-dom";
import { Card } from "semantic-ui-react";

function ProjectListing({name, phase, languages, description, image, gif}) {

  const params = useParams();

  return(  
      <Card key={name}> 
        <h1>{name}</h1>
        <h2>{`Phase ${phase}`}</h2>
        <ul>{languages.map(language=><li key={language}>{language}</li>)}</ul>
        <div className="img-container">
          <img src={image} alt={image} className="static" />
          <img src={gif} alt={gif} className="animated" />
        </div>
      </Card>
  );
};

export default ProjectListing;