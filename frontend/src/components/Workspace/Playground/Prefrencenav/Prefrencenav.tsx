import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai"

export const Prefrencenav = () =>{
    return(
        <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
			<div className='flex items-center text-black'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
					<div className='flex items-center px-1'>
						<div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
					</div>
				</button>
			</div>

			<div className='flex items-center m-2 gap-4'>
				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					
				</button>

				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineFullscreen />
					</div>
					
				</button>
			</div>
		</div>
    )
};

