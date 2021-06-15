const Card = (props) => {
    return ( 
        <div className={"card"}>
            <div className="img">
                <img src={props.data.img} />
            </div>
            <div className="text">
                <h3>{props.data.first_name+" "+props.data.last_name}</h3>
                <span className="role">{props.data.role}</span>
                <span className="email"><span className="icon"></span>{props.data.email}</span><br />
                <span className="phone"><span className="icon"></span>{props.data.phone}</span>
            </div>

            
            <style jsx>{`
                .card {
                    width:31.5%;
                    min-width:410px;
                    height:154px;
                    background: linear-gradient(90deg, #F0F3F9 16px, #FBFCFF 0%);
                    box-shadow: 0px 4px 4px #D7DCE8;
                    border-radius: 10px;
                    margin:0 0 1.5% 1.5%;
                    display:inline-block;
                }
                @media (max-width:1700px) { 
                    .card {
                        width:48%;
                    }
                }
                @media (max-width:1270px) { 
                    .card {
                        width:98%;
                    }
                }
                .img {
                    float:left;
                    width:148px;
                    height:100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    margin-right:20px;
                }
                .img img {
                    width:110px;
                    height:110px;
                    border-radius:50%;
                }
                h3 {
                    font-size:18px;
                    margin:31px 0 10px 0;
                }
                .role {
                    font-size:14px;
                    color:#FF815D;
                    font-weight: bold;
                    display:block;
                    margin-bottom:8px;   
                }
                .icon {
                    background:url(img/staff_card_icons.png);
                    background-size:15px 27px;
                    width:15px;
                    height:12px;
                    display:inline-block;
                    margin:0 7px -2px 0;
                }
                .phone .icon {
                    background-position:0px -12px;
                    height:15px;
                }
                .phone, .email {
                    line-height:22px;
                    font-weight: bold;
                    font-size: 14px;
                    color:#485573;
                }
            `}</style>
        </div>      
    );
}
 
export default Card;