import { useNavigate } from 'react-router-dom';
import icon from '../../assets/magnifying-glass.png';
import './SearchBar.scss';

export default function SearchBar({ setSearch }) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = '';
    navigate('/');
  }

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSearch}>
        <input type="text" name="search" id="search" placeholder="Search" autoComplete='off'/>
        <button>
          {' '}
          <img src={icon} alt="Search icon" />
        </button>
      </form>
    </div>
  );
}
