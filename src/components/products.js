import { BeakerIcon } from '@heroicons/react/24/solid'


// tailwing icons here

export function Products(props) {
    return(
        <div className='productList'>
         
            <div key={props.id} className='productCard'>
                <img width= "559px"
                        height="559.67px"
     src={props.image} alt='product-img' className='productImage'></img>


                <div className='productCard__content'>
                    <h1 className='productName'><b>{props.name}</b></h1>
                    <h3 className='productCompletes'>{props.completes} Completes left</h3>

                    <div className='minutes-container'>
                        <svg width={"1.6rem"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                        </svg>
                        <h3 className='productMinutes'>{props.minutes} Minutes</h3>
                    </div>

                    <div className='qualification-container'>
                        <svg  width={"1.6rem"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        <h3 className='productQualification'>{props.qualification} qualification</h3>
                    </div>

                    </div>
                </div>
                <button className='button'>{props.value}</button>
            
            </div>
      
    )
}