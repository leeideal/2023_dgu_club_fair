import React, { useState } from 'react';
import styled from 'styled-components';
import { TIME_DATA_THU, TIME_DATA_FRI } from '../components/Booth/time_data';

const Box = styled.div`
width: 100vw;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 0px;
vertical-align: middle;
font-size: 14px;
overflow-y : hidden;
color: #603900;
`
const BoothNav = styled.div`
display: inline-flex;
width: 250px;
border-radius: 30px;
border: 2px solid #FFE074;
`
const BoothTapBox = styled.button`
width: 119px;
margin: 2.5px 3px;
height: 30px;
line-height: 30px;
border: none;
border-radius: 20px;
color: #603900;

&:hover {
  background-color: #FFFFFF;
}
`
const BoothTimeTableBox = styled.div`
width: 80%;
margin: 0 10%;
background-color: #transparent;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
`
const BoothDay = styled.div`
justify-content: center;
display: inline-flex;
width: 100%;
margin: 20px 0;
`
const BoothThu = styled.button`
width: 66px;
height: 66px;
line-height: 20px;
padding: 13px 3px;
background-color: #FFF8DF;
border-radius: 50%;
color: #FEB700;
border: none;

`
const BoothFri = styled.button`
width: 66px;
height: 66px;
line-height: 20px;
padding: 13px 3px;
// background-color: #FFF8DF;
border-radius: 50%;
color: #603900;
border: none;
background-color:transparent;
`
const BoothPerfoBox = styled.div`
width: 245px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const BoothPerfoDetailBox = styled.div`
width: 245px;
height: 55px;
line-height: 55px;
justify-content: center;
margin-bottom: 13px;
display: flex;
`
const BoothPerforNo = styled.div`
width: 25px;
height: 25px;
line-height: 25px;
background-color: #FFDFDF;
border-radius: 50%;
color: #FFFFFF;
margin: 15px 30px 15px 0;
`
const BoothPerfoName = styled.div`
width: 190px;
height: 55px;
border-radius: 50px;
border: 1px solid #FFDFDF;
display: inline-flex;
`
const BoothPerfoLogo = styled.div`
width: 35px;
height: 35px;
line-height: 35px;
background-color: #F3F3F3;
margin: 10px;
border-radius: 50%;
`
const BoothPerfoText = styled.div`
width: 135px;
height: 55px;
display: flex;
flex-wrap: wrap;
`
const BoothTime = styled.div`
height: 20px;
line-height: 30px;
width: 135px;
font-size: 10px;
text-align: left;
`
const BoothName = styled.div`
height: 20px; 
line-height: 15px;
width: 135px;
font-size: 12px;
text-align: left;
`

const Booth = () => {

  let [component, setComponent] = useState(false);
  let [page, setPage] = useState(false);
 
  return (
      <Box>

        <BoothTimeTableBox>
          <BoothDay>
            <BoothThu onClick={() => { if(component) {setComponent(!component);
                                                      setPage(false);} }} style={{ backgroundColor: component ? 'transparent' : '#FFF8DF', color: component ? '#603900' : '#FEB700' }}>Thu<br/>9</BoothThu>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <BoothFri onClick={() => { if(!component) {setComponent(!component);
                                                      setPage(false);} }} style={{ backgroundColor: component ? '#FFF8DF' : 'transparent', color: component ? '#FEB700' :'#603900' }}>Fri<br/>10</BoothFri>
          </BoothDay>

          <div style={{width:'100%', marginBottom: '40px'}}>
            <BoothNav>
              <BoothTapBox onClick={() => { if(page) setPage(!page) }} style={{ backgroundColor: page ? 'transparent' : '#FFE074', transform: 'translateX(0px)'}}>동아리 부스</BoothTapBox>
              <BoothTapBox onClick={() => { if(!page) setPage(!page) }} style={{ backgroundColor: page ? '#FFE074' : 'transparent' }}>공연 타임테이블</BoothTapBox>
            </BoothNav>
          </div>
          
          <BoothPerfoBox>
            <div>
              { page === true ?
              <>
              { component === false ?
              <>
               {TIME_DATA_THU.map(data => {
                return (
                  <BoothPerfoDetailBox>
                    <BoothPerforNo>{data.id}</BoothPerforNo>
                    <BoothPerfoName>
                      <BoothPerfoLogo>Logo</BoothPerfoLogo>
                      <BoothPerfoText>
                        <BoothTime>{data.time}</BoothTime>
                        <BoothName>{data.club}</BoothName>
                      </BoothPerfoText>
                    </BoothPerfoName>
                  </BoothPerfoDetailBox>

                );
              })}
              </> : <>
              {TIME_DATA_FRI.map(data => {
                return (
                  <BoothPerfoDetailBox>
                    <BoothPerforNo>{data.id}</BoothPerforNo>
                    <BoothPerfoName>
                      <BoothPerfoLogo>Logo</BoothPerfoLogo>
                      <BoothPerfoText>
                        <BoothTime>{data.time}</BoothTime>
                        <BoothName>{data.club}</BoothName>
                      </BoothPerfoText>
                    </BoothPerfoName>
                  </BoothPerfoDetailBox>

                );
              })}
              </>}
              </> : <>
              부스 들어가라
              </> }
            </div>

          </BoothPerfoBox>
        </BoothTimeTableBox>


      </Box>
  )
};

export default Booth;
