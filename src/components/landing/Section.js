import React from 'react'

const Section = () => {
    return (

        <section className="jumbotron jumbotron-fluid white-bg">
            <p> test tradeshift ui components </p>

            <aside data-ts="Aside">
                <div data-ts="Panel">
                    <p>Aside content.</p>
                </div>
            </aside>
            
        </section>
    )
}

export default Section