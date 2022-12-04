import Rating from "./Rating"
import Price from "./Price"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

function Book({ book }) {
    const [img, setImg] = useState() 

useEffect(() =>{
    const image = new Image
    image.src = book.url
    image.onload = () => {
        setTimeout(() => {

                setImg(image)
        },300);
    }

    
})
    

    return (
        <div className="book">
            {
            img ? <>
                 <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={img.src} alt="" className="book__img" />
            </figure>
        </Link>
        <div className="book__title">
<Link to={`/books/${book.id}`} className="book__title--link">{book.title}</Link>
        </div>
   <Rating rating={book.rating}></Rating>
   <Price salePrice={book.salePrice} originalPrice={book.originalPrice}></Price>
            </> : <>
            <div className="book__img--skeleton">
                    <div className="book__title--skeleton">
                        
                    </div>
                    <div className="book__rating--skeleton"></div>
                    <div className="book__price--skeleton"></div>
            </div>
            </>}
        
            </div>

       
    )
}
export default Book