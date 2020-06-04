import * as React from "react"
import {useState} from "react"
import {FunctionComponent, useEffect} from "react"
import {ApolloError} from "apollo-client"
import classnames from "classnames"
import {useForm} from "react-hook-form"
import Typography from "@material-ui/core/Typography"
import {Paper} from "@material-ui/core"
import TextField from "@material-ui/core/TextField/TextField"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles/makeStyles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { withThemeProvider } from "../../common/theme/withThemeProvider"

export interface HFAQFormSubmitResult {
    creator?: string
    content: string
    canPublish: boolean
}

interface HFAQUIProps {
    data: any
    loading: boolean
    error?: ApolloError
    onSubmit: (values: HFAQFormSubmitResult) => Promise<void>
}

const useStyles = makeStyles(theme => ({
    loading: {
        opacity: "0.5",
        pointerEvents: "none"
    },
}));

const _HFAQUI: FunctionComponent<HFAQUIProps> = (props: HFAQUIProps) => {
    const classes = useStyles()
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, errors, reset} = useForm();
    const { onSubmit, data } = props
    useEffect(() => {
        if (data) {
            reset();
            setSuccess(true);
        }
    }, [data, reset])

    const onSubmitForm = (values: any) => {
        onSubmit({
            creator: values.creator,
            content: values.content,
            canPublish: values.canPublish,
        })
    }

    return (
        <div className={classnames(props.loading && classes.loading)}>
            <Typography variant="body1" style={{paddingBottom: 15}}>
                Ask you question
            </Typography>
            <Paper style={{padding: 15}}>
                {
                    success && <Typography variant="h6" style={{padding: 15}}>
                        Спасибо! Скоро отвечу на ваш вопрос!
                    </Typography>
                }
                {
                    !success && <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmitForm)}>
                        <TextField inputRef={register()} style={{width: "100%"}} id="question" name="content" multiline label="Your question" variant="filled" />
                        <TextField inputRef={register()} style={{width: "100%", marginTop: 15}} name={"creator"} id="creator" label="Your email" variant="filled" />
                        <div>
                            <FormControlLabel control={<Checkbox inputRef={register()} name="canPublish" />} label="Can be published in blog?" />
                        </div>
                        <Button style={{marginTop: 15}} type="submit" variant="contained">Send</Button>
                    </form>
                }
            </Paper>
        </div>
    )
}

const HFAQUI = withThemeProvider(_HFAQUI)

export {
    HFAQUI
}