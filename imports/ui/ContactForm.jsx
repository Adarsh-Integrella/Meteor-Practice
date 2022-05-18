import React, {useState} from "react";
import { ContactCollection } from "../api/ContactCollection";

export const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ImageUrl, setImageUrl] = useState("");

  const SaveChanges = (e) => {
    e.preventDefault()
      console.log({Name, Email, ImageUrl});
      ContactCollection.insert({Name, Email, ImageUrl});
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name :</label>
        <input
        value={Name}
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
        value={Email}
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image Url :</label>
        <input
        value={ImageUrl}
          id="imageUrl"
          type="text"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={SaveChanges}>
          Save contact
        </button>
      </div>
    </form>
  );
};
