const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
            <div className="flex space-x-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce delay-300"></div>
            </div>
        </div>
    );
};

export default Loading;
