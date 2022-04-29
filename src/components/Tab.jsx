
function Tab({ label, active, onClick }) {
  return (
    <button role="tab" active={active} onClick={onClick}
    >{label}</button>
  );
}

export default Tab;