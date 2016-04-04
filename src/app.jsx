// NOTE: Set JavaScript Preprocessor to Babel and add the 2 external scritps
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// -----------COPY CODE BELOW THIS LINE ONLY-------------\\
// ------------------------------------------------------\\

const TILE_FLOOR = 'floor';
const TILE_WALL = 'wall';

class DungeonEngine {
  constructor() {
    this.width = 75;
    this.height = 75;
    this.floors = this.createFloors();
  }

  createFloors() {
    return [];
  }
}

class DungeonEditor {
  constructor() {
    this.width = 75;
    this.height = 75;
    this.floor = this.createNewFloor();
  }

  createNewFloor() {
    let floor = [];
    for (let row = 0; row < this.height; row++) {
      floor.push([]);
      for (let col = 0; col < this.width; col++) {
        floor[row].push(TILE_WALL);
      }
    }

    return floor;
  }

  getFloor() {
    return this.floor;
  }
}

class DungeonEditorComponent extends React.Component {
  constructor() {
    super();
    this.editor = new DungeonEditor();
    this.state = {
      width: 75,
      height: 75,
      floor: this.editor.getFloor(),
    };
  }

  handlerClick(col, row) {
    let floor = this.state.floor;
    floor[row][col] = (floor[row][col] === TILE_WALL)
      ? TILE_FLOOR
      : TILE_WALL;
    this.setState({ floor });
  }

  render() {
    let floorTiles = [];
    let floorJson = {
      floor: [],
    };
    for (let currRow = 0; currRow < this.state.height; currRow++) {
      for (let currCol = 0; currCol < this.state.width; currCol++) {
        floorTiles.push(
          <DungeonEditorTile key={`${currRow}_${currCol}`}
            column={currCol} row={currRow}
            tileType={this.state.floor[currRow][currCol]}
            clickHandler={this.handlerClick.bind(this)}
          />);
        if (this.state.floor[currRow][currCol] === TILE_FLOOR) {
          floorJson.floor.push({
            column: currCol,
            row: currRow,
          });
        }
      }
    }

    return (
      <div>
        <svg className="dungeon" width={this.state.width * 35}
          height={this.state.height * 35}
        >
          {floorTiles}
        </svg>
        <div>
          {JSON.stringify(floorJson)};
        </div>
      </div>
    );
  }
}

class DungeonEditorTile extends React.Component {
  render() {
    return (
      <rect x={this.props.column * 35}
        y={this.props.row * 35}
        width={35} height={35}
        className={this.props.tileType}
        onClick={() => {
          this.props.clickHandler(this.props.column, this.props.row)
        }}
      />);
  }
}

ReactDOM.render(
  <DungeonEditorComponent/>, app);
