import './App.css'
import {useEffect, useState} from "react";
import Tree from "./components/Tree.tsx";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('src/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error loading data:', error));
    }, []);

    const handleCheck = (id, checked) => {
        const updateCheckedState = (items) => {
            return items.map(item => {
                if (item.id === id) {
                    item.checked = checked;
                    if (item.children.length > 0) {
                        item.children = updateCheckedStateRecursive(item.children, checked);
                    }
                } else {
                    if (item.children.length > 0) {
                        item.children = updateCheckedState(item.children);
                    }
                }
                return item;
            });
        };

        const updateCheckedStateRecursive = (items, checked) => {
            return items.map(item => {
                item.checked = checked;
                if (item.children.length > 0) {
                    item.children = updateCheckedStateRecursive(item.children, checked);
                }
                return item;
            });
        };

        setData(updateCheckedState(data));
    };

    return (
        <div className="wrapper">
            <h1>Дерево состояний</h1>
            <Tree data={data} onCheck={handleCheck} />
        </div>
    );
}
export default App;
