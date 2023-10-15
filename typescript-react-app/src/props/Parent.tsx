import {ChildAsFC} from './Child';

const Parent = () => {
    return (
        <div>
            <ChildAsFC color={'blue'} onClick={() => console.log('Clicked')} />
        </div>
    )
}
export default Parent
