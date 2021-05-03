import { React, useState } from 'react';
import { Card } from 'antd';

const Output=({name,textbody,thanks,date,dropSelect})=>{
    return(
        <div>
            <Card style={{width:300}}>
                {date && (<h6>{date}</h6>)}
                <h3>Dear {name}</h3>
                <h4>{textbody}</h4>
                <h4>Your choosen option is {name}</h4>
                <div>
                <h4>{thanks},</h4>
                </div>
                <div>
                <h4>{dropSelect}</h4>
                </div>
            </Card>
        </div>
    );
}
export default Output;
