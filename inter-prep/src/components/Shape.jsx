import { useMemo } from "react";
import classnames from 'classnames';
import './Shape.css'



const Shape = ({data}) => {
    const boxes = useMemo(() => data.flat(Infinity),[data]);

    const handleClick = (e) => {

        const {target}  = e;
        const index = target.getAttribute('data-index');
        const status = target.getAttribute('data-status');

        if(index === null || status === 'hidden'){
            return
        }

    }

    return(
        <div className="boxes" onClick={handleClick}>
            {
                boxes.map((box,index) => {
                    const status = box === 1 ? 'visible' : 'hidden';

                   

                    return(
                        <div 
                            key={`${box}-${index}`}
                            className={
                                classnames(
                                    'box',
                                    status
                                )
                            }
                            data-index = {index}
                            data-status={status}
                        />
                    )
                })
            }
        </div>
    )
};


export default Shape;