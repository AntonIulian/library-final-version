import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Rating from "../components/ui/Rating"
import Price from "../components/ui/Price"
import { useParams } from "react-router-dom"
import Book from "../components/ui/Book"
import { Link } from "react-router-dom"


function BookInfo({books, addToCart, cart}) {
    const {id} = useParams()
    const book = books.find(book => +book.id === +id)
    function addBookToCart(book) {
        addToCart(book)

    }
    function bookDupe () {
         return cart.find(book => +book.id === +id)
    }
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__select--title--top top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <div className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </div>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating}></Rating>
                                <div className="book-selected--price">

                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice}></Price>
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
Summary
                                    </div>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rerum, assumenda nisi ipsam ratione officiis tenetur culpa, eveniet perspiciatis explicabo maxime harum dolore nihil maiores. Suscipit, error. Dolorum enim iusto nemo quaerat amet incidunt ad quibusdam odio molestias! Eum, beatae!

                                    </p>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rerum, assumenda nisi ipsam ratione officiis tenetur culpa, eveniet perspiciatis explicabo maxime harum dolore nihil maiores. Suscipit, error. Dolorum enim iusto nemo quaerat amet incidunt ad quibusdam odio molestias! Eum, beatae!

                                    </p>

                                </div>
                                {
                                bookDupe() ? <Link to={`/cart/${book.id}`}>
                                     <button className="btn">Checkout</button>
                                </Link> 
                                    
                                 :  ( <button className="btn" onClick={() =>addBookToCart(book)}>Add to cart</button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>


                        </div>
                        <div className="books">
                            {

                            }

                        {
                            books.filter(book => book.rating === 5 && +book.id !== +id).map(book => <Book book={book}></Book>).slice(0, 4)
                        }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}
export default BookInfo