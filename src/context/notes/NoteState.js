import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "6469ddeebca5d37b518c21ace",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:34.177Z",
          "__v": 0
        },
        {
          "_id": "6469ddf3b7ca5d37b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        },
        {
          "_id": "6469ddf4b7ca5d37b18c21ad2",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:40.384Z",
          "__v": 0
        },
        {
          "_id": "6469ddf3bca5d537b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        },
        {
          "_id": "6469ddf83bca5d37b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        },
        {
          "_id": "6469ddf34bca5d37b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        },
        {
          "_id": "6469ddf35bca5d37b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        },
        {
          "_id": "6469ddf3bc2a5d37b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        },
        {
          "_id": "6469ddf3bca51d37b18c21ad0",
          "user": "6467b0ff921422e3eaf77f07",
          "title": "MyTitle",
          "description": "my first note",
          "tag": "personal",
          "date": "2023-05-21T09:01:39.219Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;