import React, { useCallback, useState } from 'react';
import {Form} from 'antd'
import useInput from '../hooks/useInput'

const CommentForm = ({post}) => {
    const [commentText, setCommentText] = useInput('');
    const onChangeCommentText = useState()
    const onSubmitComment = useCallback(()=>{

    },[commentText]);

    return (
       <Form onFinish={onSubmitComment}>
           폼
       </Form>
    )
}

export default CommentForm;