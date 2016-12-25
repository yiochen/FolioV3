class SectionService {
    constructor () {
        this.selected = '';
        this.sections = [];
        window.sectionService = this;
        console.log("created");
    }
    register (sectionName) {
        if (this.sections.indexOf(sectionName) == -1) {
            this.sections.push(sectionName);
        }
    }

    getSection () {
        return this.selected;
    }

    setSection(sectionName) {
        this.selected = sectionName;
    }
}

export default new SectionService();