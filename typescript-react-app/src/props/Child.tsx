import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

// export const Child = ({color}: ChildProps) => {
//     return (
//         <div>
//             <h1>Hello There</h1>
//         </div>
//     )
// }

// Let typescript know that this is a react component, FC is abbreviation for functional component
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}
