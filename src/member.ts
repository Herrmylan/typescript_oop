import Book from "./book";

export default class Member {

    private name   : string;
    private number : number;
    private books  : Book[] //or Array<Book>;
    
    public constructor(n : string, num : number) {
        this.name   = n;
        this.number = num;
        this.books  = [];
    }


    public getName() : string {
        return this.name;
    }

    public getNumber() : number {
        return this.number;
    }

    public getBooks() : Book[] {
        return this.books;
    }

    public addBook(b : Book) : void {
        if (this.books.includes(b)) {
            console.log("Books contains this book.");
            return;
        }
        this.books.push(b);
    }

    public cancelBook(b : Book) : void {
        if (!this.books.includes(b)) {
            console.log("Book doesn't contain this book.");
            return;
        }
        this.books = this.books.filter(book => book !== b);
    }

    public allBooks() : void {
        this.books.forEach(e => console.log(e.getTitle()));
    }

}