import { Comment } from "../typings"

export const fetchComments = async (messagId: string) => {
    const res = await fetch(`/api/getComments?messagId=${messagId}`)

    const comments: Comment[] = await res.json()

    return comments
}