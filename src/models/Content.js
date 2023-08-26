class ContentAbout {
    constructor(title){
        this.title = title;
        this.paragraphs = [];
    }

    addParagraph(id,value){
        this.paragraphs.push({id:id, value:value});
    }
}

class ContentIntroduction {
    constructor(welcomeMessage, name, role, short_desc, location_link, location_name, button_text, button_href){
        this.welcomeMessage = welcomeMessage;
        this.name = name;
        this.role = role;
        this.short_desc = short_desc;
        this.location_link = location_link;
        this.location_name = location_name;
        this.button_text = button_text;
        this.button_href = button_href;
    }
}

class ContentContact {
    constructor(startMessage, finalMessage, name, src, button_text,button_icon){
        this.startMessage = startMessage;
        this.finalMessage = finalMessage;
        this.name = name;
        this.src = src;
        this.button_text = button_text;
        this.button_icon = button_icon;
        this.paragraphs = [];
    }

    addParagraph(id,value){
        this.paragraphs.push({id,value});
    }
}

export {ContentAbout, ContentIntroduction, ContentContact }