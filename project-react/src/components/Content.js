import React from 'react';
import styled from 'styled-components';
import {FaCheck, FaUndo, FaTrash} from 'react-icons/fa';


class Content extends React.Component {
    checkBook = () => {
        this.props.setBook(this.props.Book.id);
    }
    deleteBook = () => {
        this.props.deleteBook(this.props.Book.id);
    }
    render() {
        
    const ListBooks = this.props.Book;        
       
        return (
           <>
            <Item>
                <ContentImage>{ListBooks.image}</ContentImage>
                <ContentName>Tên sách: {ListBooks.name}</ContentName>
                <ContentName>Trang đang đọc: {ListBooks.page}</ContentName>
                <Check onClick={this.checkBook}>
                        {this.props.primary ? <FaCheck /> : <FaUndo />}
                </Check>
                <Check warning onClick={this.deleteBook}>
                    <FaTrash />
                </Check>
            </Item>
            
            
        </>
        )
    }
}
export default Content;
const Item = styled.div `
    width:min(100%, 442px);
    height:min(100%, 100px);
    background-color:#ddd;
    padding:5px;
    line-height:7rem;
    margin-bottom:5px;
    display:grid;
    grid-template-columns: 2fr 3fr 3fr 1fr 1fr;
`;
const ContentImage = styled.div`
`;
const ContentName = styled.label ` 
    color:#000;
`;
const Check = styled.button`
    padding: 0 10px;
   font-size:25px;

   color: ${props => props.warning ? "red" : "#2EFE2E"}
`;