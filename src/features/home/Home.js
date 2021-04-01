import styles from './Home.module.css';
import { DatePicker, Space, InputNumber, Select, List, Tag, Rate} from 'antd';
import {useDispatch} from "react-redux";
import {onDateChange} from "./homeSlice";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

export function Home() {
    const { Option } = Select;
    const dispatch = useDispatch();
    const destinations = ['Colombo', 'Batticalo', 'Kandy']
    const types = ['Dolphin', 'KDH', 'Car']

    const listData = [];
    for (let i = 0; i < 5; i++) {
        listData.push({
           price: '20000 LKR', star: 5, type: types[0],
            avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota_HiAce_GL_Grandia_Tourer_van_front.jpg"
        });
    }

    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };


    /*const customIcons = {
        1: <FrownOutlined style={{color: "purple" }}/>,
        2: <FrownOutlined style={{color: 'purple' }} />,
        3: <MehOutlined style={{color: 'purple' }} />,
        4: <SmileOutlined style={{color: 'purple' }} />,
        5: <SmileOutlined style={{color: 'purple' }} />,
    };*/


    return(
        <div className={styles.container}>
            Call or Whatsapp : 0756761432

            <p className={styles.break}>
                <Space>
                    <DatePicker style={{width: 200}} placeholder="When?" onChange={(e) => dispatch(onDateChange(e.toString()))} />
                    <InputNumber min={1} style={{width: 200}} placeholder="How many Days?" />
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Where?"
                        optionFilterProp="children"
                       /* onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}*/
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {destinations.map(desti => (
                            <Option value={desti}>{desti}</Option>
                        ))}
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Which type?"
                        optionFilterProp="children"
                        /* onChange={onChange}
                         onFocus={onFocus}
                         onBlur={onBlur}
                         onSearch={onSearch}*/
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {types.map(type => (
                            <Option value={type}>{type}</Option>
                        ))}
                    </Select>
                </Space>

                <br/><br/>

                <div className={styles.break}>
                    <List
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}

                               /* extra={
                                    <img
                                        style={{float: ""}}
                                        width={100}
                                        alt="logo"
                                        src="https://png.pngtree.com/png-vector/20190621/ourlarge/pngtree-van-icon-png-image_1507389.jpg"
                                    />
                                }*/
                            >
                                <List.Item.Meta
                                    avatar={<img alt="van_pic" style={{width:100}} src={item.avatar} />}
                                    title={<h3>{item.price}</h3>}
                                    description={<Rate defaultValue={item.star} character={({ index }) => customIcons[index + 1]} disabled/>}

                                />
                                <Tag color={"#722ed1"}>{item.type}</Tag>
                            </List.Item>
                        )}
                    />
                </div>


            </p>
        </div>
    )
}