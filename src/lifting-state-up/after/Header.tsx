interface Props {
  onUploadClick: () => void;
}

function Header({ onUploadClick }: Props) {
  return (
    <div style={{ display: 'flex', alignContent: 'center' }}>
      <h1 style={{ margin: '0 20px 0 0' }}>Cloud Drive</h1>
      <button onClick={onUploadClick}>Upload</button>
    </div>
  );
}

export default Header;
