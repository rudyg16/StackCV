export class Header {
    private name: string;
    private items: HeaderItem[];

    constructor(name: string, items: HeaderItem[]) {
        this.name = name;
        this.items = items;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public getItems(): HeaderItem[] {
        return this.items;
    }
    public setItems(value: HeaderItem[]): void {
        this.items = value;
    }

    public addItem(item: HeaderItem): void {
        this.items.push(item);
    }
    public removeItem(index:number):void{
        this.items.splice(index,1);
    }
}
// core/header.ts

export enum LinkType {
    Normal = 'NORMAL',
    Email = 'EMAIL',
    Website = 'WEBSITE',
}

export class HeaderItem {
    private content: string
    private type: LinkType
    private urlLink: string | null

    constructor(content: string, type: LinkType, urlLink: string | null = null) {
        this.content = content
        this.type = type
        this.urlLink = urlLink
    }

    public getContent(): string {
        return this.content
    }
    public setContent(value: string): void {
        this.content = value
    }

    public getType(): LinkType {
        return this.type
    }
    public setType(value: LinkType): void {
        this.type = value
    }

    public getUrlLink(): string | null {
        return this.urlLink
    }
    public setUrlLink(value: string): void {
        this.urlLink = value
    }

    public hasUrl(): boolean {
        return this.type === LinkType.Email || this.type === LinkType.Website
    }
}
  