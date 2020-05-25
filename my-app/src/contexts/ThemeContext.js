import React, { Component, createContext } from 'react';
//creating context
export const ThemeContext = createContext();
//making a component with state that has data that we want to share between components
class ThemeContextProvider extends Component {
  //this is the shared data that we want to provide to different components
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  render() { 
    return (
    //whenever we create a context we have to also create a provider that is a tag which surrounds whichever components we want to be able to use that context 
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;