import {useState, useEffect} from 'react';
import {RESTRO_MENU_URL} from '../Components/constants'

const useRestaurent=(resId)=>{
    const [restro, setRestro] = useState(null);
  useEffect(() => {
    //getReataurentInfo();
  }, []);

  async function getReataurentInfo() {
    const data = await fetch(
        RESTRO_MENU_URL+resId
    );
    const json = await data.json();
    setRestro(json.data);
    console.log(json.data);
  }

  return restro;
}

export default useRestaurent;