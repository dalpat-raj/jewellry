import { SearchIcon } from 'lucide-react'
import { useTypewriter } from "react-simple-typewriter";
import { memo } from 'react';

const TypewriterInput = memo(() => {
    const [text] = useTypewriter({
      words: ["Search term...", "Type your email...", "Write your message..."],
      loop: 0,
      delaySpeed: 2000,
    });

    return (
      <input
        type="text"
        placeholder={text}
        name='search'
        className='h-full bg-transparent  w-full focus:outline-0 text-[14px] pl-4 text-[var(--h-text-color)]'
      />
    );
  });

const Search = () => {

    return (
        <div className='relative h-12 max-sm:h-10 w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-[100%] bg-[#f1eee4] overflow-hidden rounded-3xl'>
            <TypewriterInput />
           
            <button className='h-full absolute right-0 px-8 max-sm:px-4 cursor-pointer'>
                <SearchIcon size={20} />
            </button>
        </div>
    )
}

export default Search