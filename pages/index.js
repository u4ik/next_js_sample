import React from 'react'
import Header from '../components/Header'

export async function getStaticProps(){

    const res = await fetch('https://awesome-conf.vercel.app/api/speakers')
    
    const speakers = await res.json()


    return{
        props: {speakers},
        // With revalidate, next.js will regenerate the page in the background every 5 min/
        revalidate: 300 // seconds
    }
}

export default function HomePage({speakers}) {

    const [likes, setLikes] = React.useState(0)

    function handleClick(){
        setLikes(prev => prev + 1)
    }


    return (
        <div>
            <Header title='Awesome conference' />

            <ul>
                {speakers.map(speaker => <li>{speaker}</li>)}
            </ul>

            <button onClick={handleClick}>Like {likes}</button>
        </div>

    )

}





