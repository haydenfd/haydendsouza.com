import { Header } from './Header';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen dark:bg-bg-dark bg-gray-200">
            <Header />
            <div className="flex-grow w-[90%] sm:w-[75%] lg:w-[60%] md:w-[60%] mx-auto pb-2">
                {children}
            </div>

        </div>
    );
}
