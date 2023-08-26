class Education {
    constructor(id, src,href,major,degree,alt,gpa,startYear, endYear){
        this.id = id;
        this.src = src;
        this.href = href;
        this.major = major;
        this.degree = degree;
        this.alt = alt;
        this.gpa = gpa;
        this.startYear = startYear;
        this.endYear = endYear;
        this.publications = [];
    }

    addPublication(id, href){
        this.publications.push({id:id, href:href});
    }
}

export default Education;