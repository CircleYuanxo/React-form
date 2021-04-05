
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Wrapper = styled.div`
  max-width: 645px;
  background: white;
  margin: 10% auto;
  box-shadow: 1.8px 2.4px 5px 0 rgb(0 0 0 / 30%);
  border-top: solid 8px #fad312;
  padding: 64px 32px;
`

const Form = styled.form``

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
`

const Info = styled.div`
  font-size: 14px;
  line-height: 1.5em;
  &:nth-child(2) {
    margin-top: 32px;
  }
`

const Notice = styled.div`
  color: #e74149;
  font-size: 16px;
  margin-top: 20px;
`

const InputBlock = styled.div`
  margin-top: 55px;
`

const InputTitle = styled.div`
  font-size: 20px;
  &::after {
    content: ' *';
    color: #e74149;
  }
  &.notrequired:after {
    content: '';
  }
`

const Input = styled.input`
  margin-top: 20px;
  border: solid 1px #d0d0d0;
  font-size: 16px;
  padding: 8px;
`

const InputError = styled.div`
  margin-top: 4px;
  color: #e74149;
  position: absolute;
`

const InputLabel = styled.label`
  display: block;
`

const InputDesc = styled.div`
  font-size: 14px;
  margin-top: 8px;
`

const Submit = styled.input`
  background: #fad312;
  color: black;
  font-size: 15px;
  padding: 12px 32px;
  margin-top: 48px;
  border: none;
  border-radius: 4px;
`

const Description = styled.p`
  margin-top: 32px;
  font-size: 14px;
  line-height: 1.5em;
`
const SentNotice = styled.h1`
  color: red;
  font-size: 3em;
`


function App() {
  const [ nickname, setNickname] = useState('')
  const [ email, setEmail] = useState('')
  const [ type, setType] = useState('')
  const [ from, setFrom] = useState('')
  const [ isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    setIsSubmit(true)
    let types = {
      "1": "躺在床上用想像力實作",
      "2": "趴在地上滑手機找現成的"
    }
    if (![nickname, email, type, from].some((e)=> e === '')){
      alert(`您的回答是:\n暱稱: ${nickname}\nE-mail: ${email}\n報名類型: ${types[type]}\n怎麼知道這個活動的？: ${from}`)
      alert('表單已成功送出..._〆(°▽°*)')
    }else {
      e.preventDefault()
    }
  }

  return (
    <React.Fragment>
    <GlobalStyle />
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>新拖延運動報名表單</Title>
        <Info>活動日期：2020/12/10 ~ 2020/12/11</Info>
        <Info>活動地點：台北市大安區新生南路二段1號</Info>
        <Notice>* 必填</Notice>
        <InputBlock>
          <InputTitle>暱稱</InputTitle>
          <Input value={nickname} onChange={((e)=>{setNickname(e.target.value)})}/>
          {isSubmit && !nickname && <InputError>請輸入暱稱</InputError>}
        </InputBlock>
        <InputBlock>
          <InputTitle>電子郵件</InputTitle>
          <Input value={email} onChange={((e)=>{setEmail(e.target.value)})}/>
          {isSubmit && !email && <InputError>請輸入電子郵件</InputError>}
        </InputBlock>
        <InputBlock>
          <InputTitle>報名類型</InputTitle>
          <InputLabel><Input name="type" type="radio" value="1" onClick={((e)=>{setType(e.target.value)})}/>躺在床上用想像力實作</InputLabel>
          <InputLabel><Input name="type" type="radio" value="2" onClick={((e)=>{setType(e.target.value)})}/>趴在地上滑手機找現成的</InputLabel>
          {isSubmit && !type && <InputError>請輸入報名類型</InputError>}
        </InputBlock>
        <InputBlock>
          <InputTitle>怎麼知道這個活動的？</InputTitle>
          <Input value={from} onChange={((e)=>{setFrom(e.target.value)})}/>
          {isSubmit && !from && <InputError>請輸入資料</InputError>}
        </InputBlock>
        <InputBlock>
          <InputTitle className="notrequired">其他</InputTitle>
          <InputDesc>對活動的一些建議</InputDesc>
          <Input />
        </InputBlock>
        <Submit type="submit" />
        <Description>請勿透過表單送出您的密碼。</Description>
      </Form>
    </Wrapper>
    </React.Fragment>
  )
}

export default App;
