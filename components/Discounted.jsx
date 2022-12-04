import { books } from "../data"
import Book from "./ui/Book"


function Discounted() {
    return <section id="recent">
<div className="container">
    <div className="row">
        <h2 className="section__title">

            Discounted <span className="purple">books</span>
        </h2>
        <div className="books">
                {books.filter(book => book.salePrice !== null).map((book) => <Book book={book}></Book>)}
        </div>
    </div>
</div>
    </section>
}
export default Discounted