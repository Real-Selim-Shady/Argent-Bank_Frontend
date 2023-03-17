/* eslint-disable react/react-in-jsx-scope */

import { selectState1 } from "../../utils/selectors";
import { useSelector, useDispatch } from "react-redux";
//import { action1 } from "../../utils/store";
import { action1 } from "./Actions";


function Component1(){
    const state1 = useSelector(selectState1);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                Component1
            </p>
            <button onClick={() => dispatch(action1())}></button>
            <p>
                {state1}
            </p>
        </div>

    );
}

export default Component1;