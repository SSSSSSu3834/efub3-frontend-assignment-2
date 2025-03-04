import Item from "./Item";

const List = ({ list, onDelete, onEdit, onToggle }) => {
  return (
    <div className="List">
      <h2>List</h2>
      <h4>{list.length}개의 할 일이 있습니다</h4>
      <div>
        {list.map((it) => (
          <Item
            key={it.id}
            {...it}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
            item={it}
          />
        ))}
      </div>
    </div>
  );
};

List.defaultProps = {
  list: [],
};

export default List;
