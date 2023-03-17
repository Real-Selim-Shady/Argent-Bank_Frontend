/* eslint-disable react/react-in-jsx-scope */

import { selectState2 } from "../../utils/selectors";
import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "../../utils/store";
import { action2 } from "./Actions";


function Component2(){
    const state2 = useSelector(selectState2);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                Component2
            </p>
            <button onClick={() => dispatch(action2())}></button>
            <p>
                {state2}
            </p>
        </div>

    );
}

export default Component2;