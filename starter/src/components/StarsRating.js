import Star from "./Star"

const StarsRating = ({rating}) => {
    
    const stars = [1,2,3,4,5]

    const full = process.env.PUBLIC_URL + '/FullStar.png';
    const half = process.env.PUBLIC_URL + '/HalfStar.png';
    const empty = process.env.PUBLIC_URL + '/EmptyStar.png';

    const getStarStype = (i) => {
        if(i - rating <= 0)
            return full
        
        else if(i - rating <= 0.5)
            return half
        else
            return empty
    }


    return (
        <div className="show-book-rating ">
            {
                stars.map((star,i) => <Star key={i} starType={getStarStype(i)} />)
            }   

        </div>
    )
}

export default StarsRating