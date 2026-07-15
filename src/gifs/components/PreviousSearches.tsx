
interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((term, index) => (
          <li key={index} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  )
}
