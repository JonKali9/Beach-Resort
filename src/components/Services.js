import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:'Free cocktails',
                info: 'Drink all the cocktails you and your group can handle.'
            },
            {
                icon: <FaHiking/>,
                title:'Endless Hiking',
                info: 'We provide you with all the hiking you want, and provide multiples tracks to choose from.'
            },
            {
                icon: <FaShuttleVan/>,
                title:'Free shuttle',
                info: 'Wish to travel the city? No problem, our private shuttles can get you there in a jiffy.'
            },
            {
                icon: <FaBeer/>,
                title:'Strongest beer',
                info: 'German beer that will provide you with a days refreshment.'
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
