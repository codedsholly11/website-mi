import react, {createContext, useState} from "react";

export const ThemeContext = createContext()

export function ThemeContextprovider({children}){
    const [themecolor, setThemeColor] = useState(()=>{
        const color = localStorage.getItem("color")
        return color ? color : "white"
        
        
    });
     const tcolors = localStorage.getItem("tcolor")
     const [textcolor, setTextColor] = useState(()=>{
        return tcolors ? tcolors : "black"
     });
       
     function changeBackground(color, tcolors) {
        if(themecolor == "white"){
            localStorage.setItem("color", color)
            localStorage.setItem("tcolor", tcolors)
            setThemeColor(color)
            setTextColor(tcolors)
    
        }else{
            localStorage.setItem("color", "white")
            localStorage.setItem("tcolor", "black")
            setThemeColor("white")
            setTextColor("black")
        }
     }
    
      return (
        <ThemeContext.Provider value={{changeBackground, themecolor, setThemeColor, setTextColor, textcolor}}>
            {children}
        </ThemeContext.Provider>
      )
















}