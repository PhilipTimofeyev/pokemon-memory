

export default function Score({ currentScore, bestScore }) {

    return (
        <>
            <div className='scores'>
                <h2>Current Score: {currentScore}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
        </>
    )
}