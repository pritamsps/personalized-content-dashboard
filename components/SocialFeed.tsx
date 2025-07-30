import React from 'react';
import { useGetSocialPostsQuery } from '@/features/api/apiSlice'; 
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null && 'status' in error;
}

function isSerializedError(error: unknown): error is SerializedError {
    return typeof error === 'object' && error != null && 'message' in error;
}

interface SocialPost {
    id: string;
    user: string;
    profilePic: string;
    text: string;
    imageUrl: string | null;
    timestamp: string;
    likes: number;
    comments: number;
}

const SocialFeed = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetSocialPostsQuery();
    if (isLoading) {
    return (
        <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        <p className="ml-4 text-gray-600 dark:text-gray-300">Loading social posts...</p>
        </div>
    );
    }

    if (isError) {
    console.error("Social Posts Error:", error);
    
    let errorMessage: string;
    if (isFetchBaseQueryError(error)) {
        errorMessage = (error.data as { message?: string })?.message || `Status ${error.status}`;
    } else if (isSerializedError(error)) {
        errorMessage = error.message || 'An unknown serialization error occurred.';
    } else {
        errorMessage = 'An unexpected error occurred.';
    }

    return (
        <div className="text-center p-8 text-red-600 dark:text-red-400">
        <p className="text-xl font-semibold mb-2">Failed to load social posts.</p>
        <p className="text-sm">Please check your mock data file or try again later. (Error: {errorMessage})</p>
        </div>
    );
    }

    if (isSuccess && data?.posts) {
    const postsToDisplay = data.posts;

    if (postsToDisplay.length === 0) {
        return (
        <div className="text-center p-8 text-gray-600 dark:text-gray-300">
            <p className="text-xl font-semibold mb-2">No social posts found.</p>
            <p className="text-sm">Check your mock data file.</p>
        </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsToDisplay.map((post: SocialPost) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-3">
                <img src={post.profilePic} alt={`${post.user}'s profile`} className="w-10 h-10 rounded-full mr-3" />
                <div>
                <p className="font-semibold text-gray-900 dark:text-white">{post.user}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(post.timestamp).toLocaleString()}</p>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{post.text}</p>
            {post.imageUrl && (
                <img src={post.imageUrl} alt="Social post content" className="w-full h-auto rounded-md mb-3" />
            )}
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>Likes: {post.likes}</span>
                <span>Comments: {post.comments}</span>
            </div>
            </div>
        ))}
        </div>
    );
    }

    return null;
};

export default SocialFeed;
