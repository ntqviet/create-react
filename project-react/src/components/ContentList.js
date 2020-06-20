import React from 'react';
import styled from 'styled-components';
import Content from './Content';


const ContentList = (props) => {
    return (
        <>
            <BoxItem>
                {props.Books.map(Book =>(
                    <Content 
                    key={Book.id}
                    Book={Book} 
                    primary={props.primary}
                    setBook={props.setBook}
                    deleteBook={props.deleteBook}
                    />
                    ))}
                
            </BoxItem>
        </>
    )
}


export default ContentList;
const BoxItem = styled.div `
    padding-top:10px;
    width:min(100%, 442px);
`;