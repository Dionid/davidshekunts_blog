import * as React from "react"
import gql from "graphql-tag"
import {useMutation} from "@apollo/react-hooks"
import { HFAQFormSubmitResult, HFAQUI } from "../ui"
import { withApolloProvider } from "../core/api/wrap-root-element"

export const CREATE_QUESTION_MUTATION = gql`
    mutation CreateQuestion($input:QuestionByWidgetCommand!) {
        createQuestionByWidget(command:$input) {
            message
            success
        }
    }
`

interface Input {
    creator?: string
    content: string
    additional: { canPublish: boolean }
}

const _HFAQWidget = () => {
    const [createQuestion, { data, loading, error }] = useMutation<any, { input: Input }>(CREATE_QUESTION_MUTATION);

    const onSubmit = async (values: HFAQFormSubmitResult) => {
        try {
            const input: Input = {
                creator: values.creator,
                content: values.content,
                additional: {
                    canPublish: values.canPublish,
                }
            }
            await createQuestion({
                variables: {
                    input,
                }
            });
        } catch (e) {
            alert("Что-то пошло не так, сорян :(")
        }
    }

    return (
        <HFAQUI onSubmit={onSubmit} data={data} loading={loading} error={error}/>
    )
}

const HFAQWidget = withApolloProvider(_HFAQWidget)

export {
    HFAQWidget
}
