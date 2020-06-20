import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { fakeAuth } from "../Auth/Auth";
import { FaHome } from "react-icons/fa";

const NavBar = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <Container>
        <Navbar>
          <NabarLi><NabarA><FaHome /> Bookmark</NabarA></NabarLi>
          <NabarLi><NabarA><Link class="nbar" to="/home" >Trang chủ</Link></NabarA></NabarLi>
          <NabarLi><NabarA><Link class="nbar" to="/addbook" >Thêm sách</Link></NabarA></NabarLi>
          <NabarLi><NabarA><Button onClick={() => {fakeAuth.signout(() => history.push("/"));}}>Đăng xuất</Button></NabarA></NabarLi>
        </Navbar>
    </Container>
  ) : (
    <Container>
        <Navbar>
          <NabarLi><NabarA><FaHome /> Bookmark</NabarA></NabarLi>
          <NabarLi><NabarA><Link class="nbar" to="/home" >Trang chủ</Link></NabarA></NabarLi>
          <NabarLi><NabarA><Link class="nbar" to="/signup" >Đăng ký</Link></NabarA></NabarLi>
          <NabarLi><NabarA><Link class="nbar" to="/signin" >Đăng nhập</Link></NabarA></NabarLi>
        </Navbar>
    </Container>
  )
);
export default NavBar;

const Container = styled.div`
  width:100%;
  background-color:#81F7D8;
  height:53px;
  margin:0 auto;
`;
const Navbar = styled.ul`
  background-color:#81F7D8;
  display:grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`;
const NabarLi = styled.li `
  padding:10px;
  list-style:none;
`;
const NabarA = styled.a `
  color:#140202;
  font-size:20px;
  text-transform:uppercase;
  text-decoration:none;
  &:hover{
    opacity:0.8;
    color:red;
  }
`;
const Button = styled.button`
  text-decoration: none;
  text-transform:uppercase;
  font-size:20px;
  margin-left: 1rem;
  padding: 5px 10px;
  &:hover {
    background: yellow;
  }
  background: none;
  border: none;
  color: green;
`;