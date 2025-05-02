import { IoSunny, IoMoon} from "react-icons/io5";
import { useTheme } from 'next-themes'

export const Header = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    
    return (
            <div className="w-[90%] md:w-[70%] lg:w-[60%] sm:w-[75%] mx-auto flex items-center justify-between pt-4 pb-2">
                <div className="text-lg font-bold">
                        <h1 className="text-4xl md:text-5xl tracking-[-0.25em] text-gray-700 dark:text-white">
                            HD
                        </h1>
                </div>
                <div className="gap-6 md:gap-11 font-roboto-condensed mr-2 md:mr-4 flex">
                    <button onClick={toggleTheme}>
                        {theme == "dark" ? ( <IoSunny className="scale-[175%] md:scale-[200%] navbar-contact-btn" />
): (                        <IoMoon className="scale-[175%] md:scale-[200%] navbar-contact-btn" />
)}
                    </button>
                </div>
            </div>
    );
};
