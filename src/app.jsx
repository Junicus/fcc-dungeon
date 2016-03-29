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
    var floor = [];
    for(var row = 0; row < this.height; row++ ) {
      floor.push([]);
      for(var col = 0; col < this.width; col++ ) {
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
      floor: this.editor.getFloor()
    }
  }

  handlerClick(col, row) {
    var floor = this.state.floor;
    floor[row][col] = (floor[row][col] === TILE_WALL) ? TILE_FLOOR : TILE_WALL;
    this.setState({
      floor: floor
    });
  }

  render() {
      var floor_tiles = [];
      var floor_json = {
        floor: []
      };
      for(var currRow = 0; currRow < this.state.height; currRow++) {
        for(var currCol = 0; currCol < this.state.width; currCol++) {
          floor_tiles.push(
            <DungeonEditorTile key={`${currRow}_${currCol}`}
              column={currCol} row={currRow}
              tileType={this.state.floor[currRow][currCol]}
              clickHandler={this.handlerClick.bind(this)} />
          );
          floor_json.floor.push({
            column: currCol,
            row: currRow,
            tileType: this.state.floor[currRow][currCol]
          });
        }
      }

        return (
          <div>
            <svg className="dungeon"
              width={this.state.width * 10}
              height={this.state.height * 10} >
              {floor_tiles}
            </svg>
            <div>
              {JSON.stringify(floor_json)}
            </div>
          </div>
        );
    }
}

class DungeonEditorTile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <rect x={this.props.column*10} y={this.props.row*10}
        width={10} height={10}
        className={this.props.tileType}
        onClick={(event)=>this.props.clickHandler(this.props.column, this.props.row)} />
    );
  }
}

ReactDOM.render(<DungeonEditorComponent/>, app);
