class Skill {
    constructor(id, type, color){
        this.id = id;
        this.type = type;
        this.color = color;
        this.details = [];
    }

    addDetail(id, name){
        this.details.push({id:id, name:name});
    }
}

export default Skill;