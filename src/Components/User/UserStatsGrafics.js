import React, { useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import styles from './styles.module.css';

function UserStatsGrafics({ data }) {
    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);

    React.useEffect(() => {
        console.log('acessos', data);
        const graphData = data.map((item) => {
            return {
                x: item.title,
                y: Number(item.acessos),
            };
        });

        let acessosReduce = 0

        if (data.length > 0) {

            acessosReduce = data
                .map(({ acessos }) => Number(acessos))
                .reduce((a, b) => a + b);
        }

        setTotal(acessosReduce);
        setGraph(graphData);
    }, [data]);



    return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p> Acessos: {total}</p>
            </div>

            {total > 0 && (
                <>
                    <div className={styles.graphItem}>
                        <VictoryPie
                            data={graph}
                            innerRadius={50}
                            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                            style={{
                                data: {
                                    fillOpacity: .9,
                                    stroke: '#fff',
                                    strokeWidth: 2,
                                },
                                labels: {
                                    fontSize: 14,
                                    fill: '#333'
                                }
                            }}
                        />
                    </div>

                    <div className={styles.graphItem}>
                        <VictoryChart>
                            <VictoryBar alignment="start" data={graph}></VictoryBar>
                        </VictoryChart>
                    </div>
                </>
            )}
        </section>
    );


}

export default UserStatsGrafics
