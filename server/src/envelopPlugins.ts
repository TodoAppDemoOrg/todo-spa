import { useDepthLimit } from '@envelop/depth-limit'
import DataLoader from 'dataloader'
import { useDataLoader } from '@envelop/dataloader'
import {MeshContext} from "../.mesh";

const plugins = [
    useDepthLimit({
        maxDepth: 5
    }),
    useDataLoader('statsCommentLoader', (context: MeshContext) => new DataLoader(async (keys: any) => {
        const result = await context.Comments.Query.CommentAPI_get_topic_statistics<[]>({
            args: {
                topics: keys,
            },
            context,
            selectionSet: /* GraphQL */ `{ topic comment_count }`,
        })

        return keys.map((id: string) => result?.find((item: any) => item.topic === id)?.comment_count || 0)
    })),
]

export default plugins