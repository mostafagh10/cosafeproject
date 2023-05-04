import React, { useState , useEffect } from "react";
import adminManageHeader from '../adminDashboard2/index'
import {useDispatch} from 'react-redux'
import {GET_ADVICES , DELETE_ADVICE} from '../../redux/actions/categoryAction'
import ShowAddAdviceModel from '../addAdviceModel'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {getadvicesprocess} from '../APIs/adviceapi'

const ShowManageAdviceModel = () => {

  const dispatch = useDispatch();

  /*
  useEffect(() => {
    dispatch(GET_ADVICES())
  },[dispatch])

  const { advices } = useSelector(state => state.advices)
  */

  const [advices , setadvices] = useState(null)

      const loadadvices = async () => {
          await getadvicesprocess().then((response) => {
              setadvices(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loadadvices();
      },[])

      const filterContent = (advices , searchterm) => {
        const result = advices.filter((advice) => advice.title.includes(searchterm))
        setadvices(result)
      }
      const handletextsearch = async e => {
        const searchterm = e.currentTarget.value
        await getadvicesprocess().then((response) => {
          filterContent(response.data , searchterm)
      }).catch((err) => {
          console.log(err)
      });
    
      }

  const showTheItems = () => (
    <div>
    <div>
    <input className="form-control filteradmin" style={{float:'left'}} placeholder="Filter The Advices (by title)..." onChange={handletextsearch} />
    </div><br /><br />
    <table>
        <thead>
            <th>title</th>
            <th>body</th>
            <th>image</th>
            <th>action</th>
        </thead>
        <tbody>
        {advices && advices.map(advice => (
              <tr key={advice._id}>
              <td data-label="advice title">{advice.title}</td>
              <td data-label="advice body">{advice.body}</td>
              <td data-label="advice image">{advice.image && <img src={advice.image} width="100" height="100" />}</td>
              <td data-label="action">
                <a onClick={() => {window.location.href=`/admin/manage/editadvice/${advice._id}`}}>
                <button className="btn btn-warning text-white" ><i className="fas fa-edit"></i> make actions</button> 
                </a> 
              </td>
              </tr>
           ))}
        </tbody> 
        </table>
        </div>
  );

  return(
   <div>
     {adminManageHeader()}
     <div className="container">
       {showTheItems()}
       </div>
       <ShowAddAdviceModel />
    </div>
  )
};

export default ShowManageAdviceModel;
