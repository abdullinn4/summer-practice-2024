import Tree from "./Tree.tsx";

const TreeNode = ({ item, onCheck }) => {
    const handleChange = (e) => {
        const checked = e.target.checked;
        onCheck(item.id, checked);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={item.checked === true}
                indeterminate={item.checked === null}
                onChange={handleChange}
                className="checkbox"
            />
            <span className={item.checked === null ? 'indeterminate' : ''}>
                {item.name}
            </span>
            {item.children.length > 0 && (
                <Tree data={item.children} onCheck={onCheck} />
            )}
        </li>
    );
};
export default TreeNode