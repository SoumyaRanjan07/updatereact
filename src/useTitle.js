import {useEffect} from 'react';

const useTitle = (props) => {
    useEffect(()=>
    {
        document.title=props + "hits on button"
    })
};

export default useTitle;