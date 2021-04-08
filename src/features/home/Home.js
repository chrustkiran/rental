import React, {useEffect} from 'react';
import styles from './Home.module.css';
import {Col, DatePicker, Image, InputNumber, List, Rate, Row, Select, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchData,
    filterData,
    homeState,
    onDateChange,
    onDaysChange,
    onDestinationChange,
    onTypeChange
} from "./homeSlice";
import {FrownOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons';
import {data, destinations, types} from "../data/store";
import {disabledDate} from "./homeLogic";
import {useHistory} from "react-router";

export function Home() {
    const {Option} = Select;
    const dispatch = useDispatch();
    const homeVals = useSelector(homeState);
    const history = useHistory();
    const listData = data;

    const customIcons = {
        1: <FrownOutlined/>,
        2: <FrownOutlined/>,
        3: <MehOutlined/>,
        4: <SmileOutlined/>,
        5: <SmileOutlined/>,
    };

    const onItemClick = (id) => {
        history.push('/vehicle/' + id, {date: homeVals.date});
        console.log(destinations, types);
    }

    useEffect(() => {
        fetchData(dispatch);
    });


    return (

        <div className={styles.container}>
            <Row>
                <Col md={{span: 16, offset: 4}} xs={{span: 24, offset: 0}}>
                    <h2> Call or Whatsapp <br/>
                        <a style={{color: "#722ed1"}} href={"tel:+94756761432"}>756761432</a>,
                        <a style={{color: "#722ed1"}} href={"tel:+94756761432"}>766384184</a>
                    </h2>

                    <br/>
                    <Row gutter={24}>
                        <Col md={{span: 6, offset: 0}} xs={{span: 12, offset: 0}}>
                            <DatePicker style={{width: 200}} placeholder="When?"
                                        onChange={(e) => dispatch(onDateChange(e === null ? null : Number(e.valueOf())))}
                                        disabledDate={disabledDate}
                            />
                        </Col>

                        <Col md={{span: 6}} xs={{span: 12, offset: 0}}>
                            <Select
                                showSearch
                                allowClear
                                style={{width: 200}}
                                placeholder="Where?"
                                optionFilterProp="children"
                                onChange={e => dispatch(onDestinationChange(e))}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >  {Object.keys(destinations).map(desti => (
                                <Option value={desti}>{desti}</Option>
                            ))}
                            </Select>
                        </Col>

                        <Col md={{span: 6, offset: 0}} xs={{span: 12, offset: 0}}>
                            <InputNumber min={1} style={{width: 200}} placeholder="How many Days?"
                                         onChange={e => {
                                             dispatch(onDaysChange(Number(e)))
                                         }}/>
                        </Col>

                        <Col md={{span: 6}} xs={{span: 12, offset: 0}}>
                            <Select
                                showSearch
                                allowClear
                                style={{width: 200}}
                                placeholder="Which type?"
                                optionFilterProp="children"
                                onChange={e => dispatch(onTypeChange(e))}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {Object.keys(types).map(type => (
                                    <Option value={type}>{type}</Option>
                                ))}
                            </Select>
                        </Col>

                    </Row>
                </Col>
            </Row>


            <br/>
            <Row>
                <Col md={{span: 12, offset: 6}} xs={{span: 24, offset: 0}}>
                    <div className={styles.break}>
                        <List
                            dataSource={filterData(listData, homeVals)}
                            pagination={{
                                pageSize: 5,
                            }}
                            renderItem={item => (
                                <List.Item className={styles.clickable} onClick={() => {
                                    onItemClick(item.id)
                                }}
                                           key={item.title}>
                                    <List.Item.Meta
                                        avatar={<Image alt="van_pic" style={{width: 100}} src={item.avatars[0]}/>}
                                        title={<h3 style={{width: '100%'}}>{item.price}</h3>}
                                        description={<Rate style={{width: '100%'}} defaultValue={item.star}
                                                           character={({index}) => customIcons[index + 1]}
                                                           disabled/>}

                                    />
                                    <div style={{textAlign: "left"}}>
                                        <Tag color={"#722ed1"}>{item.type}</Tag>
                                    </div>

                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>


        </div>


    )
}