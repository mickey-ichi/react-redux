//increment
export function increment (index) {
    return {
        type: 'INCREMENT_LIKES',
        index: index
    }
}

//add comment

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId: postId,
        author: author,
        comment: comment,
    }
}

export function removeComment(postId) {
    return {
        type: 'REMOVE_COMMENT',
        postId: postId
    }
}