import React from "react";

function Nav(){
    return(
        <nav className="navmenu">
            <a className="anc" href="" >
                COFFEE
                <br />
                <img  src={'https://th.bing.com/th/id/OIP.ggWjUsBJPh7m2maHCzH6lgHaMA?w=133&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt=""  style={{height:"25vh",width:"8vw"}}/>
            </a>
            <a className="anc" href="">
                TEA
                <br />
                <img src={'https://th.bing.com/th/id/OIP.8Loe5bD5kOQgi3F87iB-1wHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt="" style={{height:"29vh",width:"12.5vw"}}/>
            </a>
            <a className="anc" href="">
                PASTERIES
                <br />
                <img src={'https://th.bing.com/th/id/OIP.Wp_cUu2PFIW3pSc-ydfcuAHaHa?w=179&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt="" style={{height:"23vh",width:"12vw"}} />
            </a>
        </nav>
    )
}

export default Nav;