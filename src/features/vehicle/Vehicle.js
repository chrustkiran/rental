import {Button, Col, Descriptions, Image, Row, Tag} from "antd";
import {useHistory, useParams} from "react-router";
import {data, destinations, types} from "../data/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import styles from './Vehicle.module.css';
import {CalendarFilled, CalendarOutlined, CarFilled} from '@ant-design/icons'
import {FaMapMarkedAlt} from "react-icons/fa";
import {GiPathDistance} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";

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
            <div className={styles.container}>
                <Row style={{fontSize: 16}} className={styles.break} gutter={24}>
                    <Col md={{offset: 0, span: 18}} xs={{offset: 4}} style={{textAlign: "center"}}>
                        <Descriptions layout="vertical" bordered>

                            <Descriptions.Item style={{color: "purple"}} label={(
                                <div style={{textAlign: "center", fontSize: 16}}><CalendarOutlined/>
                                    <p style={{fontSize: 10}}>Departure</p>
                                </div>)}> {selectedDate !== undefined ? new Date(selectedDate).toDateString() : 'No date selected'}</Descriptions.Item>

                            <Descriptions.Item style={{color: "purple"}} label={(
                                <div style={{textAlign: "center", fontSize: 16}}><CalendarFilled/>
                                    <p style={{fontSize: 10}}>Arrival</p>
                                </div>)}> {selectedDate !== undefined ? new Date(selectedDate).toDateString() : 'No date selected'}</Descriptions.Item>

                            <Descriptions.Item style={{color: "purple"}} label={(
                                <div style={{textAlign: "center", fontSize: 16}}><FaMapMarkedAlt size={20}/>
                                    <p style={{fontSize: 10}}>Location</p>
                                </div>)}> {data[vehicleId].destination}</Descriptions.Item>

                            <Descriptions.Item style={{color: "purple"}} label={(
                                <div style={{textAlign: "center", fontSize: 16}}><CarFilled/>
                                    <p style={{fontSize: 10}}>Type</p>
                                </div>)}> {data[vehicleId].type}</Descriptions.Item>

                            <Descriptions.Item style={{color: "purple"}} label={(
                                <div style={{textAlign: "center", fontSize: 16}}><IoIosPeople size={20}/>
                                    <p style={{fontSize: 10}}>Max Allowed</p>
                                </div>)}> {types[data[vehicleId].type] === undefined ? '-' : types[data[vehicleId].type]['max']}</Descriptions.Item>

                            <Descriptions.Item style={{color: "purple"}} label={(
                                <div style={{textAlign: "center", fontSize: 16}}><GiPathDistance size={20}/>
                                    <p style={{fontSize: 10}}>Distance</p>
                                </div>)}> {(destinations[data[vehicleId].destination] !== undefined ? destinations[data[vehicleId].destination]['distance'] : '-') + ' km'}</Descriptions.Item>

                        </Descriptions>
                        <br/>
                        <Row style={{textAlign: "center"}}>
                            <Col md={{offset: 12}} xs={{offset: 0}}>
                                <Descriptions bordered>
                                    <Descriptions.Item label={"Additional Info"}>
                                        <Tag color="success">
                                            A/C
                                        </Tag>
                                    </Descriptions.Item>

                                </Descriptions>
                            </Col>

                        </Row>
                    </Col>

                    {/*  <Divider type={"vertical"} style={{height: 400}}></Divider>*/}
                    <Col>
                        <Col style={{textAlign: "center"}} md={{offset: 2}} xs={{offset: 6}}>
                            <h2 style={{padding: 10, border: '2px solid purple', color: "purple", textAlign: "center"}}>
                                {data[vehicleId].price}
                            </h2>
                        </Col>
                        <br/>
                        <Row>
                            <Col style={{textAlign: "center", background: "purple", color: "white", borderRadius: 5}}
                                 md={{offset: 2}}
                                 xs={{offset: 4}}>
                                <h2 style={{color: "white"}}> Call or Whatsapp<br/>
                                    <Button style={{height: 50}}>
                                        <a style={{color: "purple", fontSize: 24}}
                                           href={"tel:+94756761432"}>756761432</a>,
                                        <a style={{color: "purple", fontSize: 24}}
                                           href={"tel:+94756761432"}>766384184</a>
                                    </Button>
                                </h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}