// Loading.jsx
import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
    );
};

export default Loading;
