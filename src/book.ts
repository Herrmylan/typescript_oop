export default class Book {

    private title  : string;
    private author : string;
    private isbn   : string;
    private rented : boolean;

    public constructor(t: string, a: string, i: string) {
        this.title  = t;
        this.author = a;
        this.isbn   = i;
        this.rented = false;
    }

    public getTitle() : string  { 
        return this.title;  
    }

    public getAuthor() : string  { 
        return this.author; 
    }

    public getIsbn() : string  { 
        return this.isbn;   
    }

    public getRented() : boolean { 
        return this.rented; 
    }

    public setTitle(v: string) : void { 
        this.title  = v; 
    }

    public setAuthor(v: string) : void { 
        this.author = v; 
    }

    public setIsbn(v: string) : void { 
        this.isbn   = v; 
    }

    public rent() : void { 
        this.rented = true;  
    }

    public returnBook() : void { 
        this.rented = false; 
    }

}