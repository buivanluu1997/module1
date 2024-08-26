class Student {
    constructor(id, name, email, phone, group) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.group = group;
    }
    displayInfo() {
        return `Name student: ${this.name} - Email: ${this.email} - Phone: ${this.phone}`;
    }
    setName(newName) {
        this.name = newName;
    }
}