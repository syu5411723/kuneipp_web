import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer"

import Img from "../../../images/punc3.png"
import titleImg from "../../../images/c01_title.png"
import ButtonImg from "../../../images/c01_btn.png"

const HeadImg = styled.img`
    position:absolute;
    top:-50px;
    left:0;
    width:100%;
    height:50px;
`
const Sec01Container = styled.div`
    margin:0 auto;
    background-color:#FCF2CE;
    text-align:center;
    position:relative;
    padding-top:70px;
`
const Sec01Title = styled(motion.img)<Props>`
    width:45vw;
    margin-bottom: 30px;
    transition:all 1.5s;
    transform:${(props) => props.inView ? "translateX(0px)" :"translateX(-200px)"};
    opacity:${(props) => props.inView ? "1" : "0"};
`
const Sec01Cnt = styled(motion.p)`
    font-size: 18px;
    line-height:40px;
`
const Sec01Info = styled.p`
    margin-top: 10px;
    font-size: 14px;
    line-height:30px;
`
const Sec01Button = styled(motion.button)`
    color:#fff;
    background-color: #034C4A;
    border: 2px solid #034C4A;
    display:block;
    width:80%;
    padding:3%;
    margin:0 auto;
    margin-top: 50px;
    border-radius:10px;
    transition: all 0.7s;
    font-size:16px;
    cursor: pointer;
    &:hover{
        color:${({primary})=> primary ? "#FE690B" : "#034C4A"};
        background-color: #FCF2CE;
    }
`
const Sec01ButtonImg = styled.img`
    width:43%;
    margin-top: 50px;
`
// interface Props {
//     inView:boolean,
// }
type Props = {
    inview:boolean
}

const MaiinSec01 = () => {
    const [ref, inView] = useInView({
        // threshold:0,
        rootMargin: "0px"
    });
    return (
        <>
            
            <Sec01Container>
                <HeadImg src={Img} />
                <Sec01Title src={titleImg} ref={ref} inView={inView}  />
                <Sec01Cnt>こだわりの天然岩塩にユズとジンジャーの 天然植物成分を配合したバスソルト。<br/>
                            かでほろ苦いユズに、 ピリッとスパイシーなジンジャーをブレンドした香りで、<br/>
                            全身にぬくもり巡る発汗バスタイムを。
                </Sec01Cnt>
                <Sec01Info>850g：2,400円（税抜） 50g：150円（税抜）</Sec01Info>
                <Sec01Button >ご購入はこちら</Sec01Button>
                <Sec01ButtonImg src={ButtonImg} />
            </Sec01Container>
        </>
    )
}

export default MaiinSec01
