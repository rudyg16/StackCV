export class Projects {
    private name: string;
    private items: ProjectItems[];

    constructor(items: ProjectItems[], name: string = "Projects") {
        this.name = name;
        this.items = items;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getItems(): ProjectItems[] {
        return this.items;
    }

    setItems(items: ProjectItems[]): void {
        this.items = items;
    }

    addItem(item: ProjectItems): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }
}

export class ProjectItems {
    private name: string;
    private skillsUsed: string[];
    private bullets: string[];
    private dateStart: Date;
    private dateEnd: Date;

    constructor(
        name: string,
        skillsUsed: string[],
        bullets: string[],
        dateStart: Date,
        dateEnd: Date
    ) {
        this.name = name;
        this.skillsUsed = skillsUsed;
        this.bullets = bullets;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getSkillsUsed(): string[] {
        return this.skillsUsed;
    }

    setSkillsUsed(skills: string[]): void {
        this.skillsUsed = skills;
    }

    addSkill(skill: string): void {
        this.skillsUsed.push(skill);
    }

    removeSkill(skill: string): void {
        this.skillsUsed = this.skillsUsed.filter(s => s !== skill);
    }

    getBullets(): string[] {
        return this.bullets;
    }

    setBullets(bullets: string[]): void {
        this.bullets = bullets;
    }

    addBullet(bullet: string): void {
        this.bullets.push(bullet);
    }

    removeBullet(index: number): void {
        if (index >= 0 && index < this.bullets.length) {
            this.bullets.splice(index, 1);
        }
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
  