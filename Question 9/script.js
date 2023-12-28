class Bank {
    constructor(bankName, branches) {
        this.bankName = bankName;
        this.branches = branches;
    }

    viewBranches() {
        console.log(`Branches of ${this.bankName}:`)
        this.branches.forEach(branch => {
            console.log(branch)
        });
    }

    addBranch(branch) {
        this.branches.push(branch);
        console.log(`Added ${branch}`)
    }

    removeBranch(branch) {
        let index = this.branches.indexOf(branch)
        try {
            this.branches.splice(index, 1);
            console.log(`Removed ${branch}`);
        } catch (error) {
            console.log(`Invalid Branch "${branch}" to remove!`);
        }
    }
}

let bank1 = new Bank("AMSB", ["New Dehli", "Punjab", "Maharashtra"]);
bank1.viewBranches();
bank1.addBranch("Tamil Nadu");
bank1.viewBranches();
bank1.removeBranch("New Dehli")
bank1.viewBranches();
