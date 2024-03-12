import './ModalWind.css';
export default function ModalWind({call, onDestroy,  onDeleteUser}){
   if(!call){
    return null; 
   }

   const closeWnd = (event) =>{
      if(event.target.className === 'modal'){
         onDestroy();
      }
   }
    return (
    
         <div onClick={closeWnd} className='modal'>
            <div className='modal-content'>
               <i onClick={onDestroy} className='close'>X</i>
               <h1>Видалити запис</h1>
               <div className='btns'>
                    <button className='accept' onClick={onDeleteUser}> так</button> 
                    <button onClick={onDestroy} className='reject'> Ні</button> 
               </div>
            </div>
         </div>
       
    )
}

