import { Products } from './components/products';
import contents from './content';

export default function App() {
    return(
           <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       completes={contents.completes}
                       minutes={contents.minutes}
                       qualification={contents.qualification}
                       value={contents.value}
                      
                   />
               ))}
           </div>
    )
}