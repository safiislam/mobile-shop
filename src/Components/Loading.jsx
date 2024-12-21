/* eslint-disable react/prop-types */

const Loading = ({ message = "Loading..." }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">{message}</p>
            </div>
        </div>
    );
};

export default Loading;
