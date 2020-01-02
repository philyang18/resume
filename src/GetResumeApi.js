
export async function getProjects(type, id) {
    var response;
    if(type) {
        if(id) {
            response = await fetch(`https://py-resume-api.herokuapp.com/api/projects/${type}/${id}`);
        } else {
            response = await fetch(`https://py-resume-api.herokuapp.com/api/projects/${type}`);
        }
    } else {
        response = await fetch(`https://py-resume-api.herokuapp.com/api/projects`);
    }
    if(response.status === 200){
        const json = await response.json();
        return json;
    }
    else {
        return null;
    }
    
}
