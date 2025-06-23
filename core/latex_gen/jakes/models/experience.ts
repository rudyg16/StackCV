export class Experience {
    private name: string;
    private items: ExperienceItem[];

    constructor(items: ExperienceItem[], name: string = "Experience") {
        this.items = items;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getItems(): ExperienceItem[] {
        return this.items;
    }

    setItems(items: ExperienceItem[]): void {
        this.items = items;
    }

    addItem(item: ExperienceItem): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }
}
  
export class ExperienceItem {
    private role: string;
    private location: string;
    private bullet: string[];
    private startDate: Date;
    private endDate: Date;

    constructor(
        role: string,
        location: string,
        bullet: string[],
        startDate: Date,
        endDate: Date
    ) {
        this.role = role;
        this.location = location;
        this.bullet = bullet;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    getRole(): string {
        return this.role;
    }

    setRole(role: string): void {
        this.role = role;
    }

    getLocation(): string {
        return this.location;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    getBullets(): string[] {
        return this.bullet;
    }

    setBullets(bullets: string[]): void {
        this.bullet = bullets;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    setStartDate(date: Date): void {
        this.startDate = date;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    setEndDate(date: Date): void {
        this.endDate = date;
    }
}
  