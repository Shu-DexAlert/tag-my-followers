import { useRef } from "react";

export default function Step1(props) {
    const inputEl = useRef(null);

    const onConnect = () => {
        props.setHandle(inputEl.current.value);
        inputEl.current.value = '';
    }

    return (
        <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What's your twitter handle?</h5>

            <div className="flex items-center justify-center">
                <input ref={inputEl} onKeyDown={e => e.key === 'Enter' && onConnect()} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Type handle without @" />
                <button type="button" className="ml-3 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onConnect}>Connect</button>
            </div>

            {
                props.handle ? <p className="mt-3 texg-lg font-semibold text-gray-900 dark:text-white">Your handle is @{props.handle}</p> : ''
            }
        </a>
    );
}