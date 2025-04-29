const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}
export default LoadingSpinner;