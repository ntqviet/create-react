import React from 'react';
import "../index.css";
//import {FaPlus} from "react-icons/fa";
import styled from 'styled-components';


export const AddBook = props =>{
    let textRef = React.createRef();
    let handleAdd = () => {
        if (textRef.current.value !== null) {
            props.add(textRef.current.value);
            textRef.current.value = "";
        }
    };
    return (
        <BoxAdd>
            <label>Tên sách: </label>
            <Add type="text" 
                ref={textRef} 
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        handleAdd();
                    }
                }
            }
            />
            <label>Tác giả: </label>
            <Add type="text" />
            <label>Năm xuất bản: </label>
            <Add type="text" />
            <label>Link sách: </label>
            <Add type="text" />
            <label>Trang đang đọc: </label>
            <Add type="text" />
            <label>Ảnh bìa: </label>
            <Add type="file" /> 
            <BtnAdd onClick={handleAdd}>OK</BtnAdd>
            <BtnCancel>Cancel</BtnCancel>
        </BoxAdd>
    )
}
export default AddBook;
const BoxAdd = styled.div`
    padding:10px;
`;
const Add = styled.input`
    display:block;
    width:100%;
    padding:.375rem .75rem;
    font-size:1rem;
    line-height:1.5;
    color:#495057;
    background-color:#fff;
    background-clip:padding-box;
    border:1px solid #ced4da;
    border-radius:.25rem;
    margin: 0 0 25px 0;
`;
const BtnAdd = styled.button`
    border-radius: 3px;
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    background-color: green;
    border-color: green;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    height:36px;
    width:100px;
    margin-top:25px;

    &:hover{
        background-color:#007bff;
    }
`;
const BtnCancel = styled.button`
    border-radius: 3px;
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    background-color: red;
    border-color: red;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    height:36px;
    width:100px;
    margin-top:25px;
    margin-left:50px;

    &:hover{
        background-color:#007bff;
    }
`;