import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from './streams/streamCreate'
import StreamDelete from './streams/streamDelete'
import StreamEdit from './streams/streamEdit'
import StreamList from './streams/streamList'
import StreamShow from './streams/streamShow'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
         <Route path="/" exact component={StreamList}/>
         <Route path="/streams/new" exact component={StreamCreate}/>
         <Route path="/streams/edit" exact component={StreamEdit}/>
         <Route path="/streams/delete" exact component={StreamDelete}/>
         <Route path="/streams/show" exact component={StreamShow}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
