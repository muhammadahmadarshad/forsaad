import { set } from 'js-cookie'
import React, { useEffect ,useState} from 'react'
import {useAuth} from '../Context/auth'

export default function GloabalChat({isOpen,handleChatOpen}) {

    let {state,dispatch}=useAuth()
    let [input,setInput]=useState('')
    let [msgs,setMsg]=useState([])
    let {socket}=state
    if(socket){
        socket.on("getAllMessages",(msgs)=>{
    
            setMsg(msgs)
        })
    
        socket.on('output',(message)=>{
            setMsg([...msgs,message])
    
        })
    
    
    }

    useEffect(()=>{

        if(socket){
            socket.on("getAllMessages",(msgs)=>{
        
                setMsg(msgs)
            })
        
            socket.on('output',(message)=>{
                setMsg([...msgs,message])
        
            })
        
        
        }
    


    },[])


    useEffect(()=>{
        var chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight - chat.clientHeight; 




    })

    

    let onSubmit=(e)=>{
        e.preventDefault()

        let {empId,
            firstName,
            lastName,_id}=state.token

            socket.emit('input',{empId,firstName,lastName,id:_id,message:input})

            setMsg([...msgs,{user:{firstName,lastName,empId,id:_id},message:input}])
            setInput('')      
    }


    return (
    <div>
        <div className="chatModule">
            <div className="chatContainer flex-c">
          <ul id="chat" style={{display:isOpen?"":'none'}} className="chatBox flex-c">
            {msgs.map (msg => {
                let {user} = msg
                if(!user){
                return <li className='sender'>
                        <p>{msg.message}</p>
                </li>}
                else if (user.empId===state.token.empId){

                    return <li className='sender'>
                    <       p>{msg.message}</p>
                        </li>
                }

                else {

                    return <li class="reciever">
                                <p>
                                    <b style={{color: 'red'}}>{`${user.empId} ${user.firstName} ${user.lastName}`}</b><br/>
                                        {msg.message}
                                </p>
                            </li>
                }

            })}
          </ul>
    <form className="textBox" onSubmit={onSubmit} style={{display:isOpen?"":'none'}}>
              <div className="flex-r">
                <div className="textAreaCnt">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type your text here"></input>
                </div>
                <button  type="submit" className="sendBtn"><i class="fas fa-reply-all sendIcon"></i></button>
              </div>
          </form>
      </div>  
      <button onClick={handleChatOpen} className="chatBtn"><i className="fas fa-inbox chatIcon"></i></button>
    </div>
    </div>
    )
}
