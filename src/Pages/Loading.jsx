import React from 'react'
import {Spin} from 'antd'
export default function Loading() {
    return (
        <div className='text-center m-5'>
            <Spin size='large'/>
        </div>
    )
}
