import React from 'react';
import {useSelector} from "react-redux";
import {dataSelectors} from "../state/data";
import {Pulsar, Table, Text} from "evergreen-ui";
import moment from "moment";

const List = () => {
    const alarms = useSelector(dataSelectors.alarm);
    return (
        <Table>
            <Table.Head>
                <Table.TextHeaderCell>Stato Allarmi</Table.TextHeaderCell>
                <Table.TextHeaderCell>Ora di Inizio</Table.TextHeaderCell>
                <Table.TextHeaderCell>Ora di Fine</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={240}>
                {alarms.map((elem) => {
                    const start = moment(Number(elem.startAlarm)).format("DD/MM/YYYY - HH:mm:ss");
                    const end = moment(Number(elem.endAlarm)).format("DD/MM/YYYY - HH:mm:ss");

                    return (
                        <Table.Row key={elem._id}>
                            <Table.TextCell>{elem.alarmIsOn ? <div><Text>Attivo</Text><Pulsar/></div> : <Text>Terminato</Text>}</Table.TextCell>
                            <Table.TextCell><Text>{start}</Text></Table.TextCell>
                            <Table.TextCell>{elem.endAlarm ? <Text>{end}</Text> : <Text color="#FF8040">In Corso...</Text>}</Table.TextCell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    );
};

export default List;
