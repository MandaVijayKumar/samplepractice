import React from 'react';

let Book = function(){
    let bookId = 2001;
    let bookTitle = 'Software Engineering';
    let bookCost = 2000;
    let bookAuthor = 'Xyz';
    let Bookdetails = {
        id:201,
        title:'Software Engineering',
        cost:2000,
        author:'abc'

    }


    return(
        <div>
          <h2>Book Id number:{Bookdetails.id}</h2>
          <h2>{Bookdetails.title} is the Book title</h2>
          <h2>Book cost ={Bookdetails.cost}</h2>
          <h2>Author is {Bookdetails.author}</h2>
        </div>
    );
}

export default Book;