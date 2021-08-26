import { Button } from "./Button";

import '../styles/sidebar.scss';

interface Geners {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ClickButtonItemProps {
  genres: Geners[]
  handleClickButton: (genre: number) => void
  selectedGenreId: number
}

export function SideBar(props: ClickButtonItemProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map((genre: Geners) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}