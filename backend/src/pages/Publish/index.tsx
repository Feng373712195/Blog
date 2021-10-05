import React, { useEffect, useState } from 'react'
import { Table,Button,Popover } from 'antd'
import dayjs from 'dayjs'

import CommonPopover from '@/components/CommonPopover'
import { fetchArticles } from './api'

const columns = [
  {
    title:'标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '阅读数',
    dataIndex: 'clicks',
    key: 'clicks',
  },
  {
    title:'创建时间',
    dataIndex: 'createtime',
    key: 'createtime',
    render(createtime){
      return dayjs(createtime).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  {
    title: '更新时间',
    dataIndex: 'lasttime',
    key: 'lasttime',
    render(lasttime){
      return dayjs(lasttime).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  {
    title: '标签',
    dataIndex: 'lables',
    key: 'lables',
  },
  {
    title: '操作',
    dataIndex: 'ctr',
    render(){
      return <>
        <Button style={{ padding:0 }} type="link" >编辑</Button>
        <CommonPopover onSure={()=>{}} title="确定删除这篇文章吗？">
          <Button danger type="text" >删除</Button>
        </CommonPopover>
      </>
    }
  }
];


export default function Publish() {

  const [data,setData] = useState([])
  const [page,setPage] = useState(1)

  useEffect(()=>{
    fetchArticles().then(res=>{
      setData(res.data.data.articles)
    })
  },[])

  return <Table rowKey={row=>row._id} bordered dataSource={data} columns={columns} >
    Publish
  </Table>
}
