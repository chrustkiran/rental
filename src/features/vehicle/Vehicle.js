import {Card, Col, Image, Row, Tag} from "antd";
import {useHistory, useParams} from "react-router";
import {data} from "../home/mockData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import styles from './Vehicle.module.css';
import {CalendarOutlined, CarOutlined, CloseCircleOutlined, FlagOutlined} from '@ant-design/icons'
import {env} from "../../conf/env";

function ImageCarousel(vehicleId) {
    return (
        <Carousel className={styles.center} infiniteLoop autoPlay verticalSwipe={"standard"}>
            {data[vehicleId].avatars.map(avatar => {
                return (<div>
                    <Image style={{border: '10px solid white', width: 400, marginTop: 50, borderRadius: 20}}
                           src={avatar}/>
                </div>)
            })}
        </Carousel>
    );
}

export function Vehicle() {
    let {vehicleId} = useParams();
    const history = useHistory();
    const selectedDate = history.location.state.date;

    return (
        <div>
            <div className={styles.contentStyle}>
                {ImageCarousel(vehicleId)}
            </div>
            <div>
                <Row style={{fontSize: 16}} className={styles.break} gutter={24}>
                    <Col span={6} offset={4}>
                        <CalendarOutlined
                            style={{color: env.color}}/> : {selectedDate !== undefined ? new Date(selectedDate).toDateString() : 'No date selected'}
                    </Col>
                    <Col span={6}>
                        <FlagOutlined
                            style={{color: env.color}}/> : {data[vehicleId].destination}
                    </Col>
                    <Col span={6}>
                        <CarOutlined
                            style={{color: env.color}}/> : {data[vehicleId].type}
                    </Col>
                </Row>
                <Row className={styles.break}>
                    <Col md={{offset: 8}} xs={{offset: 4}}>
                        <Card style={{textAlign: "center"}} title="Additional Info">
                            <Tag icon={<CloseCircleOutlined />} color="processing">
                                A/C
                            </Tag>
                            <br/>
                            <Tag icon={<CloseCircleOutlined />} color="error">
                                Smoking not allowed
                            </Tag>
                            <br/>
                            <Tag icon={<CloseCircleOutlined />} color="error">
                                No Wifi
                            </Tag>
                        </Card>
                    </Col>
                    <Col style={{textAlign: "center"}} md={{offset: 2}} xs={{offset: 4}}>
                        <h2> Call or Whatsapp<br/>
                            <a style={{color: "#722ed1"}} href={"tel:+94756761432"}>756761432</a>,
                            <a style={{color: "#722ed1"}} href={"tel:+94756761432"}>766384184</a>
                        </h2>
                    </Col>
                </Row>
            </div>
        </div>
    )
}