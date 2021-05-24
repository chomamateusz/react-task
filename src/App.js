import React from "react";
import "./styles.css";

const files = [
  {
    type: "directory",
    name: "Folder 1",
    children: [
      {
        type: "file",
        name: "File 1"
      },
      {
        type: "directory",
        name: "Folder 2",
        children: [
          {
            type: "file",
            name: "File 2"
          },
          {
            type: "directory",
            name: "File 3"
          }
        ]
      }
    ]
  },
  {
    type: "directory",
    name: "Folder 3",
    children: []
  },
  {
    type: "directory",
    name: "Folder 4"
  },
  {
    type: "file",
    name: "File 4"
  }
];

const FileExplorer = (props) => {
  return <div>YOUR CODE HERE</div>;
};

export default function App() {
  return <FileExplorer files={files} />;
}
