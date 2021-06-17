import React from 'react';
import {Link} from 'react-router-dom';
const Layout=(props)=>{
        const StyleSheet={
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }
    return(
        <div style={StyleSheet}>
            <nav>
                <Link to="/" style={{backgroundColor: 'AFEEEE',fontSize: 20 ,marginLeft:"20px"}}>介紹</Link>
                <Link to="/sec" style={{backgroundColor: 'B0E0E6',fontSize: 20,marginLeft:"20px"}}>作者</Link>
                <Link to="/thr" style={{backgroundColor: 'AFEEEE',fontSize: 20,marginLeft:"20px"}}>人物</Link>
                <Link to="/for" style={{backgroundColor: 'B0E0E6',fontSize: 20,marginLeft:"20px"}}>劇場版</Link>
                <Link to="/fif" style={{backgroundColor: 'AFEEEE',fontSize: 20,marginLeft:"20px"}}>漫畫與動畫比較</Link>
                <Link to="/six" style={{backgroundColor: 'AFEEEE',fontSize: 20,marginLeft:"20px"}}>回饋意見</Link>
            </nav> 
            {props.children}
        </div>
    );
}
export default Layout;