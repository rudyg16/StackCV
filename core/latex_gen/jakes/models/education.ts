export class Education {
    private name: string;
    private items: EducationItem[];

    constructor(items: EducationItem[], name: string = "Education") {
        this.items = items;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getItems(): EducationItem[] {
        return this.items;
    }

    setItems(items: EducationItem[]): void {
        this.items = items;
    }

    addItem(item: EducationItem): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }
}
  

export class EducationItem {
    private schoolName: string;
    private location: string;
    private gpa: string;
    private description: string;
    private dateStart: Date;
    private dateEnd: Date;

    constructor(
        schoolName: string,
        location: string,
        gpa: string,
        description: string,
        dateStart: Date,
        dateEnd: Date
    ) {
        this.schoolName = schoolName;
        this.location = location;
        this.gpa = gpa;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }

    getSchoolName(): string {
        return this.schoolName;
    }

    setSchoolName(name: string): void {
        this.schoolName = name;
    }

    getLocation(): string {
        return this.location;
    }

    setLocation(loc: string): void {
        this.location = loc;
    }

    getGPA(): string {
        return this.gpa;
    }

    setGPA(gpa: string): void {
        this.gpa = gpa;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(desc: string): void {
        this.description = desc;
    }

    getStartDate(): Date {
        return this.dateStart;
    }

    setStartDate(date: Date): void {
        this.dateStart = date;
    }

    getEndDate(): Date {
        return this.dateEnd;
    }

    setEndDate(date: Date): void {
        this.dateEnd = date;
    }
}
  