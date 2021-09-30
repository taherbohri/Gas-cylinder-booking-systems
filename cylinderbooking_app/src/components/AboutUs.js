import React from "react";
export default class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div className="about-section"  >
                    <h1 style={{textAlign:"center",color:"yellowgreen"}}>About Us </h1>
                    <div style={{textAlign:"center"}}>
                       
                    <div/>
                </div>
            </div>
            <br/>


                <h2 style={{textAlign:"center"}}>Our Team</h2>
                <div className="row" >
                    <div className="column"  >
                        <div className="card" style={{textAlign:"center"}}>
                            <div className="img" >
                                
                            </div>
                            <div class ="container">
                            <h2>Taher Bohari</h2>
                                                       
                            <p>taher.bohri11@gmail.com</p>
                            <p>Mob:+917385912914</p>
                        </div>
                    </div>
                </div>

                    <div className="column">
                        <div className="card" style={{textAlign:"center"}}>
                            <div className="img" >
                               
                            </div>
                            <div className ="container">
                            <h2>Ashwin Satone</h2>
                            
                            
                            <p>ashwinsatone@gmail.com</p>
                            <p>Mob:+917768844447</p>
                        </div>
                    </div>
                </div>

                    

                   
                </div>

            </div>
        );
    }
}