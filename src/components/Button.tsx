import { ReactElement } from "react";

export interface ButtonProps {
    variant : "primary" | "secondary",
    size?: "sm" | "md" | "lg",
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    text: string
    onCLick?: () => void,
    fullWidth?: boolean,
    loading? : boolean
 }

const variantClasses = {
    "primary" : "bg-purple-600 text-white", 
    "secondary" : "bg-purple-300 text-white-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export function Button({variant , text , startIcon,fullWidth, onCLick , loading}: ButtonProps) {
return <button onClick={onCLick} className={variantClasses[variant]+ " " + defaultStyles + `${fullWidth ? " w-full flex justify-center" : ""} ${loading ? " opacity-45": ""}` }disabled={loading}
>
 <div className= "pr-2"> 
    {startIcon}
    </div>
 {text}
</button>
}