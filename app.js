        //const handling = React.createElement("h1",{id : "heading"},"Hello World From React !");
        //console.log(handling);
        //<div id = parent

        const parent = React.createElement("div",
            {id : "parent"},[React.createElement("div",
                {id : "child"},[React.createElement("h1"
                    ,{},"H1 tag is here"),React.createElement("h2",{},"H2 tag is here")]),
                    React.createElement("div",
                        {id : "child2"},[React.createElement("h1"
                            ,{},"H1 tag is here"),React.createElement("h2",{},"H2 tag is here")])]);
        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        console.log(root);
        root.render(parent);