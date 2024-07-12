import TreeNode from "./TreeNode.tsx";

const Tree = ({ data, onCheck }) => {
    return (
        <ul className="tree">
            {data.map(item => (
                <TreeNode key={item.id} item={item} onCheck={onCheck} />
            ))}
        </ul>
    );
};
export default Tree;