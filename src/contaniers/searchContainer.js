import React from 'react'
import { TextInput } from './../Components'
import { SearchContainer } from './style';
export const Search = props=>{
    return(
        <div className="container">
            <div className="row">
                <TextInput shadow width="auto" height="20"/>
            </div>
        </div>
    )
} 