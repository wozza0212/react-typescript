import {ChildAsFC} from './Child';

const Parent = () => {
    return (
        <div>
            <ChildAsFC color={'blue'} onClick={() => console.log('Clicked')}>
                Hello World
            </ChildAsFC>
        </div>
    )
}
export default Parent
