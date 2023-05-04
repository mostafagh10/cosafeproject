import React, { useState , useEffect } from "react";
import adminManageHeader from '../adminDashboard2/index'
import {useDispatch} from 'react-redux'
import {GET_ALLNEWS , DELETE_NEWS} from '../../redux/actions/newsAction'
import ShowAddNewsModel from "../addNewsModel";
import { getnewsprocess } from '../APIs/newsapi'

import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const ShowManageNewsModel = () => {
  const dispatch = useDispatch();

  /*
  useEffect(() => {
    dispatch(GET_ALLNEWS())
  },[dispatch])

  const { news } = useSelector(state => state.news)
  */

  const [news , setnews] = useState(null)

      const loadnews = async () => {
          await getnewsprocess().then((response) => {
              setnews(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loadnews();
      },[])

      const filterContent = (news , searchterm) => {
        const result = news.filter((singlenew) => singlenew.title.includes(searchterm))
        setnews(result)
      }
      const handletextsearch = async e => {
        const searchterm = e.currentTarget.value
        await getnewsprocess().then((response) => {
          filterContent(response.data , searchterm)
      }).catch((err) => {
          console.log(err)
      });
    
      }

  const showTheItems = () => (
    <div>
    <div>
    <input className="form-control filteradmin" style={{float:'left'}} placeholder="Filter The News (by title)..." onChange={handletextsearch} />
    </div><br /><br />
    <table>
        <thead>
            <th>title</th>
            <th>body</th>
            <th>image</th>
            <th>Date</th>
            <th>action</th>
        </thead>
        <tbody>
        {news && news.map(news => (
              <tr className="trnews" key={news._id}>
              <td data-label="news title">{news.title}</td>
              <td data-label="news body">{news.body}</td>
              <td data-label="news image">{news.image && <img src={news.image} width="100" height="100" />}</td>
              <td data-label="news Date">{news.date}</td>
              <td data-label="action">
                <a onClick={() => {window.location.href=`/admin/manage/editnews/${news._id}`}}>
                <button className="btn btn-info text-white" ><i className="fas fa-edit"></i> make actions</button> 
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
       <ShowAddNewsModel />
    </div>
  )
};

export default ShowManageNewsModel;
