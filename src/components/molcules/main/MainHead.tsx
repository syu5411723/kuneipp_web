import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"

import FV from "../../../images/main_bg.jpg";
import Img01 from "../../../images/logo.png"
import Img02 from "../../../images/main_title.png"
import Img03 from "../../../images/main_pdtitle.png"

const Container = styled.div`
    position:relative;
    background:url(${FV}) no-repeat top center;
    background-size:cover;
    min-height:763px;
    
`
const MainImg01 = styled(motion.img)`
    margin-left:100px;
    margin-top: 20px;
`
const MainImg02 = styled(motion.img)`
    width:650px;
    display:block;
    margin:0 auto;
    margin-top:10px;
    
`
const MainImg03 = styled(motion.img)`
    margin-top: 50px;
    width:400px;
`

const img01V ={
    hidden:{opacity:0, y:-100},
    visible:{opacity:1, y:0, transition:{duration:1, } },
}
const img02V = {
    hidden:{opacity:0, x:"300px"},
    visible:{opacity:1, x:"0px", transition: {duration:1, delay:0.5}}
}
const img03V ={
    hidden:{opacity:0},
    visible:{opacity:1, transition: {duration:1, delay:1}}
}

const MainHead = () => {
    return (
        <Container>
            <MainImg01 src={Img01} 
            variants={img01V}
            initial="hidden"
            animate="visible"
            />
            <MainImg02 src={Img02} 
            variants={img02V}
            initial="hidden"
            animate="visible"
            />
            <MainImg03 src={Img03} 
            variants={img03V}
            initial="hidden"
            animate="visible"
            />
        </Container>
    )
}

export default MainHead
