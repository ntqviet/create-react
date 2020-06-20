import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import ContentList from './ContentList';

const Books = [
    {id:1, name:"book 1", image:"none", page:"7", isComplete:true, isTrash:false},
    {id:2, name:"book 2", image:"none", page:"7", isComplete:false, isTrash:false},
    {id:3, name:"book 3", image:"none", page:"7", isComplete:true, isTrash:false},
];

class MainPage extends React.Component{
    state = {
        Books: Books
    }
    // componentDidMount(){
    //     this.setState({Books: this.props.Books})
    // }
    setBook = id => {
        var Book = this.state.Books.find(Book => Book.id === id);
        var BookList = this.state.Books.filter(Book => Book.id !== id);
        var newBook = {
            id:Book.id,
            name:Book.name,
            image:Book.image,
            page:Book.page,
            isComplete:!Book.isComplete,
            isTrash:Book.isTrash
        }
        this.setState({Books: [...BookList, newBook]})
    }
    
    deleteBook = id => {
        var Book = this.state.Books.find((Book) => Book.id === id);
        var BookList = this.state.Books.filter(Book => Book.id !== id);
        var newBook = {
            id:Book.id,
            name:Book.name,
            image:Book.image,
            page:Book.page,
            isComplete:Book.isComplete,
            isTrash:!Book.isTrash
        }
        this.setState({Books: [...BookList, newBook]}) 
    };
    render(){
        const BooksNotInTrash = this.state.Books.filter(Book => !Book.isTrash);
        const BooksList = BooksNotInTrash.filter((Book) => !Book.isComplete);
        const BooksListComplete = BooksNotInTrash.filter((Book) => Book.isComplete);
        return (
            <>
                <TitleName>
                    <div> 
                    <Banner primary text = "Sách đang đọc"/>
                    <ContentList 
                        primary 
                        Books={BooksList} 
                        setBook={this.setBook}
                        deleteBook={this.deleteBook} />
                </div>
                <div>
                    <Banner  text = "Sách đã đọc"/> 
                    <ContentList 
                        Books={BooksListComplete}
                        setBook = {this.setBook}
                        deleteBook={this.deleteBook}
                        />
                </div>
                </TitleName>
            </>
        )
    }
}
export default MainPage;
const TitleName = styled.div `
    display:grid;
    grid-template-columns:5fr 5fr;
    grid-column-gap:15px;
    margin: 5%;
`;

