import Book from "./book";
import Member from "./member";

export default class Library {

    private members : Member[];
    private books   : Book[];

    public constructor() {
        this.members = [];
        this.books   = [];
    }

    public addMember(m : Member) : void {
        if (this.members.includes(m)) {
            console.log("This person is a member already.");
            return;
        }
        this.members.push(m);
    }

    public addBook(b : Book) : void {
        if (this.books.includes(b)) {
            console.log("This book is cancelled.");
            return;
        }
        this.books.push(b);
    }

    public rentBook(b: Book, m: Member): void {
        if (!this.books.includes(b)) {
            console.log("This book is not available.");
            return;
        }
        b.rent();           // Book állapot frissítése
        m.addBook(b);       // Tag könyvlistájához hozzáadás
        this.books = this.books.filter(book => book !== b);
    }

    public cancelBook(b: Book, m: Member): void {
        if (this.books.includes(b)) {
            console.log("This book is already in the library.");
            return;
        }
        b.returnBook();     // Book állapot frissítése
        m.cancelBook(b);    // Tag könyvlistájából törlés
        this.books.push(b);
    }

}