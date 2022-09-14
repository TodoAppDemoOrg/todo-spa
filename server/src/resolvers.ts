import {Resolvers, Todo} from '../.mesh'

const resolvers: Resolvers = {
    Todo: {
        commentCount: (root, _, { statsCommentLoader }) => {
            return statsCommentLoader.load(root.id)
        }
    }
}

export default resolvers