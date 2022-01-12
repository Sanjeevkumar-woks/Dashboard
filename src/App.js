import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{Topbar} from './components/topbar/Topbar'
import{Sidebar} from './components/sidebar/Sidebar'
import {useState} from 'react'
import{Home} from './components/Home/Home'
import {UserList} from './components/users/UserList'
import {AddUsers} from './components/users/AddUsers'
import { ProductsList } from './components/Products/ProductsList.';
import{AddProducts} from './components/Products/AddProducts.'
import { EditUser } from './components/users/EditUser';



function App() {
  const [users,setUser]= useState(
    [
        {   id:100,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        },
        {   id:101,
            name:"sanjeev",
            position:"SDE",
            office:"Amazon",
            age:26,
            salary:50000
        }
    ]
);

const [products,setProducts]= useState([
{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
},{
    name:"Iphone",
    code:"IP456",
    price:25000,
    quantity:450,
}
]);
 

  return (
   
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
           <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/users">
             <UserList users={users} setUser={setUser}/> 
          </Route>
          <Route path="/add/user">
            <AddUsers users={users} setUser={setUser}/>
          </Route>
           <Route path="/users/:id">
            <EditUser users={users} setUser={setUser} />
          </Route>
          <Route path="/products">
            <ProductsList products={products} setProducts={setProducts}/>
          </Route>
           {/* <Route path="/product/:productId">
            <Product />
          </Route>*/}
          <Route path="/addproduct">
            <AddProducts products={products} setProducts={setProducts}/>
          </Route> 
            
        </Switch>
        </div>
    </Router>
   
  );
}

export default App;

