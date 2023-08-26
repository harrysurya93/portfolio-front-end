class Project {
    constructor(id,company,name,description){
        this.id = id;
        this.company = company;
        this.name = name;
        this.description = description;
        this.techs = [];
    }

    addTech(id, name){
        this.techs.push({id:id, name:name});
    }

}

export default Project;