class University {
    constructor(universityName, departments) {
        this.universityName = universityName;
        this.departments = departments;
    }

    addDepartment(department) {
        this.departments.push(department);
        console.log(`${department} department added to ${this.universityName}`);
    }

    removeDepartment(department) {
        let index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`Removed ${department} department from ${this.universityName}`);
        }
        else {
            throw new Error(`Invalid Department ${department}. ${department} not in ${this.universityName}`)
        }
    }
}

let university1 = new University("Example University", ["Computer Science", "Physics"]);
university1.addDepartment("Mathematics");
university1.removeDepartment("Physics");
university1.removeDepartment("Harry");