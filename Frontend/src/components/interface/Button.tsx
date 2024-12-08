
export default function Button(
 {TypeStyle, fnOnClick, children}
 :{TypeStyle: string, fnOnClick:() => undefined, children: React.ReactNode}) {

    let ClassName: string= 'transparent border-[#D194E2] text-[#D194E2]';
   
    if(TypeStyle == 'purple'){
        ClassName = 'bg-[#702486] border-[#702486]'
    } 
  return (
    <button 
    className={`min-w-56 p-0 border-[1px] mt-3 rounded-lg ${ClassName}`}
    onClick={fnOnClick}>
        {children}
    </button>
  )
}
