import Member from "./member";
import Book from "./book";
import Library from "./library";

function main() : void {
    const library = new Library();

    // Könyvek létrehozása
    const book1 = new Book("Harry Potter", "J.K. Rowling", "978-963-405-366-0");
    const book2 = new Book("A gyűrűk ura", "J.R.R. Tolkien", "978-963-405-367-0");

    // Tagok létrehozása
    const member1 = new Member("Kovács János", 1);
    const member2 = new Member("Nagy Péter", 2);

    // Könyvek és tagok hozzáadása a könyvtárhoz
    library.addBook(book1);
    library.addBook(book2);
    library.addMember(member1);
    library.addMember(member2);

    // Kölcsönzés
    library.rentBook(book1, member1); // Kovács János kikölcsönzi a Harry Pottert

    // Kovács János könyveinek listázása
    member1.allBooks();

    // Visszahozás
    library.cancelBook(book1, member1); // Kovács János visszahozza a Harry Pottert

    // Dupla kölcsönzés tesztelése (hibát kell jelezzen)
    library.rentBook(book1, member1);
    library.rentBook(book1, member2); // ← már ki van kölcsönözve!
}

main();