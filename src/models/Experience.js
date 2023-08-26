class Experience {
    constructor(id,company_name,company_link,job_title,startDate,endDate){
        this.id = id;
        this.company_name = company_name;
        this.company_link = company_link;
        this.job_title = job_title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.responsibilities = [];
    }

    addResponsibility(id,value){
        this.responsibilities.push({id,value});
    }
}

export default Experience;