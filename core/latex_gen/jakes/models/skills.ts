export class Skills {
    private name: string;
    private items: SkillItem[];

    constructor(items: SkillItem[], name: string = "Skills") {
        this.items = items;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getItems(): SkillItem[] {
        return this.items;
    }

    setItems(items: SkillItem[]): void {
        this.items = items;
    }

    addItem(item: SkillItem): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }
  }
export class SkillItem {
    private header: string;
    private skills: string[];

    constructor(header: string, skills: string[]) {
        this.header = header;
        this.skills = skills;
    }

    getHeader(): string {
        return this.header;
    }

    setHeader(header: string): void {
        this.header = header;
    }

    getSkills(): string[] {
        return this.skills;
    }

    setSkills(skills: string[]): void {
        this.skills = skills;
    }

    addSkill(skill: string): void {
        this.skills.push(skill);
    }

    removeSkill(skill: string): void {
        this.skills = this.skills.filter(s => s !== skill);
    }
}
  