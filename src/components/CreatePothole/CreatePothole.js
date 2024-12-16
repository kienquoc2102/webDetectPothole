import React, { useState } from "react";
import axios from "axios";
import style from "./CreatePothole.module.scss"

function CreatePothole({ token }) {
  const [street, setStreet] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [level, setLevel] = useState("");
  const [isOpenDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/v1/pothole/create",
        { street, longitude, latitude, level },
        { headers: { token: `Bearer ${token}` } }
      );
      console.log(response.data);
      setOpenDialog(true);
      setDialogMessage("Create pothole Successfully!")
    } catch (err) {
      console.error(err);
      setDialogMessage("Fail to create pothole!");
      setOpenDialog(true);
    }
  };

  const closeDialog = () => {
    setOpenDialog(false);
  }

  return (
    <div className={style.container}>
      <div className={style.form}>
        <h2 className= {style.header}>Create Pothole</h2>
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <button onClick={handleCreate}>Create Pothole</button>
      </div>

      {/* Dialog Notification */}
      {isOpenDialog && (
        <div className={style.dialogOverlay}>
          <div className={style.dialog}>
            <p>{dialogMessage}</p>
            <button onClick={closeDialog}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePothole;
