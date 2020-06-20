import React from "react";
import styled from "styled-components";
import { fakeAuth } from "../Auth/Auth";
import { Link, withRouter } from "react-router-dom";

const Welcome = withRouter(({ history }) =>
fakeAuth.isAuthenticated ? 
  (
    <Container>
      <Title><Link class="nbar" to="/home" >Ấn vào đây</Link> để xem sách bạn đang quản lý với app "BOOKMARK"</Title>
      <Title><Link class="nbar" to="/addbook" >Ấn vào đây</Link> để thêm sách bạn muốn quản lý với app "BOOKMARK"</Title>
    </Container>
  )
  :
  (
    <Container>
      <Title><Link class="nbar" to="/signin" >Đăng nhập</Link> để quản lý kho sách của bạn một cách thông minh ngay hôm nay!!! </Title>
    </Container>
  )
);

export default Welcome;
const Container = styled.div`
  margin: 5% auto;
  width: min(100%, 960px);
  height: auto;
  display: flex;
  flex-direction: column;
  background: #E3F6CE;
  color: #140202;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  color: #140202;
  text-align: center;
`;
