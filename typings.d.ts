export interface Messag extends MessagBody {
    _id: string
    _createdAt : string
    _updatedAt : string
    _rev: string
    _type: 'message'
    blockMsg: boolean
}

export type MessagBody = {
    text: string,
    username: string,
    profileImg: string,
    image?: string
}

export type CommentBody = {
    comment: string
    messagId: string
    username: string
    profileImg: string
}

export interface Comment extends CommentBody {
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updatedAt: string
    message: {
        _ref: string
        _type: 'reference'
    }
}

