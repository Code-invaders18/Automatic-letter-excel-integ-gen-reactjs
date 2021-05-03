import { React, useState } from 'react';
import { Button, Dropdown, Input, Menu, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Output from './Output';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

const { TextArea } = Input;

const ExcelLetter=()=>{

    const[preview,setPreview]=useState(false);
    const [name,setName]=useState('');
    const [textbody,setTextbody]=useState('');
    const [thanks, setThanks]=useState('')
    const [date,setDate]=useState('')
    const [excelData, setExcelData]=useState('');
    const [dropSelect, setDropSelect]=useState('');
    
    const setupName=(e)=>{
        var localName=e.target.value;
        setName(localName)
    }
    
    const bodyThanks=()=>{
        setThanks('Thanks')
    }

    const openOutputWindow=()=>{
        setPreview(true)
    }
    const setupBodyName=(e)=>{
        var localBody=e.target.value;
        setTextbody(localBody);
    }
    const addDate=()=>{
        var currDate='01/05/2021'
        setDate(currDate);
    }
    const excelFileHandler=(e)=>{
        var fileObj = e.target.files[0];
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, res) => {
        if(err){
            console.log(err);            
        }
        else{
            console.log(res)
            setExcelData({
            cols: res.cols,
            rows: res.rows
            });
        }
        });               
    }
    const handleChange=(e)=>{
        var selectedValue=e.target.value;
        setDropSelect(selectedValue);
    }
    return(
        <div>
            <input type="file" onChange={(e)=>excelFileHandler(e)} />
            <div>
                 <div>
                 <h4>Dear</h4>
                 </div>
                 <TextArea row={1} value={name} onChange={(e)=>setupName(e)} />
                 <Button size="large" onClick={openOutputWindow} style={{marginLeft:"10px"}}>Refresh</Button>
            </div>
            <br/>
            <div>
                <TextArea row={4} value={textbody} onChange={(e)=>setupBodyName(e)}/>
            </div>
            <div>
            { excelData !== '' && (
                <select 
                    value={dropSelect}
                    onChange={(e)=>handleChange(e)}
                >
                    {excelData.rows.map((item)=>{
                        return(
                            <option value={item[0]}>{item[0]}</option>
                        )
                    })}
                </select>
            )}
            
            
            
              <Radio onClick={bodyThanks}> ADD Thanks</Radio>
                <br/>
                <Radio onClick={addDate}>ADD Date</Radio>
            </div>
            <br/>
            <br/>
            <br/>
            <h1>Output</h1>
            {preview && <Output name={name} textbody={textbody} thanks={thanks} date={date} dropSelect={dropSelect}/>}

        </div>
    );
}
export default ExcelLetter;


// const Letter=()=>{

//     

//     return(
//         <div>
//             
//     </div>
//     );
// }
// export default Letter;
