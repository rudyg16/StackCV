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
  
export class HeaderItem {
    private content: string;
    private url_present: boolean;
    private url_link: string;

    constructor(content: string, url_present: boolean, url_link: string) {
        this.content = content;
        this.url_present = url_present;
        this.url_link = url_link;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(value: string): void {
        this.content = value;
    }

    public hasUrl(): boolean {
        return this.url_present;
    }

    public setUrlPresent(value: boolean): void {
        this.url_present = value;
    }

    public getUrlLink(): string {
        return this.url_link;
    }

    public setUrlLink(value: string): void {
        this.url_link = value;
    }
}
  