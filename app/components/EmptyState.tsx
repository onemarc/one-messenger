const EmptyState = () => {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-9 h-full
        flex justify-center items-center bg-gray-100"
        >
            <div className="text-center items-center flex flex-col">
                <h3 className="mt-2 text-1xl font-semibold text-gray-800">
                    Select a chat to start chatting or create a new chat
                </h3>
            </div>
        </div>
    );
}

export default EmptyState;