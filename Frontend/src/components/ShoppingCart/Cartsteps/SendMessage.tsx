import LinkIcon from '../Cartsteps/Carts_Icons/LinkIcon'
import ListOrderIcon from '../Cartsteps/Carts_Icons/ListOrderIcon'
import ListIcon from '../Cartsteps/Carts_Icons/ListIcon'
import ListTree from '../Cartsteps/Carts_Icons/ListTree'
import CodeIcon from '../Cartsteps/Carts_Icons/CodeIcon'
import EmogiIcon from '../Cartsteps/Carts_Icons/EmogiIcon'
import DeleteIcon from '../Cartsteps/Carts_Icons/DeleteIcon'
import SendIcon from '../Cartsteps/Carts_Icons/SendIcon'
export default function SendMessage() {
  return (
    <div className='bg-white'>
        <hr/>
        <div className='flex p-2 gap-3 text-black'>
            <button>B</button>
            <button>I</button>
            <button>U</button>
            <button>S</button>
            <button><LinkIcon/></button>
            <button><ListOrderIcon/></button>
            <button><ListIcon/></button>
            <button><ListTree/></button>
            <button><CodeIcon/></button>
            

        </div>
        <hr/>
        <section>
            <textarea className='w-full min-h-[60px] p-2 text-black' placeholder={'This is my first message'}>

            </textarea>
        </section>
        
        <section className='flex justify-between p-2'>
            <div className='flex gap-2 items-center justify-center'>
               <button> <LinkIcon/></button>
                <button><EmogiIcon/></button>
                <button><DeleteIcon/></button>
            </div>
            
            <button className='bg-[#702486] rounded-md px-2'>
                <SendIcon/>
            </button>
        </section>
    </div>
  )
}
