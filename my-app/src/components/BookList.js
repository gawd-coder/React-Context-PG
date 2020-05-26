import React, { Component } from 'react'
import {ThemeContext} from "../contexts/ThemeContext"

export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme  = isLightTheme ? light : dark;
        return (
            <div className = "book-list" style = {{background : theme.bg, color: theme.syntax}}>
                <ul>
                    <li style = {{background : theme.ui}}>Book 01</li>
                    <li style = {{background : theme.ui}}>Book 02</li>
                    <li style = {{background : theme.ui}}>Book 03</li>
                    <li style = {{background : theme.ui}}>Book 04</li>
                </ul>
            </div>
        )
    }
}
